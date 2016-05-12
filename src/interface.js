
$( document ).ready(function() {
  var thermostat = new  Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#temperature-power-save').click(function(){
    thermostat.changePowerSavingMode();
    updateTemperature();
  });

  function updateTemperature(){
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyMonitor());
  }


$.get("http://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=metric&APPID=94970d99a48188e387d14446d0b9d033", function(data){
  $('#city-temp').text(data.main.temp);
  });
});
