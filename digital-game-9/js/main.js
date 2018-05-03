var game = new Phaser.Game(1000, 600, Phaser.CANVAS,'game');
game.collectBag = false;
game.amount = 200;
game.state.add('Menu', Menu);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.add('GameState', GameState);
game.state.start('BootState');