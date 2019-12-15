/*
* @Author: dell
* @Date:   2019-12-15 08:23:00
* @Last Modified by:   dell
* @Last Modified time: 2019-12-15 08:27:49
*/
var box1=document.getElementById("box1");
var box3=document.getElementsByClassName("box3");
var slide=document.getElementsByClassName("slide");
var leftButton=document.getElementById("leftButton");
var rightButton=document.getElementById("rightButton");
var navList=document.getElementById("nav").children;
var box2=document.getElementsByClassName("box2");
var txt=document.getElementsByClassName("txt");
var time=setInterval(function(){
	var left=getStyle(box2[0],"left");
	// console.log(left);
	box2[0].style.left=(parseInt(left)-1)+"px";
	if(parseInt(getStyle(box2[0],"left"))==-1780){
		box2[0].style.left=-353+"px";
	}
},20);
var index=1;
var flag=false;
function start(){
	if(!flag){
		flag=true;
		index++;
		change();
		animate(box3[0],{left:-1200*index},function(){
			if(index===6){
				box3[0].style.left="-1200px";
				index=1;
			}
			flag=false;
		});
	}
}
function prevous(){
	if(!flag){
		flag=true;
		index--;
		change();
		animate(box3[0],{left:-1200*index},function(){
			if(index===0){
				box3[0].style.left="-6000px";
				index=5;
			}
			flag=false;
		});
	}
}
var timer=setInterval(start,2000);
box1.onmouseover=function(){
	animate(leftButton,{opacity:50});
	animate(rightButton,{opacity:50});
	clearInterval(timer);
}
box1.onmouseout=function(){
	animate(leftButton,{opacity:0});
	animate(rightButton,{opacity:0});
	timer=setInterval(start,3000)
}
rightButton.onclick=start;
leftButton.onclick=prevous;
		
for(var j=0;j<navList.length;j++){
	navList[j].btn=j;
	navList[j].onclick=function(){
		// console.log(this.btn);
		index=this.btn+1;
		change();
		// console.log(index);
		animate(box3[0],{left:-1200*index});
	}
}
function change(){
	for(var j=0;j<navList.length;++j){
		navList[j].className="";
	}
	if(index===6){
		navList[0].className="active";
	}
	else if(index===0){
		navList[4].className="active";
	}
	else{
		navList[index-1].className="active";
	}
}