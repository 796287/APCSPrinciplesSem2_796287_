//Connor Garratt


//global variables
//measurements
var compares = 0;
var swaps = 0;
//timer for sorting method
var millisecondEnd;
var milliseondStart;
var difference;

var data = [];
var dataNumbers = 20000


function setup() {
  for(var i = 0; i < dataNumbers; i++){
    data.push(random(0, 2000));
  }
  //remove blank black screen
  noCanvas();
  bubbleSort(data);
}

function draw() {
}

function bubbleSort(data) {
  millisecondStart = millis();
  var length = data.length;
    //number of passes
    for (var i = 0; i < length; i++) {
        //notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the items next to eachother
            var a = data[j];
            var b = data[j+1];
            compares++;
            if(a > b) {
                //swap items
                var temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                swaps++;
            }
        }
    }
    millisecondEnd = millis();
    difference = millisecondEnd - millisecondStart;
    console.log(data);
    console.log(millisecondStart + " start");
    console.log(millisecondEnd + " end");
    console.log(difference + " difference");
    console.log(swaps + " swaps");
    console.log(compares + " compares");
}
