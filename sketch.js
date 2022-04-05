var oliver, oliverImg;
var girl, girlImg;
var speechBubble, speechBubbleImg;
var professor, professorImg;
var classroom, classroomImg;
var button, buttongImg;
var bully1, bully1Img;
var bully2, bully2Img;
var bully3, bully3Img;
var portion, portionImg;
var life=200;
var bg, bgImg,corridorImg,corridor2Img,corrMixImg;
var count=0;
var bellSound;
var button1, button1img;



function preload(){
  oliverImg = loadAnimation ("oliver1.png","oliver2.png","oliver3.png","oliver4.png","oliver5.png","oliver6.png","oliver7.png","oliver8.png");
  girlImg = loadImage("girl.png");
  bgSchoolImg = loadImage("bgg.jpg");
  speechBubbleImg = loadImage("speech bubble.png");
  professorImg = loadImage("professor.png");
  classroomImg = loadImage("classroom bg.jpg");
  buttongImg = loadImage("button.png");
  bully1Img = loadImage("bullygang(1).png");
  bully2Img = loadImage("bullygang(2).png");
  bully3Img = loadImage("bullygang.png");
  portionImg = loadImage("potion.png");


  oliverStopImg = loadAnimation("oliver4.png");

  bgImg = loadImage("bgg.jpg");
  bgflipImg = loadImage("bggflip.jpg");
  corridorImg=loadImage("corridor1.png");
  corridor2Img=loadImage("boxes.jpg");
  corrMixImg=loadImage("mixed.PNG");
  bellSound=loadSound("bell.mp3");
  button1Img = loadImage("button.png");

  
  
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  bgSchool = createSprite(400,200);
  bgSchool.addImage("bg",bgSchoolImg);
  bgSchool.scale = 1.5;

  classroom = createSprite(width/2-200,height/2);
  classroom.addImage("bg",classroomImg);
  classroom.scale = 2.5;
  classroom.visible = false;
  professor = createSprite(500,400);
  professor.addImage("img",professorImg);
  professor.visible = false;
  professor.scale = 0.4;

button = createSprite(800,400);
button.addImage("button",buttongImg);
bully1 = createSprite(200,300);
bully1.addImage("bully",bully1Img);
bully1.visible = false;
bully2 = createSprite(300,300);
bully2.addImage("bu",bully2Img);
bully2.visible = false;
bully3= createSprite(400,300);
bully3.addImage("b",bully3Img);
bully3.visible = false;

portion = createSprite(100,100);
portion.addImage("portion",portionImg);
portion.scale=0.2;
portion.visible = false;
speechBubble = createSprite(professor.x+150,professor.y-200);
speechBubble.addImage("img",speechBubbleImg);
speechBubble.visible = false;
speechBubble.scale=0.5;

button1 = createSprite(200,400);
button1.addImage("button1",button1Img);
button1.visible=false;
 

 oliver = createSprite(400, 300, 50, 50);
oliver.addAnimation("oliverImg",oliverImg);
oliver.addAnimation("oliverStop",oliverStopImg);
oliver.velocityX = 1;  

  
 
  

  

}

function draw() {
  background(255,255,255);
  image(bgImg,1300,0,800,400);
  image(bgflipImg,550,0,800,400);
  image(corridorImg,2120,0,800,400);
 
  image(corrMixImg,2900,0,800,400);
  image(corridor2Img,3500,0,800,400);
  image(bgImg,4200,0,800,400);
  if(oliver.x>4600){
    oliver.x=200;
  }

  drawSprites();
    camera.position.x = oliver.x;

  if(keyDown(RIGHT_ARROW)){
    oliver.x+=05;

  }

  if(keyDown(LEFT_ARROW)){
    oliver.x-=05;

  }

  if(mousePressedOver(button)){
    classroom.visible = true;
    professor.visible = true;
    bgSchool.visible = false;
    button.visible = false;
    oliver.velocityX =0;
    oliver.velocityY =0;
    oliver.changeAnimation("oliverStop");
    speechBubble.visible = true;
    oliver.x=400;
    oliver.y=400;
    
  

  }
  if(classroom.visible===true){
    count++

  }
  textSize(20);
  fill("black");
  if(count<100 && count>5){
    text("Good Morning children",speechBubble.x-100,speechBubble.y-50);

  }
  else if(count>100 && count<200){
    text("As usual,I am going to assign you 20 sums in math",speechBubble.x-100,speechBubble.y-50);
    text("200+350=?,oliver is going to give me the answer for this.",speechBubble.x-100,speechBubble.y-20);
  }
  else if(count>200 && count<250){
    bellSound.play();
    button1.visible=true;

  }
  if(mousePressedOver(button1)&& classroom.visible===true){
    button1.visible=false;
    classroom.visible=false;
    corridorImg.visible=true;
    oliver.changeAnimation("oliverImg");
    oliver.velocityX=1;
    professor.visible=false;
    speechBubble.visible=false;
    bellSound.stop();
    bully1.visible=true;
    bully2.visible=true;
    bully3.visible=true;
    bgSchool.visible=true;




  }
  
     //showlife();
  if(oliver.isTouching(bully1)||oliver.isTouching(bully2)||oliver.isTouching(bully3)){
    life-=0.3;
  }
 if(oliver.isTouching(portion)){
   life=200;

 }


}
function showlife(){
  push();
  fill("white");
  rect(oliver.x,oliver.y-100,200,15);
  fill("grey");
  rect(oliver.x,oliver.y-100,life,15);
  pop();
}






 
