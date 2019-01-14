function bubbleSort (){
  for (var i = 0; i<txt.length; i++){
    for (var j = 0; j <txt.length-i-1; j++){
      if (txt[j] >txt[j+1]){
          var temp = txt[j];
           txt[j] =txt[j+1];
             txt[j+1] = temp; //swap
           }



    }
  }


    }
