var HomeState = {

	create: function() {

		// background
		this.homescreen = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'homescreen');
		this.homescreen.anchor.setTo(0.5);
		//this.homescreen.scale.setTo(1.5);

		// bet button 
		this.bet = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 230, 'bet');
		this.bet.anchor.setTo(.5);
		this.bet.inputEnabled = true;

		// if the start button is clicken then go to game
		this.bet.events.onInputDown.add(function() {
			this.game.state.start('PlayerBets');
		});
	},

};