var PreloadState = {

	preload: function() {

		// this is menu button 
		this.game.load.image('startButton', 'assets/images/button.png');

		// this is the space background
		this.load.image('space', 'assets/images/space.jpg');

		// the bullet 
		this.load.image('bullet', 'assets/images/bullet.png');

		// the player 
		this.load.image('player', 'assets/images/player.png');
	},

	create: function() {
		
		
		this.game.state.start('Menu');
	}

}