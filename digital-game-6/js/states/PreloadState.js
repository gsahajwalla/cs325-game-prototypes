var PreloadState = {

	preload: function() {
		// this is character the player will play as
		this.game.load.spritesheet('person', 'assets/images/person1.png', 41, 42, 16, 5, 5);
		// this is menu button 
		this.game.load.image('startButton', 'assets/images/button.png');

		// the tile map
		this.load.image('shops', 'assets/images/shop.png');
		this.load.tilemap('store1', 'assets/Maps/level1.json', null, Phaser.Tilemap.TILED_JSON);

		// the villians
		this.load.spritesheet('guy','assets/images/guy.png', 41, 42, 16, 5, 5);

		// the objects to be collected
		this.load.image('milk', 'assets/images/milk.png');
		this.load.image('cola', 'assets/images/cola.png');
		this.load.image('berries', 'assets/images/berries.png');
		this.load.image('medicine', 'assets/images/medicine.png');
		this.load.image('tomato', 'assets/images/tomato.png');
		this.load.image('fruits', 'assets/images/fruits.png');

		//sounds 
		this.load.audio('collect','assets/sound/sword.mp3');
		this.load.audio('playerDeath', 'assets/sound/player_death.wav');
		this.load.audio('backgroundMusic', 'assets/sound/background.mp3');
		this.load.audio('dooropen', 'assets/sound/door_open.wav');

		// goal
		this.load.image('counter', 'assets/images/payment.png');
	},

	create: function() {
		
		this.game.state.start('Menu');
	}

}