var Menu = {

	create: function() {
		
		this.startButton = this.game.add.sprite(this.game.world.centerX - 50, this.game.world.centerY + 100, 'startButton');
		this.startButton.inputEnabled = true;
		
		this.startButton.events.onInputDown.add(function() {
			this.game.state.start('GameState');
		})
	}
};