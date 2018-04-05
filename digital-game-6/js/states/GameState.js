var GameState = {

	create: function() {

		
		// starts the physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// world
		this.map = this.game.add.tilemap('store1');
		this.map.addTilesetImage('shop','shops');

		this.background = this.map.createLayer('background');
		//this.game.world.sendToBack(this.background);
		this.collison = this.map.createLayer('collison');
		this.map.setCollisionBetween(0,50, true, 'collison');
		this.map.setCollisionBetween(52,270, true, 'collison');


		// this is the player character
		this.person = this.game.add.sprite(0,595,'person', 0);
		//this.person.scale.setTo(2);
		this.game.physics.arcade.enable(this.person);
		this.person.body.collideWorldBounds = true;

		// person animations
		this.person.animations.add('left', [1,5,9,13], 4, true);
		this.person.animations.add('right', [3,7,11,15], 4, true);
		this.person.animations.add('down', [0,4,8,12], 4, true);
		this.person.animations.add('up', [2,6,10,14], 4, true);
		

		// guys (villian)
		// guy 1
		this.guy1 = this.game.add.sprite(64,64,'guy',0);
		this.guy1.animations.add('left', [1,5,9,13], 4, true);
		this.guy1.animations.add('right', [3,7,11,15], 4, true);
		this.guy1.animations.add('down', [0,4,8,12], 4, true);
		this.guy1.animations.add('up', [2,6,10,14], 4, true);
		this.guy1.animations.play('left');
		// guy 2
		this.guy2 = this.game.add.sprite(this.world.width - 96,64,'guy',0);
		this.guy2.animations.add('left', [1,5,9,13], 4, true);
		this.guy2.animations.add('right', [3,7,11,15], 4, true);
		this.guy2.animations.add('down', [0,4,8,12], 4, true);
		this.guy2.animations.add('up', [2,6,10,14], 4, true);
		this.guy2.animations.play('left');
		// guy 3
		this.guy3 = this.game.add.sprite(32 * 11,32 * 6,'guy',0);
		this.guy3.animations.add('left', [1,5,9,13], 4, true);
		this.guy3.animations.add('right', [3,7,11,15], 4, true);
		this.guy3.animations.add('down', [0,4,8,12], 4, true);
		this.guy3.animations.add('up', [2,6,10,14], 4, true);
		this.guy3.animations.play('left');
		//guy 4
		this.guy4 = this.game.add.sprite(32 * 19,32 * 6,'guy',0);
		this.guy4.animations.add('left', [1,5,9,13], 4, true);
		this.guy4.animations.add('right', [3,7,11,15], 4, true);
		this.guy4.animations.add('down', [0,4,8,12], 4, true);
		this.guy4.animations.add('up', [2,6,10,14], 4, true);
		this.guy4.animations.play('left');
		//guy 5
		this.guy5 = this.game.add.sprite(32 * 11,this.world.height - (32 * 5),'guy',0);
		this.guy5.animations.add('left', [1,5,9,13], 4, true);
		this.guy5.animations.add('right', [3,7,11,15], 4, true);
		this.guy5.animations.add('down', [0,4,8,12], 4, true);
		this.guy5.animations.add('up', [2,6,10,14], 4, true);
		this.guy5.animations.play('left');
		//guy 6
		this.guy6 = this.game.add.sprite(32 * 20,this.world.height - (32 * 9),'guy',0);
		this.guy6.animations.add('left', [1,5,9,13], 4, true);
		this.guy6.animations.add('right', [3,7,11,15], 4, true);
		this.guy6.animations.add('down', [0,4,8,12], 4, true);
		this.guy6.animations.add('up', [2,6,10,14], 4, true);
		this.guy6.animations.play('left');

		this.guys = [this.guy1, this.guy2, this.guy3, this.guy4, this.guy5, this.guy6];
		this.game.physics.arcade.enable(this.guys);
		// sets the collide world bounds
		for (let a = 0; a < this.guys.length; a++) {
			this.guys[a].body.collideWorldBounds = true;
		}

		// these are the objects
		this.milk = this.game.add.sprite(1, 64, 'milk');
		this.medicine = this.game.add.sprite(this.world.width - 34, 32 * 6, 'medicine');
		this.cola = this.game.add.sprite(this.world.width - 35, 64, 'cola');
		this.berries = this.game.add.sprite(0, 32 * 6, 'berries');
		this.tomato = this.game.add.sprite(32 * 19,this.world.height - (32 * 9), 'tomato');

		// camera follows the player
		this.game.camera.follow(this.person);
		
		// creates the control keys
		this.cursor = this.game.input.keyboard.createCursorKeys();

	},

	update: function() {

		this.game.physics.arcade.collide(this.person,this.collison);

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

	},
	setVelocity: function() {

	}
}