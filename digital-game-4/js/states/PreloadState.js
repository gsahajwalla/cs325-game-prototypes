var PreloadState = {
	//loads all the assest before the game starts

	preload: function() {
		// add sprites that were loaded in bootstate 
		//this is the logo
		this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
		this.logo.anchor.setTo(0.5);

		//this is the loading bar
		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loadingBar');
    	this.preloadBar.anchor.setTo(0.5);
    	this.load.setPreloadSprite(this.preloadBar);

    	// assest for the home screen
    	this.game.load.image('homescreen','assets/images/homescreen.jpg');
    	this.game.load.image('bet','assets/images/bet.png');

    	// assets for the PlayerBets state
    	this.game.load.image('horse1','assets/images/horse1.png');
    	this.game.load.image('horse2','assets/images/horse2.png');
    	this.game.load.image('horse3','assets/images/horse3.png');
    	this.game.load.image('horse4','assets/images/horse4.png');

    	// this is for the GameState 
    	this.game.load.image('grounds','assets/images/grounds.png');
    	this.game.load.spritesheet('horse','assets/images/horse.png',64,64,12);
    	this.game.load.image('line','assets/images/line.png');
    	this.game.load.image('finish','assets/images/finish.png');
	},
	create: function() {
		this.game.state.start('HomeState');
	}
};