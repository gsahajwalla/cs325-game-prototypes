var game = new Phaser.Game(800,620, Phaser.CANVAS,'game');
game.choice = 0;
//var choice;
game.state.add('GameState', GameState);
game.state.add('HomeState', HomeState);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.add('PlayerBets', PlayerBets);
game.state.start('BootState');