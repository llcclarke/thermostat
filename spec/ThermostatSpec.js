(function () {
   'use strict';
}());

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it('up increases', function(){
    thermostat.up();
    expect(thermostat.temperature).toBeGreaterThan(20);
  });

  it('down decreases', function(){
    thermostat.down();
    expect(thermostat.temperature).toBeLessThan(20);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 100; i >= 0; i--) {
      thermostat.down();
    }
     expect(thermostat.temperature).toBeGreaterThan(9);
  });


  it ('power saving mode can be turned off', function(){
    thermostat.changePowerSavingMode();
    expect(thermostat.maxTemp).toEqual(32);
  });

  it('if power saving mode is on, the maximum temperature is 25 degrees', function(){
    for (var i = 100; i >= 0; i--) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBeLessThan(26);
  });


  it('if power saving mode is off, the maximum temperature is 32 degrees', function(){
    thermostat.changePowerSavingMode();
    for (var i = 100; i >= 0; i--) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBeLessThan(33);
    expect(thermostat.temperature).toBeGreaterThan(25);
  });

  it('can change powersaving mode on and off', function(){
      thermostat.changePowerSavingMode();
      thermostat.changePowerSavingMode();
      expect(thermostat.maxTemp).toEqual(25);
  });

  it('resets to 20 degrees', function(){
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it('returns "low" if temperature is below 18 degrees', function(){
   for (var i = 3; i >= 0; i--) {
     thermostat.down();
   }
   expect(thermostat.energyMonitor()).toEqual("low");
  });

  it('returns "Medium" if temperature is between 18 - 25', function(){
    expect(thermostat.energyMonitor()).toEqual("medium");
  });

  it('returns "Hot" if temperature is abover 25', function(){
    for (var i = 6; i >=0; i--){
      thermostat.up();
    }
    expect(thermostat.energyMonitor()).toEqual("high");
  });
  it ('resets to Powersaving Mode Max temp when you put Powersaving Mode back on', function(){
      thermostat.changePowerSavingMode();
    for (var i = 10; i >=0; i--){
      thermostat.up();
    }
    thermostat.changePowerSavingMode();
    expect(thermostat.temperature).toEqual(25);
  });

});
