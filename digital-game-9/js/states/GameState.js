var GameState = {

	create: function() {

		// this is the space background 
		this.space = this.game.add.tileSprite(0, 0, 1000, 600, 'space');
		this.space.autoScroll(0, 100);

		// the player
		this.player = this.add.sprite(this.game.world.centerX, this.game.world.height - 50, 'player');
		this.player.anchor.setTo(0.5);
		this.game.physics.arcade.enable(this.player);

		// creates the control keys
		this.cursor = this.game.input.keyboard.createCursorKeys();
	},

	update: function () {

		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -200;
		}
		else if (this.cursor.right.isDown) {
			this.player.body.velocity.x = 200;
		}
		else if (this.cursor.down.isDown) {
			this.player.body.velocity.y = 200;
		}
		else if (this.cursor.up.isDown) {
			this.player.body.velocity.y = -200;
		}
		else {
			this.player.animations.stop();
		}
	}
}