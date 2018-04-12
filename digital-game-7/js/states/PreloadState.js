var PreloadState = {

	preload: function() {
		// this is character the player will play as
		this.game.load.spritesheet('person', 'assets/images/person1.png', 48, 48, 16);
		// this is menu button 
		this.game.load.image('startButton', 'assets/images/button.png');

		// the tile map
		this.load.image('shops', 'assets/images/shop.png');
		this.load.tilemap('store1', 'assets/Maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('store2', 'assets/Maps/level2.json', null, Phaser.Tilemap.TILED_JSON);

		// the villians
		this.load.spritesheet('guy','assets/images/guy.png', 48, 48, 16, 0, 0);
		this.load.spritesheet('man','assets/images/man.png',48,48,4,0,0);

		// the bag
		this.load.image('bag', 'assets/images/bag.png');

		// the objects to be collected
		this.load.image('milk', 'assets/images/milk.png');
		this.load.image('cola', 'assets/images/cola.png');
		this.load.image('berries', 'assets/images/berries.png');
		this.load.image('medicine', 'assets/images/medicine.png');
		this.load.image('tomato', 'assets/images/tomato.png');
		this.load.image('fruits', 'assets/images/fruits.png');
		this.load.image('apple', 'assets/images/apple.png');
		this.load.image('cheese', 'assets/images/cheese.png');
		this.load.image('lemon', 'assets/images/lemon.png');
		this.load.image('carrots', 'assets/images/carrot.png');
		this.load.image('meat', 'assets/images/meat.png');
		this.load.image('grapes', 'assets/images/grapes.png');

		//this.load.spritesheet('food','assets/images/food.png', 38, 41, 6, 8 , 0);

		//sounds 
		this.load.audio('collect','assets/sound/sword.mp3');
		this.load.audio('playerDeath', 'assets/sound/player_death.wav');
		this.load.audio('backgroundMusic', 'assets/sound/background.mp3');
		this.load.audio('dooropen', 'assets/sound/door_open.wav');

		// goal
		this.load.image('level','assets/images/level.png');
		this.load.image('counter', 'assets/images/payment.png');
	},

	create: function() {
		
		
		this.game.state.start('Menu');
	}

}