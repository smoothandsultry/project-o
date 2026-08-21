
"use strict";
var TimeInterval=1/100000;
var Gravity=9.8;
var ElasticK=0.1;
var SlowK=0.99;
var UnitLengthWeight=1/1000;
var LengthLength=1/10;
var LengthWeight=UnitLengthWeight*LengthLength;
var RopeList=[];
var DrawSize;
var canvas=document.querySelector('#canvas');
var ctx=canvas.getContext("2d");
var FullWidth,FullHeight,MinFullSize,NormalWidth,NormalHeight,MinNormalSize;
function WindowResize(){
	FullWidth=window.innerWidth*window.devicePixelRatio;
	FullHeight=window.innerHeight*window.devicePixelRatio;
	var tcanvas=document.querySelectorAll('.canvas');
	for(var i=0;i<tcanvas.length;i++){
		tcanvas[i].style='transform: scale('+1/window.devicePixelRatio+')';
		tcanvas[i].style.width  = FullWidth+'px';
		tcanvas[i].style.height = FullHeight+'px';
		tcanvas[i].width=FullWidth;
		tcanvas[i].height=FullHeight;
	}
	NormalWidth=FullWidth/100;
	NormalHeight=FullHeight/100;
	MinFullSize=Math.min(FullWidth,FullHeight);
	MinNormalSize=Math.min(NormalWidth,NormalHeight);
	
	DrawSize=MinNormalSize*5;
}
WindowResize();
window.onresize=function(){WindowResize();}
function RopeIni(){
    RopeList = [];
    
    var xPositions = [-2, 2];

    for(var listi = 0; listi < xPositions.length; listi++){
        var Rope = [];
        var startX = xPositions[listi];
        for(var i = 0; i < 20; i++){
            Rope.push({ x: startX, y: LengthLength * i, vx: 0, vy: 0 });
        }
        RopeList.push(Rope);
    }
}
RopeIni();
function PhysicalChange(){
	for(var listi=0;listi<RopeList.length;listi++){
		var Rope=RopeList[listi];
		var OldRope=structuredClone(Rope);
		for(var i=1;i<OldRope.length-1;i++){
			Rope[i].vy+=Gravity*TimeInterval;
			if(i+1<OldRope.length){
				var Force=0;
				var Distance=Math.sqrt((OldRope[i].x-OldRope[i+1].x)*(OldRope[i].x-OldRope[i+1].x)+(OldRope[i].y-OldRope[i+1].y)*(OldRope[i].y-OldRope[i+1].y));
				if(Distance>LengthLength){
					Force=(Distance-LengthLength)*ElasticK;
					Rope[i].vx+=(OldRope[i+1].x-OldRope[i].x)/Distance*Force/LengthWeight*TimeInterval;
					Rope[i].vy+=(OldRope[i+1].y-OldRope[i].y)/Distance*Force/LengthWeight*TimeInterval;
				}
			}
			if(i-1>=0){
				var Force=0;
				var Distance=Math.sqrt((OldRope[i].x-OldRope[i-1].x)*(OldRope[i].x-OldRope[i-1].x)+(OldRope[i].y-OldRope[i-1].y)*(OldRope[i].y-OldRope[i-1].y));
				if(Distance>LengthLength){
					Force=(Distance-LengthLength)*ElasticK;
					Rope[i].vx+=(OldRope[i-1].x-OldRope[i].x)/Distance*Force/LengthWeight*TimeInterval;
					Rope[i].vy+=(OldRope[i-1].y-OldRope[i].y)/Distance*Force/LengthWeight*TimeInterval;
				}
			}
			Rope[i].vx*=SlowK;
			Rope[i].vy*=SlowK;
			Rope[i].x+=Rope[i].vx;
			Rope[i].y+=Rope[i].vy;
		}
	}
}
function DisplayDraw(){
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0,FullWidth,FullHeight);
	ctx.setTransform(1,0,0,1,FullWidth/2,FullHeight/2);
	ctx.lineWidth=DrawSize/20;
	ctx.lineCap="round";
	ctx.lineJoin="round";
	ctx.strokeStyle="#ff0000";
	for(var listi=0;listi<RopeList.length;listi++){
		var Rope=RopeList[listi];
		ctx.beginPath();
		ctx.moveTo(Rope[0].x*DrawSize,Rope[0].y*DrawSize);
		for(var i=1;i<Rope.length;i++){
			ctx.lineTo(Rope[i].x*DrawSize,Rope[i].y*DrawSize);
		}
		ctx.stroke();
	}
}
function FrameCycle(){
	for(var i=0;i<10;i++){
		PhysicalChange();
	}
	DisplayDraw();
	requestAnimationFrame(FrameCycle);
}
FrameCycle();
canvas.onmousemove=canvas.ontouchmove=function(){
	var x,y;
	if(event.touches){
		x=event.touches[0].clientX*window.devicePixelRatio;
		y=event.touches[0].clientY*window.devicePixelRatio;
	}else{
		x=event.clientX*window.devicePixelRatio;
		y=event.clientY*window.devicePixelRatio;
	}
	for(var listi=0;listi<RopeList.length;listi++){
		var Rope=RopeList[listi];
		Rope[Rope.length-1].x=(x-FullWidth/2)/DrawSize;
		Rope[Rope.length-1].y=(y-FullHeight/2)/DrawSize;
	}
}