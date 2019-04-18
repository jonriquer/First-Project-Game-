var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

//========== Global Variables ==========
let lava;
// let bananas;
// let treas;
var moveLeft = true
//======== End Global Variables ========

function preload () {
  this.load.spritesheet(
    'dude', './assets/dino.png',
    {frameWidth: 50, frameHeight: 60}
  );
  //=========== Background =============
  this.load.image('treesBushes', './assets/parallaxbg/02_treesandbushes.png');
  this.load.image('distantTrees', './assets/parallaxbg/03_distant_trees.png');
  this.load.image('bushes', './assets/parallaxbg/04_bushes.png');
  this.load.image('hill1', './assets/parallaxbg/05_hill1.png');
  this.load.image('hill2', './assets/parallaxbg/06_hill2.png');
  this.load.image('hugeClouds', './assets/parallaxbg/07_huge_clouds.png');
  this.load.image('clouds', './assets/parallaxbg/08_clouds.png');
  this.load.image('distantClouds1', './assets/parallaxbg/09_distant_clouds1.png');
  this.load.image('distantClouds2', './assets/parallaxbg/10_distant_clouds.png');
  this.load.image('tallBG', './assets/tallBG.png');
  this.load.image('lavaTall', './assets/tallLava.png');
  //========== End Background ===========

  //========== Main Structure ============
  this.load.image('ground', './assets/parallaxbg/01_ground.png');
  this.load.image('platform', './assets/parallaxbg/platform.png');
  this.load.image('rockyTall', './../assets/rockyTall.png');
  this.load.image('rockFloorLong', './../assets/platforms/rocky3.png');
  this.load.image('rockFloor', './../assets/platforms/rocky02.png');
  this.load.image('floatingIsland', './../assets/platforms/leafy_ground05.png');
  //========= End Main Structure ===========

  //=============== Extras =================
  this.load.image('banana', './assets/banana.png');
  this.load.image('crystalGreen', '/assets/crystalGreen.png');
  this.load.image('crystalRed', '/assets/crystalRed.png');
  this.load.image('bomb', './assets/asteroid.png');
  this.load.image('lookUp', './../assets/boardUp.png');
  this.load.image('lookLeft', './../assets/boardLeft.png');
  this.load.image('groundBottom', './../assets/groundBottom.png');
  this.load.image('bigStone', './../assets/bigStone.png');
  this.load.image('nest', './../assets/spikes and grass.png');
  this.load.image('poisonNest', './../assets/poisonNest.png');
  this.load.image('firstNest', './../assets/platforms/grassyFloor.png');
  this.load.image('treasure', './../assets/treasureChest.png');
  this.load.image('dangerSign', './../assets/danger.png');
  this.load.image('singleMush', './../assets/singleMushroom.png');
  this.load.image('tresMap', './../assets/treasureMap.png');
  this.load.image('boardUp', './../assets/boardUp.png');
  this.load.image('flower1', './../assets/flower1.png');
  this.load.image('flower2', './../assets/flower2 .png');
  this.load.image('smallRock', './../assets/smallRock.png');
  this.load.image('tinyRock', './../assets/tinyRock.png');
  this.load.image('venus', './../assets/vine.png');
  this.load.image('vertGroundRight', './../assets/groundTall.png');
  this.load.image('vertGroundLeft', './../assets/groundTallLeft.png');
  this.load.image('groundTop', './../assets/groundTop.png');
  this.load.image('topGround', './../assets/topGround.png');

  //============== End Extras ================
}


