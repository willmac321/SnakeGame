function Apple(){

this.x=(Math.floor(random()*width/scl)*scl);
this.y=(Math.floor(random()*height/scl)*scl);

  this.show = function(){

    fill(240,0,10);
    rect(this.x,this.y,scl,scl);
  };

  this.eat=function(){
    if(this.collide()){
      this.x=(Math.floor(random()*width/scl)*scl);
      this.y=(Math.floor(random()*height/scl)*scl);
      this.x=constrain(this.x,0,width-scl);
      this.y=constrain(this.y,0,height-scl);
      s.grow();
    }
  };

  this.collide = function(){
    if(dist(this.x,this.y,s.x,s.y)<=scl/2){
      return true;
    }
    return false;
  };

}
