

window.onload = function() {


    var game = new Phaser.Game( 1000, 700, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update } );

    function preload() {
        // Load an image and call it 'logo'.
        game.load.image( 'cave', 'assets/cave.png' );
    }

    var cave;

    function create() {

      cave = game.add.sprite( 0, 0, 'cave' );
    }

    function update() {

    }
};