function create() {
  
  //============ Parallax BG ===============
  //= = = = = = = = = = = = = = = = = = = =
    this.tallBG = this.add.tileSprite(0,0,800,3000,'tallBG').setOrigin(0,0);
    this.hugeClouds = this.add.tileSprite(400, 2650, 800, 600, 'hugeClouds');
    this.clouds = this.add.tileSprite(400, 2700, 800, 600,'clouds');
    this.distantClouds1 = this.add.tileSprite(400, 2700, 800, 600, 'distantClouds1');
    this.distantClouds2 = this.add.tileSprite(400, 2700, 800, 600, 'distantClouds2');
    this.hill1 = this.add.tileSprite(400, 2685, 800, 600,'hill1');
    this.hill2 = this.add.tileSprite(400, 2700, 800, 600,'hill2');
    this.bushes = this.add.tileSprite(400, 2700, 800, 600,'bushes');
    this.distantTrees = this.add.tileSprite(400, 2700, 800, 600, 'distantTrees');
    this.treesBushes = this.add.tileSprite(400, 2850, 1100, 900, 'treesBushes');
  //= = = = = = = = = = = = = = = = = = = = 
  //========== End Parallax BG =============


  //=============== Platforms =========================
  //= = = = = = = = = = = = = = = = = = = = = = = = = =
    platforms = this.physics.add.staticGroup();
    platforms.create(400, 3000, 'ground');
    platforms.create(295, 2500, 'platform');
    platforms.create(500, 2800, 'platform');
    platforms.create(70, 2650, 'platform');
    platforms.create(700, 2650, 'platform');
    platforms.create(700,2400, 'floatingIsland');
    platforms.create(400,2250, 'floatingIsland');
    platforms.create(100,2100, 'floatingIsland');
    platforms.create(400,1950, 'floatingIsland');
    platforms.create(700,1800, 'floatingIsland');
    platforms.create(275,1650, 'firstNest');
    platforms.create(30, 1475, 'rockFloor');
    platforms.create(250, 1400, 'rockFloorLong');
    platforms.create(250, 1300, 'rockFloorLong');
    platforms.create(400, 1130, 'rockyTall');
    platforms.create(30, 1110, 'rockFloor');
    platforms.create(275, 950, 'rockFloor');
    platforms.create(160, 1035, 'rockFloor');
    platforms.create(700,700, 'topGround');
    platforms.create(500,600, 'topGround');
    platforms.create(200,600, 'topGround');
    platforms.create(300,500, 'topGround');
    platforms.create(600,500, 'topGround');
    platforms.create(500,400, 'topGround');
    platforms.create(200,400, 'topGround');
    platforms.create(300,300, 'topGround');
    platforms.create(600,300, 'topGround');
    platforms.create(200,200, 'topGround');
    platforms.create(500,200, 'topGround');
    platforms.create(300,100, 'topGround');
    platforms.create(600,100, 'topGround');
    platforms.create(550,825, 'topGround');
    platforms.create(650,925, 'topGround');
    




  // Items on Platforms 
    this.add.image(275,1680,'groundBottom');
    this.add.image(200, 1600, 'lookLeft');
    this.add.image(100, 1600, 'lookUp');
    this.add.image(330,1580, 'dangerSign');
    this.add.image(145,980, 'dangerSign');
    this.add.image(325, 2450, 'boardUp');
    this.add.image(275,2450, 'tresMap');
    this.add.image(715, 2350, 'flower1');
    this.add.image(395,2185, 'smallRock');
    this.add.image(90, 2045, 'flower1');
    this.add.image(400,1900, 'flower2');
    this.add.image(710,1735, 'tinyRock');
    this.add.image(440,1130,'vertGroundRight');
    this.add.image(360,1110,'vertGroundLeft');
    this.add.image(250,1375,'groundTop');

  //= = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
  //==================== End Platforms =======================
 


  //============ Player ==============
  //= = = = = = = = = = = = = = = = =
  player = this.physics.add.sprite(100, 2800, 'dude');
  player.body.setGravityY(10)
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(player, lava);
  cursors = this.input.keyboard.createCursorKeys();
  
  //============ Camera ============
  var camera = this.cameras.main;
  camera.setViewport(0, 0, 800, 600);
  this.cameras.main.startFollow(player,true); 
  camera.setBounds(0,0,800,3000);
  //=========== End Camera =========

  //=========== Sprite Anim. ============
  player.setBounce(.2);
  this.physics.world.setBounds(0,0,800,3000)
  player.setCollideWorldBounds(true);

  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'turn',
      frames: [ { key: 'dude', frame: 4 } ],
      frameRate: 20
  });

  this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
  });
  //=========== End Sprite Anim. =========

  //= = = = = = = = = = = = = = = = = = = = = 
  //=============== End Player ===============

  // Sliding Big Rock 
  bigRocks = this.physics.add.group(); 
  bigRocks.create(100,1580, 'bigStone');
  this.physics.add.collider(bigRocks, platforms);
  this.physics.add.collider(bigRocks, player);

 
  //=========== Items to Collect =============
  //= = = = = = = = = = = = = = = = = = = = = 
  // Bananas
  bananas = this.physics.add.group({
    key: 'banana',
    repeat: 11,
    setXY: { x: 12, y: 2450, stepX: 70 }
  });
  bananas.children.iterate(function (child) {
    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
  });
  this.physics.add.collider(bananas, platforms);
  this.physics.add.overlap(player, bananas, collectStar, null, this);
  
  function collectStar (player, banana) {
    banana.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    if (bananas.countActive(true) === 0) {
    //   bananas.children.iterate(function (child) {
    //     child.enableBody(true, child.x, 0, true, true);
    //   });

      var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
      var bomb = bombs.create(x, 2450, 'bomb')
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 300), 20);
    }
    }

    // Diamonds 
    crystals = this.physics.add.group({
        key: 'crystalGreen',
        repeat: 8,
        setXY: { x: 120, y: 5, stepX: 70 }
      });
      crystals.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      });  
      this.physics.add.collider(crystals, platforms);
      this.physics.add.overlap(player, crystals, collectCrystals, null, this);
  
  function collectCrystals (player, crystalGreen) {
    crystalGreen.disableBody(true, true);
    score += 25;
    scoreText.setText('Score: ' + score);
  }

    redCrystal = this.physics.add.group();
    redCrystal.create(750, 35, 'crystalRed');
    this.physics.add.collider(redCrystal, platforms);
    this.physics.add.overlap(player, redCrystal, () => {collectRedCrystal(player,redCrystal,this)}, null, this);
  
    function collectRedCrystal (player, redCrystal,_this) {
    //   redCrystal.disableBody(true, true);
      youWon(_this);
      score += 1000;
      scoreText.setText('Score: ' + score);
      console.log(redCrystal)
      redCrystal.children.entries[0].setScale(100);
      
    }
    function youWon (_this) {
        _this.add.text(100,250,'YOU ESCAPED THE LAVA!!!', {
        font:'42px Arial black',
        fill: '#000'
        }).setScrollFactor(0);
        // _this.physics.pause();
        _this.scene.pause();
      }

  function gotDaLoot(player, loot){
    loot.disableBody(true, true)
    let i = setInterval(()=> { //couting up effect 
        score += 50
        scoreText.setText('Score: ' + score);
        if(score > 49){
            clearInterval(i)
        }
        else if(score += 50) {
           
        }
    },
    10)
  }
  

  //========= Treasure Chests ===========
    loot = this.physics.add.group();
    _loot = loot.create(310,1350,'treasure');
    _loot2 = loot.create(500,850,'treasure');
    this.physics.add.collider(loot, platforms);
    this.physics.add.overlap(player, loot, gotDaLoot, null, this);

    let state = true;
    let sizer = 1
    let intervall = setInterval(function () {
        if (state){
           sizer+=.01
           _loot.setScale(sizer)
           _loot2.setScale(sizer)
        //    redCrystal.setScale(sizer)
            //=== Iteration for Green Crystals ===
            for(let i = 0; i < crystals.children.entries.length; i++) {
                crystals.children.entries[i].setScale(sizer)
            }
           if (sizer > 1.2){
               state = false
           }
        } 
        else {
           sizer -=.01
           if (sizer < 1){
                 state = true
           }
        }
    },20)
  //========= End Treasure Chests =======

  //= = = = = = = = = = = = = = = = = = = = = =
  //========== End Items to Collect ===========


  //========== Scrore ==============
  var score = 0;
  var scoreText;
  scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
