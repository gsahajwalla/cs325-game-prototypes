var BootState = {

	init: function() {
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},

	preload: function() {
		this.game.load.image('loadingBar', 'assets/images/bar.png');
		this.game.load.image('logo', 'assets/images/logo.png');
	},
	
	create: function() {
		this.game.stage.backgroundColor = '#000';

		//starts the preload state where all the assests for the game are loaded
		this.game.state.start('PreloadState');
	}

};