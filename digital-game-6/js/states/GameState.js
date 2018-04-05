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
		this.person.scale.setTo(.75);
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
		//this.guy1.animations.play('left');
		// guy 2
		this.guy2 = this.game.add.sprite(this.world.width - (10 * 32),60,'guy',0);
		this.guy2.animations.add('left', [1,5,9,13], 4, true);
		this.guy2.animations.add('right', [3,7,11,15], 4, true);
		this.guy2.animations.add('down', [0,4,8,12], 4, true);
		this.guy2.animations.add('up', [2,6,10,14], 4, true);
		//this.guy2.animations.play('left');
		// guy 3
		this.guy3 = this.game.add.sprite(64,32 * 6,'guy',0);
		this.guy3.animations.add('left', [1,5,9,13], 4, true);
		this.guy3.animations.add('right', [3,7,11,15], 4, true);
		this.guy3.animations.add('down', [0,4,8,12], 4, true);
		this.guy3.animations.add('up', [2,6,10,14], 4, true);
		//this.guy3.animations.play('left');
		//guy 4
		this.guy4 = this.game.add.sprite(this.world.width - (10 * 32),32 * 6,'guy',0);
		this.guy4.animations.add('left', [1,5,9,13], 4, true);
		this.guy4.animations.add('right', [3,7,11,15], 4, true);
		this.guy4.animations.add('down', [0,4,8,12], 4, true);
		this.guy4.animations.add('up', [2,6,10,14], 4, true);
		//this.guy4.animations.play('left');
		//guy 5
		this.guy5 = this.game.add.sprite(32,this.world.height - (32 * 5),'guy',0);
		this.guy5.animations.add('left', [1,5,9,13], 4, true);
		this.guy5.animations.add('right', [3,7,11,15], 4, true);
		this.guy5.animations.add('down', [0,4,8,12], 4, true);
		this.guy5.animations.add('up', [2,6,10,14], 4, true);
		//this.guy5.animations.play('left');
		//guy 6
		this.guy6 = this.game.add.sprite(32 * 20,this.world.height - (32 * 8),'guy',0);
		this.guy6.animations.add('left', [1,5,9,13], 4, true);
		this.guy6.animations.add('right', [3,7,11,15], 4, true);
		this.guy6.animations.add('down', [0,4,8,12], 4, true);
		this.guy6.animations.add('up', [2,6,10,14], 4, true);
		//this.guy6.animations.play('left');

		this.guys = [this.guy1, this.guy2, this.guy3, this.guy4, this.guy5, this.guy6];
		this.game.physics.arcade.enable(this.guys);
		// sets the collide world bounds
		for (let a = 0; a < this.guys.length; a++) {
			this.guys[a].body.collideWorldBounds = true;
			this.guys[a].scale.setTo(0.75);
			this.guys[a].body.immovable = true;
			//this.guys[a].body.velocity.x = -10;
		}

		// for the movement of the guys 
		this.leftMove = true;
		this.rightMove = false;


		// these are the objects
		this.milk = this.game.add.sprite(1, 64, 'milk');
		this.milk.collected = false;
		this.medicine = this.game.add.sprite(this.world.width - 34, 32 * 6, 'medicine');
		this.medicine.collected = false;
		this.cola = this.game.add.sprite(this.world.width - 35, 64, 'cola');
		this.cola.collected = false;
		this.berries = this.game.add.sprite(0, 32 * 6, 'berries');
		this.berries.collected = false;
		this.tomato = this.game.add.sprite(32 * 19,this.world.height - (32 * 8), 'tomato');
		this.tomato.collected = false;
		this.fruits = this.game.add.sprite(0, this.world.height - (32 * 5), 'fruits');
		this.fruits.collected = false;

		this.items = [this.milk,this.medicine,this.cola,this.berries,this.tomato,this.fruits];
		this.itemsCollected = [false,false,false,false,false,false];
		this.collectedAll = false;



		//enable physics for the items
		this.game.physics.arcade.enable(this.items);

		// camera follows the player
		this.game.camera.follow(this.person);
		
		// creates the control keys
		this.cursor = this.game.input.keyboard.createCursorKeys();

		this.game.time.events.repeat(3000, 1000000000, this.move, this);

	},

	update: function() {

		this.game.physics.arcade.collide(this.person,this.collison);

		if(this.game.physics.arcade.collide(this.person, this.guys)) {
			alert('Game Over');
			this.game.state.restart();
		}

		if(this.collectedAll) {
			alert('You collected all items');
			this.game.state.restart();
		}

		this.person.body.velocity.x = 0;
		this.person.body.velocity.y = 0;

		if (this.cursor.left.isDown) {
			this.person.body.velocity.x = -150;
			this.person.animations.play('left');
		}
		else if (this.cursor.right.isDown) {
			this.person.body.velocity.x = 150;
			this.person.animations.play('right');
		}
		else if (this.cursor.down.isDown) {
			this.person.body.velocity.y = 150;
			this.person.animations.play('down');
		}
		else if (this.cursor.up.isDown) {
			this.person.body.velocity.y = -150;
			this.person.animations.play('up');
		}
		else {
			this.person.animations.stop();
			this.person.frame = 0;
		}

		//this.move();
		this.doneCollecting();
		this.collectItem();

	},
	move: function() {
		if(this.leftMove) {
			for(let i = 0; i < this.guys.length; i++) {
				this.guys[i].body.velocity.x = 130;
				this.guys[i].body.velocity.y = 5;
				this.leftMove = false;
				this.rightMove = true;
				this.guys[i].animations.play('right');
			}
		}
		else if(this.rightMove) {
			for(let i = 0; i < this.guys.length; i++) {
				this.guys[i].body.velocity.x = -130;
				this.guys[i].body.velocity.y = -5;
				this.leftMove = true;
				this.rightMove = false;
				this.guys[i].animations.play('left');
			}
		}
	},
	collectItem: function() {
		for(let i = 0; i < this.items.length; i++) {
			if(this.itemsCollected[i] == false && this.game.physics.arcade.collide(this.person,this.items[i])) {
				this.items[i].kill();
				this.itemsCollected[i] = true;
			}
		}
	},
	doneCollecting: function() {
		for(let i = 0; i < this.items.length; i++) {
			if(this.itemsCollected[i] == false) {
				return;
			}
		}
		this.collectedAll = true;
	} 
}