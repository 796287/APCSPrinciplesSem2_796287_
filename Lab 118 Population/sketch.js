
//Connor Garratt
//January 18, 2019
//Crime JSON

//  Global variables

var data = [];
var sortBy = "males";
var bigTotal = 0;

function preload(){
  data = loadJSON("population.json");
}

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  //background color
  background(5, 5, 5);
  fill(200, 30, 150);
  bubble();
  represent();
}

function draw() {
}
//sorting with bubble sort
function bubble(){
  var temp;
  if(sortBy = "total"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].total < data.countrydata[j-1].total){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  //sorting the data by females
  if(sortBy = "females"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].females < data.countrydata[j-1].females){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  //sorting the data by males
  if(sortBy = "males"){
    for (var i = 1; i < data.countrydata.length; i++){
      for(var j = i; j > 0; j--){
        if(data.countrydata[j].males < data.countrydata[j-1].males){
          temp = data.countrydata[j];
          data.countrydata[j] = data.countrydata[j-1];
          data.countrydata[j-1] = temp;
        }
      }
    }
  }
  console.log(data);
}
//represent the json data on a pie graph
function represent(){
  for(var i = 1; i < data.countrydata.length; i++){
    bigTotal = bigTotal + data.countrydata[i].total;
  }
  var lastAngle = 0;
  for(var i = 0; i < data.countrydata.length; i ++){
    var angle = ((data.countrydata[i].total / bigTotal) * (2 * PI));
    fill(190, 200, 10*i);
    arc(300, 300, 500, 500, lastAngle, lastAngle + angle);
    lastAngle += angle
  }
}
