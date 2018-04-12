var game = new Phaser.Game(1024, 608, Phaser.CANVAS,'game');
game.collectBag = false;
game.amount = 200;
game.state.add('Level1', Level1);
game.state.add('Level2', Level2);
game.state.add('Menu', Menu);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.start('BootState');