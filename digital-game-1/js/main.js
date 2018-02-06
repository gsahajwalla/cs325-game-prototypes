

window.onload = function() {


    var game = new Phaser.Game( 700, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/ground.png');

    }

    var background, ground, platform;

    function create() {

      //enable physics for the game
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //the background of the game
      background = game.add.sprite(0,0,'background');
      background.height = game.height;
      background.width = game.width;

      //the ground in the game
      ground = game.add.sprite(0,560,'ground');
      ground.width = game.width;
      //keeps the player from falling away when the player jumps on it
      ground.body.immovable = true;

      //this is grouping helps group sprites 
      platform = game.add.group();



    }

    function update() {

    }
};