//   score += 10;
  scoreText.setText('Score: ' + score);
  scoreText.setScrollFactor(0)
  //======= End Score ==============



  //================ Deadly Ieams ==================
  //= = = = = = = = = = = = = = = = = = = = = = = =

  //=========== Asteroids ==============
  bombs = this.physics.add.group();

  this.physics.add.collider(bombs, platforms)

  this.physics.add.collider(player, bombs, hitBomb, null, this);
  function hitBomb (player, bomb) {
      this.physics.pause();

      player.setTint(0xff0000);

      player.anims.play('turn');

      gameOver = true;
  }
  //======== End Asteroids ============

  //============ Poison Nests ===========
   this.add.image(355,1590,'nest');
   poison = this.physics.add.group(); 
   poison.create(350,1580, 'poisonNest');
   poison.create(165,980, 'singleMush');
   this.physics.add.collider(poison, platforms);
   this.physics.add.collider(player, poison, hitPoison, null, this);
   function hitPoison (player, poison) {
     this.add.text(450,100,'Game Over', {
     font:'42px Arial black',
     fill: '#000'
     }).setScrollFactor(0);
     this.physics.pause();

     player.setTint(0xff0000);

     player.anims.play('turn');

     gameOver = true;
   }
  //========== End Poison Nests =========

  //============== Floating Venus ===========
