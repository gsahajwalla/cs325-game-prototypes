var PreloadState = {
	//loads all the assest before the game starts

	preload: function() {
		// add sprites that were loaded in bootstate 
		//this is the logo
		this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.logo.anchor.setTo(0.5);
	},
	create: function() {
		

		// this is the loading bar
		this.loadingBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loadingBar');
		this.loadingBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.loadingBar);
	}
};