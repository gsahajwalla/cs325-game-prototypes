var PreloadState = {

	preload: function() {
		// this is character the player will play as
		this.game.load.spritesheet('person', 'assets/images/person1.png', 41, 43, 16, 5, 5);
		// this is menu button 
		this.game.load.image('startButton', 'assets/images/button.png');

		// the tile map
		this.load.image('shops', 'assets/images/shop.png');
		this.load.tilemap('store1', 'assets/Maps/level1.json', null, Phaser.Tilemap.TILED_JSON);

		// the villians
		this.load.spritesheet('guy','assets/images/guy.png', 41, 43, 16, 5, 5);

		// the objects to be collected
		this.load.image('milk', 'assets/images/milk.png');
		this.load.image('cola', 'assets/images/cola.png');
		this.load.image('berries', 'assets/images/berries.png');
		this.load.image('medicine', 'assets/images/medicine.png');
		this.load.image('tomato', 'assets/images/tomato.png');
	},

	create: function() {
		
		this.game.state.start('Menu');
	}

}