var game = new Phaser.Game(800,640, Phaser.CANVAS,'game');

game.state.add('GameState', GameState);
game.state.add('HomeState', HomeState);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.add('PlayerBets', PlayerBets);
game.state.start('BootState');