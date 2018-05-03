var Menu = {

	create: function() {
		
		

		this.startButton = this.game.add.sprite(this.game.world.centerX - 80, this.game.world.centerY + 200, 'startButton');
		this.startButton.inputEnabled = true;
		
		
		this.startButton.events.onInputDown.add(function() {
			this.game.state.start('GameState');
		})
	}
};