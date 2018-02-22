var game = new Phaser.Game(800,650, Phaser.Canvas,'game');
game.state.add('BootState', BootState);
game.state.add('PreloadState',PreloadState);
game.state.add('HomeState', HomeState);
game.state.add('GameState', GameState);
game.state.start('GameState');