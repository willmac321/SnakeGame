var count;
function Snake(){
  this.x=0;
  this.y=floor((height)/2);
  this.xspeed=1;
  this.yspeed=0;
  this.snek=[];
  count=1;

    this.show = function() {
        fill(255);

        for(var i=0; i<count; i++){
            rect(this.snek[i].x,this.snek[i].y,scl,scl);
        }
        //rect(this.x,this.y,scl,scl);
    };

    this.grow = function(){
      count++;
    };

    this.dir = function(x,y){
        if (x!=this.xspeed && y!=this.yspeed ){
          this.xspeed=x;
          this.yspeed=y;
        }

    };

    this.update = function(){
      if (count===this.snek.length){
          for(var i=0;i<count;i++){
            this.snek[i]=this.snek[i+1];
          }
      }
      this.snek[count-1]=createVector(this.x,this.y);

      this.x+=(this.xspeed*(scl));
      this.y+=(this.yspeed*(scl));

      this.x = constrain(this.x,0,width-scl);
      this.y = constrain(this.y,0,height-scl);

      if(this.collide()){
          b.recordScore();
          this.x=0;
          this.y=floor((height)/2);
          this.xspeed=1;
          this.yspeed=0;
          this.snek=[];
          this.snek[count-1]=createVector(this.x,this.y);
      }

    };

    this.collide = function(){
      for(var i=0; i<count; i++){
          if(dist(this.snek[i].x,this.snek[i].y,this.x,this.y)<=scl/2 ) {
              return true;
          }
      }
      return false;
    };
  }
