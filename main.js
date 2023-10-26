"use strict";

console.log("main.js is loaded.");

window.addEventListener("load",()=>{
  requestAnimationFrame(()=>{ load(); });
},false);

const boards=[[
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0,
  0,0,0,0,0
]];
let lines=[];

let layout={
  margine: 10,
  lineWidth: 1,
  square: 60,
  radius: 22,
  belowSpace: 100,
  buttonSize: 40,
  fontSize: 50,
  winLineWidth: 6,
  buttonFrameWidth: 4
};

const load=()=>{
  layout.drawAreaWidth=2*layout.margine
                          +6*layout.lineWidth
                          +5*layout.square;
  layout.drawAreaHeight=layout.drawAreaWidth+layout.belowSpace;
  
  const butter=new butterjs({
    id: "myCanvas",
    resize: "window-size",
    aspect: [layout.drawAreaWidth, layout.drawAreaHeight],
    drawAreaWidth: layout.drawAreaWidth,
    quality: "user-2",
    preventContextmenu: true,
    preventScroll: true,
  });
  const draw=new Draw(butter);
  const game=new Game(butter);
};
