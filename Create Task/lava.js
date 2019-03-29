function Lava(loc){

  this.loc = loc;

  this.run = function(){
    this.render();
  }

  this.render = function(){
    fill(255, 0, 0);
    //image(img, this.loc.x, this.loc.y, img.width / 7, img.height / 7);
    image(img2, this.loc.x, this.loc.y, img.width / 7, img.height / 7);
    image(img2, this.loc.x+20, this.loc.y, img.width / 7, img.height / 7);
    image(img2, this.loc.x+20, this.loc.y+20, img.width / 7, img.height / 7);
    image(img2, this.loc.x, this.loc.y+20, img.width / 7, img.height / 7);
  }

}
