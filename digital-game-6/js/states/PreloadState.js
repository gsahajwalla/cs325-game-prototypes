var PreloadState = {

	preload: function() {
		// this is character the player will play as
		this.game.load.spritesheet('person', 'assets/images/person1.png', 41, 43, 16, 5, 5);
		// this is menu button 
		this.game.load.image('startButton', 'assets/images/button.png');
	},

	create: function() {
		
		this.game.state.start('Menu');
	}

}