
var background, ground, platform, player, cursors, hole, ball,ball_bounce;
window.onload = function() {


    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('hole','assets/hole.png');
        game.load.image('ball','assets/blue_ball.png');
        //this player sprite is taken from phaser tutorial
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        game.load.audio('bounce','assets/wall.wav');

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

      
      //this is the player 
      player = game.add.sprite(32, game.height - 110, 'dude');
      //enable physeics for the player 
      game.physics.arcade.enable(player);
      player.body.collideWorldBounds = true;

      //animation for player
      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);
      player.body.gravity.y = 500;
      //player.body.immovable = true;

      //this is the hole for the ball to enter in
      hole = game.add.sprite(game.width - 50,0,'hole');


      ball = game.add.sprite(0,0,'ball');
      game.physics.arcade.enable(ball);
      ball.body.gravity.y = 300;
      ball.body.velocity.setTo(200, 200);
      //adds bounce to the ball
      ball.body.bounce.setTo(1,1);
      //the ball bounces off walls
      ball.body.collideWorldBounds = true;


      //this is the sound of the ball bouncing
      ball_bounce = game.add.audio('bounce');
    }

    function update() {
      //checks if the player collided with the ground. 
      game.physics.arcade.collide(player, ground);

      //checks to play sound
      if(game.physics.arcade.collide(ball,ground) || game.physics.arcade.collide(ball,player)) {
        ball_bounce.play();
      }

      game.physics.arcade.collide(player, ground);

      player.body.velocity.x = 0;

      //controls for the game
      cursors = game.input.keyboard.createCursorKeys();

      //add controls for the player to move (written following phaser tutorial)
      if(cursors.left.isDown) {
        player.body.velocity.x = -200;
        player.animations.play('left');
      }
      else if(cursors.right.isDown) {
        player.body.velocity.x = 200;
        player.animations.play('right');
      }
      else {
        player.animations.stop();
        player.frame = 4;
      }

      if (cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -600;
      }

      //this is when the ball hits the hole
      if(ball.overlap(hole)) {
        ball.kill();
        alert("You have won the game, refresh the page to play again");
        game.state.restart();//restarts the game
      }

    }
};
