"use strict";

/* 編集するところなし */

console.log("draw.js is loaded.");

class Draw{
  constructor(_butter){
    this.butter=_butter;
    this.butter.lineWidth=layout.lineWidth;
    this.layoutCalc();
    this.render();
  };
  render(){
    this.drawFrame();
    this.drawStone();
    this.drawButton();
    this.drawLine();
    requestAnimationFrame(()=>{ this.render(); });
  };
  drawFrame(){
    const butter=this.butter;
    butter.fillAll("white");
    butter.fillStyle="black";
    for(let i=0;i<6;i++){
      butter.fillRect(layout.margine+(layout.square+layout.lineWidth)*i,
                      layout.margine, layout.lineWidth,
                      layout.lineWidth*6+layout.square*5);
      butter.fillRect(layout.margine,
                      layout.margine+(layout.square+layout.lineWidth)*i,
                      layout.lineWidth*6+layout.square*5,
                      layout.lineWidth);
    };
  };
  drawStone(){
    const butter=this.butter;
    const b=[...boards[boards.length-1]];
    for(let i=0;i<5;i++){
      for(let j=0;j<5;j++){
        switch(b[5*j+i]){
          case 0:
            butter.fillStyle="rgba(0,0,0,0)";
            break;
          case 1:
            butter.fillStyle="rgb(255,0,0)";
            break;
          case 2:
            butter.fillStyle="rgb(0,0,255)";
            break;
        };
        butter.fillArc(layout.stonePlaces[5*j+i][0], layout.stonePlaces[5*j+i][1], layout.radius);
      };
    };
  };
  drawButton(){
    const butter=this.butter;
    const con=butter.getContext();
    const rate=butter.getRate();
    if(boards.length%2==1){
      butter.fillStyle="rgb(255,0,0)";
    }else{
      butter.fillStyle="rgb(0,0,255)";
    };
    butter.fillArc(layout.drawAreaWidth/2,
                    layout.drawAreaWidth+layout.belowSpace/2,
                    layout.buttonSize+layout.buttonFrameWidth);
    butter.fillStyle="gold";
    butter.fillArc(layout.drawAreaWidth/2,
                    layout.drawAreaWidth+layout.belowSpace/2,
                    layout.buttonSize);
    butter.font=`${layout.fontSize}px Arial`;
    butter.fillStyle="black";
    con.textBaseline="middle";
    con.textAlign="center";
    con.fillText("←",(layout.drawAreaWidth/2)*rate.width,(layout.drawAreaWidth+layout.belowSpace/2)*rate.height);
  };
  drawLine(){
    const butter=this.butter;
    const con=butter.getContext();
    con.lineCap="round";
    butter.lineWidth=layout.winLineWidth;
    butter.strokeStyle="black";
    for(let i=0;i<lines.length;i++){
      const points=[];
      for(let j=0;j<lines[i].length;j++){
        points.push(layout.stonePlaces[lines[i][j]]);
      };
      butter.strokePath(points, false);
    };
  };
  layoutCalc(){
    layout.stonePlaces=[];
    for(let i=0;i<5;i++){
      for(let j=0;j<5;j++){
        layout.stonePlaces[5*j+i]=[];
        layout.stonePlaces[5*j+i][0]=layout.margine+layout.lineWidth+(layout.square)/2+(layout.square+layout.lineWidth)*i;
        layout.stonePlaces[5*j+i][1]=layout.margine+layout.lineWidth+(layout.square)/2+(layout.square+layout.lineWidth)*(4-j);
      };
    };
  };
};
