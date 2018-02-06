

window.onload = function() {


    var game = new Phaser.Game( 1000, 600, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image('background','assets/background.png');

    }

    var cave, background;

    function create() {

      
      background = game.add.sprite(0,0,'background');
      background.height = game.height;
      background.width = game.width;
    }

    function update() {

    }
};
