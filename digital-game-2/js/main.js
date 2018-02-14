var game = new Phaser.Game(800,600, Phaser.Canvas,'game');

//this is a game state
var GameState1 = {
    preload: function() {

    },
    create: function() {

    },
    update: function() {

    }
};

game.state.add('GameState1', GameState1);
game.state.start('GameState1');