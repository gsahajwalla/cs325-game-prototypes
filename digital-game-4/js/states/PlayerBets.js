var PlayerBets = {

	create: function() {
		this.horse1 = this.game.add.sprite(150, this.game.world.centerY,'horse1');
		this.horse1.anchor.setTo(.5);
		this.horse1.inputEnabled = true;

		this.horse2 = this.game.add.sprite(330, this.game.world.centerY,'horse2');
		this.horse2.anchor.setTo(.5);
		this.horse1.inputEnabled = true;

		this.horse3 = this.game.add.sprite(480, this.game.world.centerY,'horse3');
		this.horse3.anchor.setTo(.5);
		this.horse1.inputEnabled = true;

		this.horse4 = this.game.add.sprite(635, this.game.world.centerY,'horse4');
		this.horse4.anchor.setTo(.5);
		this.horse1.inputEnabled = true;

		this.choice; //the horse that the player chooses
	}
};