var PlayerBets = {
	choice: 0, //the horse that the player chooses
	create: function() {
		this.horse1 = this.game.add.sprite(150, this.game.world.centerY,'horse1');
		this.horse1.anchor.setTo(.5);
		this.horse1.inputEnabled = true;

		this.horse2 = this.game.add.sprite(330, this.game.world.centerY,'horse2');
		this.horse2.anchor.setTo(.5);
		this.horse2.inputEnabled = true;

		this.horse3 = this.game.add.sprite(480, this.game.world.centerY,'horse3');
		this.horse3.anchor.setTo(.5);
		this.horse3.inputEnabled = true;

		this.horse4 = this.game.add.sprite(635, this.game.world.centerY,'horse4');
		this.horse4.anchor.setTo(.5);
		this.horse4.inputEnabled = true;

		

		// sets the choice depending on what button is pressed
		this.horse1.events.onInputDown.add(function(){
			this.GameState.game.choice = 1;
			console.log(this.GameState.game.choice);
			this.game.state.start('GameState');
		});
		this.horse2.events.onInputDown.add(function(){
			this.GameState.game.choice = 2;
			console.log(this.GameState.game.choice);
			this.game.state.start('GameState');
		});
		this.horse3.events.onInputDown.add(function(){
			this.GameState.game.choice = 3;
			console.log(this.GameState.game.choice);
			this.game.state.start('GameState');
		});
		this.horse4.events.onInputDown.add(function(){
			this.GameState.game.choice = 4;
			console.log(this.GameState.game.choice);
			//console.log(this);
			this.game.state.start('GameState');
		});
	}
};