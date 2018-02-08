
var background, ground, platform, player, cursors;
window.onload = function() {


    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/ground.png');
        //game.load.image('platform', 'assets/platform.png');
        //this player sprite is taken from phaser tutorial
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);


    }

    

    function create() {

      //enable physics for the game
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //the background of the game
      background = game.add.sprite(0,0,'background');
      background.height = game.height;
      background.width = game.width;

      //ground of the game
      ground = game.add.sprite(0,game.height - 60,'ground');
      ground.scale.setTo(2,2);
      game.physics.arcade.enable(ground);
      ground.body.allowGravity = false;
      ground.body.immovable = true;

      //The code for player is made follwoing the phaser tutorial
      //this is the player 
      player = game.add.sprite(32, game.height - 110, 'dude');
      //enable physeics for the player 
      game.physics.arcade.enable(player);

      player.body.collideWorldBounds = true;

      //animation 
      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);
      player.body.gravity.y = 500;


    }

    function update() {
      //checks if the player collided with the ground. Taken from tutorial
      var hitPlatform = game.physics.arcade.collide(player, ground);

      player.body.velocity.x = 0;

      cursors = game.input.keyboard.createCursorKeys();

      //add controls for the player to move (written following phaser tutorial)
      if(cursors.left.isDown) {
        player.body.velocity.x = -50;
        player.animations.play('left');
      }
      else if(cursors.right.isDown) {
        player.body.velocity.x = 50;
        player.animations.play('right');
      }
      else {
        player.animations.stop();
        player.frame = 4;
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -200;
      }
    }
};