//    vines = this.add.group();
   angry = this.physics.add.image(300, 1110, 'venus').setGravity(0,-300).setImmovable();
   this.physics.add.collider(player, angry, hitVines);
   let _this = this
    function hitVines (player, angry) {
        _this.add.text(450,100,'Game Over', {
        font:'42px Arial black',
        fill: '#000'
        }).setScrollFactor(0);
        _this.scene.pause();
        clearInterval(intervall)
        player.setTint(0xff0000);
   
        player.anims.play('turn');
   
        gameOver = true;
    }

  //==== Lava ====

  //= = = = = = = = = = = = = = = = = = = = = = = =
  //================ End Deadly Ieams ==============
  
  lava = this.lavaTile = this.add.tileSprite(0,2975,800,3000, 'lavaTall').setOrigin(0,0);

}


function update () {

  //========= Player Movement =========
  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play('left', true);
  }
  else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
  }
  else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }
  if (cursors.up.isDown && player.body.touching.down) {
    player.setVelocityY(-350);
  }
  //======== End Player Movement ========

  //========== Parallax BG Scroll ============
  this.treesBushes.tilePositionX += 0.1;
  this.distantTrees.tilePositionX += 0.15;
  this.bushes.tilePositionX += 0.2;
  this.hugeClouds.tilePositionX += .28;
  this.hill1.tilePositionX += 0.13
  this.hill2.tilePositionX += 0.1;
  this.clouds.tilePositionX += 0.50;
  this.distantClouds1.tilePositionX -= 0.3;
  this.distantClouds2.tilePositionX -= 0.4;
  //========= End Parallax BG Scroll ========

  //======== Lava Movement ========
  this.lavaTile.tilePositionX += 2;
  function moveLava() {
    lava.y-=0.5;
  }
  if (bananas.countActive(true) === 0) {
    moveLava();
  }
  //======= End Lava Movement ======

  //======= Player Hits Lava ========
  if (player.y + player.height/2 > lava.y) {
    this.add.text(450,100,'Game Over', {
      font:'42px Arial black',
      fill: '#000'
    }).setScrollFactor(0)

    this.scene.pause()

    player.setTint(0xff0000);

    player.anims.play('turn');
  }
  //======= End Player Hits Lava ======
  
  //========= Vine Movement ==========
    if(angry.x <= 100 && moveLeft) {
        moveLeft = false
    } else if(angry.x >= 300 && !moveLeft) {
        moveLeft = true
    }

    if(moveLeft) {
        angry.x--
    } else if(!moveLeft) {
        angry.x++
    } 
  //========= End Vine Movement =======
}
