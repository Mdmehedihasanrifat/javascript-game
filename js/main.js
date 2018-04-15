
var canvas;



var canvasContext;
var ballX;
var ballY;

  var ballXspeed=10;
var ballYspeed=6;
 var frameset=30;
 var paddleY=100;
 var paddleheight=100;
var count=0;



window.onload=function(){
    canvas = document.getElementById("display");
    canvasContext = canvas.getContext("2d");
    setInterval(both, 1000 / frameset);
    canvas.addEventListener("mousemove", function (event) {

        paddleY = mouseCount(event).y - paddleheight / 2;


    });


    canvas.addEventListener("click",function(event) {


        if (mouseCount(event).x > 100 && mouseCount(event).x<130 && mouseCount(event).y>10 && mouseCount(event).y<25)
            reset();


        });


    //pause
    canvas.addEventListener("click",function(event) {


        if (mouseCount(event).x >300 && mouseCount(event).x<340 && mouseCount(event).y>10 && mouseCount(event).y<25)
            alert("game is pause");


    });
    //level1
    canvas.addEventListener("click",function(event) {


        if (mouseCount(event).x > 200 && mouseCount(event).x<235 && mouseCount(event).y>10 && mouseCount(event).y<25)

            ballXspeed=10;
        ballYspeed=6;


    });

    //level2
    canvas.addEventListener("click",function(event) {


        if (mouseCount(event).x > 200 && mouseCount(event).x<235 && mouseCount(event).y>10 && mouseCount(event).y<25)

            ballXspeed=20;
        ballYspeed=12;


    });

    //level3

    canvas.addEventListener("click",function(event) {


        if (mouseCount(event).x > 250 && mouseCount(event).x<285 && mouseCount(event).y>10 && mouseCount(event).y<25)
            ballXspeed=30;
        ballYspeed=18;



    });






};


function both() {

    moveball();
    drawevery();
}
function mouseCount(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    return {


        x:mouseX,
        y:mouseY
    };
}
function reset() {
    ballX=100;
    ballY=100;

}
function moveball() {

    if(ballX >= canvas.width)
    {

        ballXspeed=-ballXspeed;//ballx=ballx-ballspeed;
            }
if(ballX <= 0){
        if(ballY>paddleY&& ballY<paddleY+paddleheight)
        {
    ballXspeed=-ballXspeed;//ballx=0;
             }
            else{
            ballXspeed=-ballXspeed;
            reset();
            count++;
            if(count==3){

                alert("Game is over");
                count=0;


            }
        }

    }





    if(ballY >= canvas.height)
    {
        ballYspeed=-ballYspeed;//bally=bally-ballyspeed;
    }
    if(ballY <= 0){

        ballYspeed=-ballYspeed;//bally=0;
    }
    ballY=ballY+ballYspeed;
    ballX=ballX+ballXspeed;
}
function colorreact(color,X,Y, width,height) {

    canvasContext.fillStyle=color;
    canvasContext.fillRect(X,Y,width,height);

}
function canvastext(color,text,x,y) {
    canvasContext.fillStyle=color;
    canvasContext.fillText(text,x,y);




}


function drawevery() {



    //  canvasContext.fillStyle="black";
    //canvasContext.fillRect(0,0,800,600);
    colorreact("black",0,0,800,600);
//ball
//canvasContext.fillStyle="white";
//canvasContext.fillRect(ballX, ballY, 5 ,5);
    colorreact("white",ballX,ballY,5,5);
//sidebar
    colorreact("white",2,paddleY , 5,paddleheight);
//canvasContext.fillRect(2,paddleY , 5,paddleheight);
//canvasContext.fillRect(796, ballY-paddleheight/3, 5 ,100);

    colorreact("white",796,ballY-paddleheight/3,5,100);
    canvastext("white",count,100,100);
    colorreact("white",100,10,30,15);
    canvastext("black","play",105,20);
    colorreact("white",150,10,35,15);
    canvastext("black","level1",155,20);
    colorreact("white",200,10,35,15);
    canvastext("black","level2",205,20);
    colorreact("white",250,10,35,15);
    canvastext("black","level3",255,20);
    colorreact("white",300,10,40,15);
    canvastext("black","pause",305,20);

}