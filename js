$(document).ready(function() {
  var longitude = "";
  var latitude = "";
  var farenheit = "";
  var celsius = "";
  var city = "";
  var weatherType = "";
  var icon = "";
  var tempChange = true;
  var celInt = "";
  
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(posit) {
      
      longitude = posit.coords.longitude;
      latitude = posit.coords.latitude;
      
      var weatherAPI = "https://fcc-weather-api.glitch.me/api/current?lat="+latitude+"&lon="+longitude+""; 
      
      $.getJSON(weatherAPI, function(data) {
      //JSON call
      weatherType = data.weather[0].description;
      celsius = data.main.temp.toFixed(1);
      city = data.name;
      
      
        
      
      var celNum = Number(celsius);
      
      
      //Kelvin to farenheit and celsius
      farenheit = (celsius) * (9/5) + 32;
      
        
      
      $("#city").html(city);
      $("#celsius").html(celsius + " &#8451");
      $("#weatherType").html(weatherType);
      
      //celsius to farenheit
      $("#celsius").click(function() {
        if (tempChange===true) {
          $("#celsius").html(farenheit.toFixed(1) + " &#8457");
          tempChange=false;
        } else {
          $("#celsius").html(celsius + " &#8451");
          tempChange=true;
        }
      });
     if (celNum<0) {
       $('body').css('background-image', 'url(https://images.unsplash.com/photo-1453235421161-e41b42ebba05?auto=format&fit=crop&w=1050&q=80)');
     } else if (celNum<10) {
       $('body').css('background-image', 'url(https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3f10bcf0c075eef53a823cebde27e032&auto=format&fit=crop&w=958&q=80)');
     } else if (celNum<20) {
       $('body').css('background-image', 'url(https://images.unsplash.com/photo-1447016840061-c336a1f84ec5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50a236561463d4652f25fd0ba2065122&auto=format&fit=crop&w=1048&q=80)');
     } else {
       $('body').css('background-image', 'url=(https://images.unsplash.com/photo-1503088414719-16a89b27b122?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac67c22838204d52c929d622284ff9b0&auto=format&fit=crop&w=1900&q=80)')
     }
        
      });
    });
  }

});
