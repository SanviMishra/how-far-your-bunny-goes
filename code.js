var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e70925a3-7f87-45f7-97b0-8a94f5998ceb","192af312-eb52-43cd-988c-6dab36d41549","965ae5b5-acfe-49f8-876d-2289f1c548c9","6f5a1f45-2036-4f86-a7b2-97d3824b24bf","cec81205-fa82-4a8d-ae48-9dd0e0639471","4d5a78db-28d0-456a-8192-67c47a264e61","94ea602c-15b4-4b27-8f38-c655a1055325","c3ec4f7b-aa45-4832-a70d-1e686ed0b9d7","505eac49-c833-4139-b523-363824ada640","d7b0955e-df3d-4b37-afd6-56bcce8d5408"],"propsByKey":{"e70925a3-7f87-45f7-97b0-8a94f5998ceb":{"name":"brick","sourceUrl":"assets/api/v1/animation-library/gamelab/8oaSrv3xEy2aVmAfx1BQBxD5EnN2krFt/category_environment/brick_red.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"8oaSrv3xEy2aVmAfx1BQBxD5EnN2krFt","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8oaSrv3xEy2aVmAfx1BQBxD5EnN2krFt/category_environment/brick_red.png"},"192af312-eb52-43cd-988c-6dab36d41549":{"name":"bunny","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"965ae5b5-acfe-49f8-876d-2289f1c548c9":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png","frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":2,"version":"oJA_StLAuFjArBvI70IttdAWhnlMl8Wo","loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":49},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oJA_StLAuFjArBvI70IttdAWhnlMl8Wo/category_characters/alienGreen_badge.png"},"6f5a1f45-2036-4f86-a7b2-97d3824b24bf":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"aXIwTL0KevFPJmB4znlDvsF2DvmDH544","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6f5a1f45-2036-4f86-a7b2-97d3824b24bf.png"},"cec81205-fa82-4a8d-ae48-9dd0e0639471":{"name":"ground_grass_broken_1","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"65zJeYH7zHCHnf8w1IQ2tURlQ.s3Z64E","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/cec81205-fa82-4a8d-ae48-9dd0e0639471.png"},"4d5a78db-28d0-456a-8192-67c47a264e61":{"name":"sword_bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/FIgBszDFP.8cfuB.il_h9gkx9iPCY2nG/category_tools/sword_bronze.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"FIgBszDFP.8cfuB.il_h9gkx9iPCY2nG","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FIgBszDFP.8cfuB.il_h9gkx9iPCY2nG/category_tools/sword_bronze.png"},"94ea602c-15b4-4b27-8f38-c655a1055325":{"name":"bunny_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.uEpXdMH.MquXH85XVmBVf67c1wSQXUg/category_animals/bunny1.png","frameSize":{"x":122,"y":209},"frameCount":2,"looping":true,"frameDelay":2,"version":".uEpXdMH.MquXH85XVmBVf67c1wSQXUg","loadedFromSource":true,"saved":true,"sourceSize":{"x":244,"y":209},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.uEpXdMH.MquXH85XVmBVf67c1wSQXUg/category_animals/bunny1.png"},"c3ec4f7b-aa45-4832-a70d-1e686ed0b9d7":{"name":"bunny_hurt","sourceUrl":"assets/api/v1/animation-library/gamelab/zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy/category_animals/bunny1_hurt.png","frameSize":{"x":150,"y":174},"frameCount":1,"looping":true,"frameDelay":2,"version":"zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":174},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zY6wdkRSq43R4KIJPNpUo3wXM3r4Qqhy/category_animals/bunny1_hurt.png"},"505eac49-c833-4139-b523-363824ada640":{"name":"rainbow","sourceUrl":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oxL0ak8K0_DZMb1sQi0VfaI8XrHTF6Jd/category_backgrounds/background_rainbow.png"},"d7b0955e-df3d-4b37-afd6-56bcce8d5408":{"name":"monster","sourceUrl":"assets/api/v1/animation-library/gamelab/BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly/category_characters/orange_monster.png","frameSize":{"x":240,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly","loadedFromSource":true,"saved":true,"sourceSize":{"x":240,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BHJWF812ARLlKRd3Tk0aX_Zyb9HLKrly/category_characters/orange_monster.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var jumper =createSprite( 70,250,20,20);
jumper.setAnimation("bunny_1");
jumper.scale=0.5;

var END=0;
var PLAY=1;
var gameState=PLAY;  

var coinGroup = createGroup();

var Score=0;

var swordGroup=createGroup();
var ground = createSprite(0,380,900,400);
ground.setAnimation("ground_grass_broken_1");

//ground.x = ground.width/2;

ground.width=900;
ground.scale=1.0;

var invisibleGround=createSprite(200,350,400,19);
invisibleGround.visible=false;

//var backscreen=createSprite(200,600,800,200);
//backscreen.setAnimation("rainbow");


function draw() {

background("black");

if(gameState===PLAY){

ground.velocityX = -(6 + 3*Score/4);
ground.velocityX = -2;

if (ground.x < 0)
{
ground.x = ground.width/2;
}

if(World.frameCount%60===0){
enemy();
}

if(World.frameCount%90===0){
swords();
}

// console.log(jumper.y);

if(keyDown("space")){
jumper.velocityY = -10;
//  console.log(jumper.velocityX);
}

for(var n=0;n<coinGroup.maxDepth();n=n+1){
if(coinGroup.get(n)!=null&&jumper.isTouching(coinGroup.get(n))){
coinGroup.get(n).destroy();
Score=Score+1;
}
}

if(swordGroup.isTouching(jumper)){
gameState = END;
}

jumper.velocityY = jumper.velocityY +0.5;

textSize(28);
textFont("georgia");
text("Score: " + Score,250,100);

}

else if(gameState === END) {
jumper.setAnimation("bunny_hurt");
textSize(28);
text("Game Over!!",150,150);
text("Press R to restart",140,200);

ground.velocityX = 0;
jumper.velocityY=0;
coinGroup.setVelocityXEach(0);
swordGroup.setVelocityXEach(0);
coinGroup.setLifetimeEach(-1);
swordGroup.setLifetimeEach(-1);

if(keyDown("R")){
restart();
}

}

jumper.collide(invisibleGround);

drawSprites();
}

function enemy(){

var coin=createSprite(106,0,10,10);
coin.y=randomNumber(150,200);
coin.x=randomNumber(70,200);
coin.setAnimation("coin");
coin.scale=0.7;
coin.velocityX=-2;
coinGroup.add(coin);
coin.x=randomNumber(0,400);

}

function swords(){

var sword=createSprite(400,300,10,10);
sword.setAnimation("monster");
sword.scale=0.2;
sword.velocityX=-4;
swordGroup.add(sword);
//sword.x=randomNumber(0,400);

}

function restart(){

gameState=PLAY;
jumper.x=70;
jumper.y=250;
coinGroup.destroyEach();
jumper.setAnimation("bunny_1");
// gameOver.visible = false;
coinGroup.destroyEach();
swordGroup.destroyEach();
Score=0;

}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
