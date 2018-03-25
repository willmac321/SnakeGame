function ScoreBoard(){
  var rank=0;
  this.score=createDiv('Score: ' + (count-1));
  this.score.position(xOffset,yOffset);
  this.score.size(width,scorebox-2);
  this.score.style('border-bottom','2px');
  this.score.style('background-color',color(51));
  this.score.style('color',color(255));
  this.score.style('text-align','center');

  this.rank=createDiv('Top Scores');
  this.rank.position(xOffset*2+width,yOffset);
  this.rank.style('border-bottom','2px');

  this.show = function(){
    this.score.html('Score: ' + (count-1));
  }

  this.recordScore=function(){
        this.rank.html('<br />' + hour() + ':' + minute() +':'+second() + ' Score: '+ (count-1), true);
        count=1;
        rank++;
  }
}
