// Note - use your own APPID to get this to work!

let weather;
let weatherID = 0; // returned in the JSON weather element
let state = 0;
let x = 0;
let windspeed = 0;
let weatherType;
let temp;
let image1, image2;
let font1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  image1 = loadImage('assets/weather.avif');
  image2 = loadImage('assets/cloud.png');
  font1 = loadFont('assets/Roboto.ttf');

  // HERE is the call to get the weather. We build the string first.

  let myCityString =
    "https://api.openweathermap.org/data/2.5/weather?q=Lagos,NG&units=imperial&";

  //You can also use "zipcode"
  // substitute zip=61820 for q=Normal,IL,US
 

 // let myIDString = "appid=xxxxx"; // put your ID instead of xxxxx
  
  let myIDString = "appid=a21e00bdf36317f4c606fdc8c9936475" ;

  let myTotalString = myCityString + myIDString;
  

  loadJSON(myTotalString, gotData); // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  print(weather); // for debugging purposes, print out the JSON data when we get it.

  windspeed = weather.wind.speed;

  temp = weather.main.temp;
  tempRound = Math.round(temp);

  weatherDesc = weather.weather[0].description;
  weatherDescCap = weatherDesc[0].charAt(0).toUpperCase() + weatherDesc.slice(1)

  latitude = weather.coord.lat;
  longitude = weather.coord.lon;
}

function draw() {
  switch (state) {
      
    case 0:
      if (weather) {
        state = 1;
      }
      break;

    case 1:
      background(image1);

      fill("rgba(0, 0, 0, 0.5)");
      rect(300, 100, 330, 270, 20);
  
      fill("white");
      textFont(font1);
      textSize(35);
      text(`${tempRound} °F`, 350, 160);
      textSize(35);
      text(`${weather.name}, ${weather.sys.country}`, 350, 210);
      textSize(15);
      text(`${weatherDescCap}`, 350, 250);
      textSize(15);
      text(`Latitude ${latitude} & Longitude ${longitude}`, 350, 290);
      textSize(15);
      text(`windspeed is ${windspeed} km/h`, 350, 330);

      // cloud
      //fill("white");
      //noStroke();
      //ellipse(x, 500, 200, 100);
      image(image2, x, 400, 220, 150);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;
  }
}
