function Food(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    noStroke();
    fill(255, 0, 0);
    image(img, this.loc.x, this.loc.y, img.width / 7, img.height / 7);
  }

}
