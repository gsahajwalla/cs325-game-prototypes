var GameState = {

	create: function() {

		// starts the physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// this is the player character
		this.person = this.game.add.sprite(0,0,'person', 0);
		//this.person.scale.setTo(2);
		this.game.physics.arcade.enable(this.person);
		this.person.body.collideWorldBounds = true;

		// person animations
		this.person.animations.add('left', [1,5,9,13], 4, true);
		this.person.animations.add('right', [3,7,11,15], 4, true);
		this.person.animations.add('down', [0,4,8,12], 4, true);
		this.person.animations.add('up', [2,6,10,14], 4, true);
		//this.person.animations.play('right');
		
		// creates the control keys
		this.cursor = this.game.input.keyboard .createCursorKeys();

	},

	update: function() {
		this.person.body.velocity.x = 0;
		this.person.body.velocity.y = 0;

		if (this.cursor.left.isDown) {
			this.person.body.velocity.x = -100;
			this.person.animations.play('left');
		}
		else if (this.cursor.right.isDown) {
			this.person.body.velocity.x = 100;
			this.person.animations.play('right');
		}
		else if (this.cursor.down.isDown) {
			this.person.body.velocity.y = 100;
			this.person.animations.play('down');
		}
		else if (this.cursor.up.isDown) {
			this.person.body.velocity.y = -100;
			this.person.animations.play('up');
		}
		else {
			this.person.animations.stop();
			this.person.frame = 0;
		}

	}
}