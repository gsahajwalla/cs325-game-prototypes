

window.onload = function() {


    var game = new Phaser.Game( 800, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('background', 'assets/background.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('platform', 'assets/platform.png');

    }

    var background, ground, platform;

    function create() {

      //enable physics for the game
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //the background of the game
      background = game.add.sprite(0,0,'background');
      background.height = game.height;
      background.width = game.width;

      //ground of the game
      //ground.enableBody = true;
      ground = game.add.sprite(0,game.height - 60,'ground');
      ground.scale.setTo(2,2);
      ground.body.immovable = true;
    }

    function update() {

    }
};
