var numscores=6;
var colors=GenerateRandomColor(numscores);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var colordisplay=document.querySelector(".ColorDisplay");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");
colordisplay.textContent=pickedcolor;


reset.addEventListener("click",function(){
	reset.textContent="New Colors";
	colors=GenerateRandomColor(numscores);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	message.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
})
for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor===pickedcolor)
		{
			message.textContent="Correct";
			changecolor(clickedcolor);
			h1.style.background=clickedcolor;
			reset.textContent="Play Again?";
		}
		else{
			message.textContent="Try Again";
			this.style.background="#232323";
		}
	})
}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background= color;
	}
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function GenerateRandomColor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numscores=3;
	colors=GenerateRandomColor(numscores);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});


hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numscores=6;
	colors=GenerateRandomColor(numscores);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
});
