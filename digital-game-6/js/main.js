var game = new Phaser.Game(1024, 608, Phaser.CANVAS,'game');

game.state.add('GameState', GameState);
game.state.add('Menu', Menu);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.start('BootState');