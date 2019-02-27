
//Connor Garratt
//January 18, 2019
//population JSON

//  Global variables

var data = [];
function preload(){
  data = loadJSON("population.json");
}


function setup() {
  //canvas
  var cnv = createCanvas(1000, 2250);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  //text size and location
  textSize(10);
  textAlign(CENTER, CENTER);

  organize();
}


function draw() {
}


function organize(){
  var temp;
  for (var i = 1; i < data.countrydata.length; i++){
    for(var j = i; j > 0; j--){

      if(data.countrydata[j].country < data.countrydata[j-1].country){
        temp = data.countrydata[j];
        data.countrydata[j] = data.countrydata[j-1];
        data.countrydata[j-1] = temp;
      }
    }
  }
  drawWords();
  check();
  bars();
}


function drawWords(){
  textAlign(LEFT);
  //titles of all of the sections
  fill(255, 255, 255);
  text("Countries", 100, 10);
  text("Totals", 300, 10);
  text("Males", 500, 10);
  text("Females", 700, 10);
  fill(70, 170, 0);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].country, 100, 10 + (i*10));
  }
  //representation of the total data
  fill(200, 55, 0);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].total, 300, 10 + (i*10));
  }
  //representation of male data
  fill(10, 80, 60);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].males, 500, 10 + (i*10));
  }
  //representation of female
  fill(20, 70, 2);
  for(var i = 1; i < data.countrydata.length; i++){
    text(data.countrydata[i].females, 700, 10 + (i*10));
  }
}


function check(){
  for(var i = 1; i < data.countrydata.length; i++){
    console.log(data.countrydata[i].total);
  }
}

function bars(){
  var allTotal = 0;
  var allMale = 0;
  var allFemale = 0;
  for(var i = 1; i < data.countrydata.length; i++){
    allTotal = allTotal + data.countrydata[i].total;
    allMale = allMale + data.countrydata[i].males;
    allFemale = allFemale + data.countrydata[i].females;
  }
  //total data in bar graph
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].total / allTotal) * (100);
    console.log(size + "size");
    fill(200, 55, 0);
    rect(350, 10 + (i*10), size*5, 10);
  }
  //the male data in bar graph
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].males / allMale) * (100);
    console.log(size + "size");
    fill(10, 80, 60);
    rect(550, 10 + (i*10), size*5, 10);
  }
  //the female data in bar graph
  for(var i = 1; i < data.countrydata.length; i++){
    var size = (data.countrydata[i].females / allFemale) * (100);
    console.log(size + "size");
    fill(20, 70, 2);
    rect(750, 10 + (i*10), size*5, 10);
  }
}
