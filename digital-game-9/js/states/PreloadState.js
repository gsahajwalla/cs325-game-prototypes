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

		// the enemy
	    this.game.load.spritesheet('invader', 'assets/images/invader.png', 32, 32);     

	    // the explosion
	    this.game.load.spritesheet('kaboom', 'assets/images/explode.png', 128, 128);

	    // this stones
	    this.game.load.image('stone', 'assets/images/atom.png');

	    //sounds 
		this.load.audio('collect','assets/sound/sword.mp3');
		this.load.audio('playerDeath', 'assets/sound/player_death.wav');
		this.load.audio('backgroundMusic', 'assets/sound/background.mp3');
	},

	create: function() {
		
		
		this.game.state.start('Menu');
	}

}