var Level2 = {

	create: function() {

		this.world.resize(2048,800);
		//this.name = prompt("Enter you name");
		//this.score = 0;
		// starts the physics system
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// world
		this.map = this.game.add.tilemap('store2');
		this.map.addTilesetImage('shop','shops');

		this.background = this.map.createLayer('background');
		//this.background.fixedToCamera = false;
		//this.game.world.sendToBack(this.background);
		this.collision = this.map.createLayer('collision');
		this.map.setCollisionBetween(0,50, true, 'collision');
		this.map.setCollisionBetween(52,270, true, 'collision');

		
		// this is the player character
		this.person = this.game.add.sprite(0,this.world.height - 32,'person', 2);
		this.person.collectedBag = false; // the player does not have a bag to put grocery in
		this.person.lives = 5;
		this.person.timepenalty = 0;
		this.person.scale.setTo(.75);
		this.game.physics.arcade.enable(this.person);
		this.person.body.collideWorldBounds = true;

		// person animations
		this.person.animations.add('left', [1,5,9,13], 4, true);
		this.person.animations.add('right', [3,7,11,15], 4, true);
		this.person.animations.add('down', [0,4,8,12], 4, true);
		this.person.animations.add('up', [2,6,10,14], 4, true);
		



		// the bag 
		this.bag = this.game.add.sprite(this.world.width - 100, this.world.height - 200, 'bag');
		this.bag.scale.setTo(.3);
		this.game.physics.arcade.enable(this.bag);

		// annoying store associate1 
		// this.aPositionX = [0, 0, 0, this.world.width - 416, this.world.width - 448,this.world.width - 672, this.world.width - 864] //352
		// this.aPositionY = [96, 384, this.world.height - 192, 352, 0, 0, 0];
		// this.associate1 = this.game.add.sprite(this.aPositionX[0], this.aPositionY[0],'man', 1);
		// this.associate1.scale.setTo(.75);
		// this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
		// this.associate1.addChild(this.text);
		// this.associate1.animations.add('right', [0,1,2,3], 8, true);
		// this.game.physics.arcade.enable(this.associate1);
		// this.associate1.body.velocity.x = 80;
		// this.associate1.animations.play('right');
		

		// this.associate2 = this.game.add.sprite(this.aPositionX[4], this.aPositionY[4],'man', 1);
		// this.associate2.scale.setTo(.75);
		// this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
		// this.associate2.addChild(this.text);
		// this.associate2.animations.add('right', [0,1,2,3], 8, true);
		// this.game.physics.arcade.enable(this.associate2);
		// this.associate2.body.velocity.y = 100;
		// this.associate2.animations.play('right');
		

		// this.associate3 = this.game.add.sprite(this.aPositionX[3], this.aPositionY[3],'man', 1);
		// this.associate3.scale.setTo(.75);
		// this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
		// this.associate3.addChild(this.text);
		// this.associate3.animations.add('right', [0,1,2,3], 8, true);
		// this.game.physics.arcade.enable(this.associate3);
		// this.associate3.body.velocity.y = 100;
		// this.associate3.animations.play('right');
		// this.game.time.events.repeat(3000, 1000000000000, this.createAssociate, this);

		// this.associates = [this.associate1, this.associate2, this.associate3];
		// for(let a = 0; a < this.associates.length; a++) {
		// 	this.associates[a].body.collideWorldBounds = true;
		// 	this.associates[a].body.immovable = true;
		// }


		// guys (villian)
		// guy 1
		this.guy1 = this.game.add.sprite(64,64,'guy',0);
		// this.text = game.add.text(0, -10, "Some text", {font: "16px Arial", fill: "#ffffff"});
		// this.guy1.addChild(this.text);
		this.guy1.animations.add('left', [1,5,9,13], 4, true);
		this.guy1.animations.add('right', [3,7,11,15], 4, true);
		this.guy1.animations.add('down', [0,4,8,12], 4, true);
		this.guy1.animations.add('up', [2,6,10,14], 4, true);
		
		// guy 2
		this.guy2 = this.game.add.sprite(this.world.width - (11 * 32),64,'guy',0);
		this.guy2.animations.add('left', [1,5,9,13], 4, true);
		this.guy2.animations.add('right', [3,7,11,15], 4, true);
		this.guy2.animations.add('down', [0,4,8,12], 4, true);
		this.guy2.animations.add('up', [2,6,10,14], 4, true);
		//this.guy2.animations.play('left');
		// guy 3
		this.guy3 = this.game.add.sprite(64,320,'guy',0);
		this.guy3.animations.add('left', [1,5,9,13], 4, true);
		this.guy3.animations.add('right', [3,7,11,15], 4, true);
		this.guy3.animations.add('down', [0,4,8,12], 4, true);
		this.guy3.animations.add('up', [2,6,10,14], 4, true);
		//this.guy3.animations.play('left');
		//guy 4
		this.guy4 = this.game.add.sprite(this.world.width - (11 * 32),32 * 10,'guy',0);
		this.guy4.animations.add('left', [1,5,9,13], 4, true);
		this.guy4.animations.add('right', [3,7,11,15], 4, true);
		this.guy4.animations.add('down', [0,4,8,12], 4, true);
		this.guy4.animations.add('up', [2,6,10,14], 4, true);
		//this.guy4.animations.play('left');
		//guy 5
		this.guy5 = this.game.add.sprite(this.world.width - (20 * 32),35,'guy',0);
		this.guy5.animations.add('left', [1,5,9,13], 4, true);
		this.guy5.animations.add('right', [3,7,11,15], 4, true);
		this.guy5.animations.add('down', [0,4,8,12], 4, true);
		this.guy5.animations.add('up', [2,6,10,14], 4, true);
		//this.guy5.animations.play('left');
		//guy 6
		this.guy6 = this.game.add.sprite(this.world.width - (31 * 32), (32 * 7) - 4,'guy',0);
		this.guy6.animations.add('left', [1,5,9,13], 4, true);
		this.guy6.animations.add('right', [3,7,11,15], 4, true);
		this.guy6.animations.add('down', [0,4,8,12], 4, true);
		this.guy6.animations.add('up', [2,6,10,14], 4, true);
		//this.guy6.animations.play('left');
		// guy 7
		this.guy7 = this.game.add.sprite(17 * 32, this.world.height - (13 * 32),'guy',0);
		this.guy7.animations.add('left', [1,5,9,13], 4, true);
		this.guy7.animations.add('right', [3,7,11,15], 4, true);
		this.guy7.animations.add('down', [0,4,8,12], 4, true);
		this.guy7.animations.add('up', [2,6,10,14], 4, true);
		// guy 8
		this.guy8 = this.game.add.sprite(19 * 32, this.world.height,'guy',0);
		this.guy8.animations.add('left', [1,5,9,13], 4, true);
		this.guy8.animations.add('right', [3,7,11,15], 4, true);
		this.guy8.animations.add('down', [0,4,8,12], 4, true);
		this.guy8.animations.add('up', [2,6,10,14], 4, true);

		//guy 9
		this.guy9 = this.game.add.sprite((17 + 19) * 32, this.world.height - (13 * 32),'guy',0);
		this.guy9.animations.add('left', [1,5,9,13], 4, true);
		this.guy9.animations.add('right', [3,7,11,15], 4, true);
		this.guy9.animations.add('down', [0,4,8,12], 4, true);
		this.guy9.animations.add('up', [2,6,10,14], 4, true);

		this.guys = [this.guy1, this.guy2, this.guy3, this.guy4, this.guy5, this.guy6, this.guy7, this.guy8, this.guy9];
		this.game.physics.arcade.enable(this.guys);
		// sets the collide world bounds
		for (let a = 0; a < this.guys.length; a++) {
			this.guys[a].body.collideWorldBounds = true;
			this.guys[a].scale.setTo(0.75);
			this.guys[a].body.immovable = true;
			this.guys[a].body.collideWorldBounds = true;
			// if(a != 4 && a !=5) {
			// 	this.guys[a].body.velocity.x = 10;
			// }
			// else if(a == 4) {
			// 	this.guys[a].body.velocity.y = 10;
			// }
			// else if(a == 5) {
			// 	this.guys[a].body.velocity.x = -10;
			// }
			
		}

		// for the movement of the guys 
		this.leftMove = true;
		this.rightMove = false;
		this.rightMove6 = false;
		this.leftMove6 = true;
		this.upMove5 = false;
		this.downMove5 = true;


		


		// these are the objects
		this.apple = this.game.add.sprite(0, 64, 'apple');
		this.cheese = this.game.add.sprite(this.world.width - 40,64, 'cheese');
		this.lemon = this.game.add.sprite(32,320, 'lemon');
		this.carrots = this.game.add.sprite(this.world.width - 40,32 * 10, 'carrots');
		this.meat = this.game.add.sprite(this.world.width - (32 * 32), (32 * 8) - 3, 'meat');
		this.grapes = this.game.add.sprite(this.world.width - (20 * 32), 0, 'grapes');
		this.items = [this.apple, this.cheese, this.lemon, this.carrots, this.meat, this.grapes];
		this.itemsCollected = [false,false,false,false,false,false];
		this.collectedAll = false;

		//enable physics for the items
		this.game.physics.arcade.enable(this.items);
		

		// the sounds
		this.dooropen = this.game.add.audio('dooropen');
		this.dooropen.play()
		this.collectSound = this.game.add.audio('collect');
		this.playerDeath = this.game.add.audio('playerDeath');
		this.backgroundMusic = this.game.add.audio('backgroundMusic');
		this.backgroundMusic.play();		
		this.game.time.events.repeat(177000, 1000000000, this.restartMusic, this);
		this.game.time.events.repeat(3000, 1000000000, this.move, this);
		

		// the goal after collecting all items
		this.payment = this.game.add.sprite(this.world.width - 160, this.world.height - 32, 'counter');
		this.game.physics.arcade.enable(this.payment);
		this.payment.body.immovable = true;

		
		// camera follows the player
		this.game.camera.follow(this.person);
		
		// creates the control keys
		this.cursor = this.game.input.keyboard.createCursorKeys();


	},

	update: function() {

		 this.game.physics.arcade.collide(this.person,this.collision); // collision between the various objects
		 this.game.physics.arcade.collide(this.guys, this.collision);
		 if (this.game.physics.arcade.collide(this.person, this.bag)) {
		 	this.bag.kill();
		 	this.person.collectedBag = true;
		 	this.game.collectedBag = true;
		 }

		 if (this.associates != null && (this.game.physics.arcade.collide(this.person, this.associates))) {
		 	this.person.reset(0, this.world.height - 32);
		 }

		 if(this.game.physics.arcade.collide(this.person, this.guys)) {
		 	this.person.reset(0, this.world.height - 32);
		 }



		 if(Math.trunc(this.game.time.totalElapsedSeconds()) > this.game.amount) {
				this.backgroundMusic.stop();
				this.playerDeath.play();
				alert('Game Over. Did not collect/pay for all items in time. Refresh to restart');
				this.game.state.destroy();
				//location.reload();

		}

		if(this.game.physics.arcade.collide(this.person,this.payment) && this.collectedAll) {
			this.backgroundMusic.stop();
			this.dooropen.play();
			alert('You finished shopping within ' + Math.trunc(this.game.time.totalElapsedSeconds()) + ' Seconds. Refresh to restart');
			this.game.state.destroy();
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
	// createAssociate: function() {
	// 	this.associates = null;
	// 	this.associate1.kill();
	// 	let po = Math.floor(Math.random() * 7);
	// 	this.associate1 = this.game.add.sprite(this.aPositionX[po], this.aPositionY[po],'man', 1);
	// 	this.associate1.scale.setTo(.75);
	// 	this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
	// 	this.associate1.addChild(this.text);
	// 	this.associate1.animations.add('right', [0,1,2,3], 8, true);
	// 	this.game.physics.arcade.enable(this.associate1);
	// 	if(this.aPositionY[po] > 0) {
	// 		this.associate1.body.velocity.x = 80;
	// 		this.associate1.animations.play('right');
	// 	}
	// 	else {
	// 		this.associate1.body.velocity.y = 100;
	// 		this.associate1.animations.play('right');
	// 	}

	// 	this.associate2.kill();
	// 	let p = Math.floor(Math.random() * 7);
	// 	this.associate2 = this.game.add.sprite(this.aPositionX[p], this.aPositionY[p],'man', 1);
	// 	this.associate2.scale.setTo(.75);
	// 	this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
	// 	this.associate2.addChild(this.text);
	// 	this.associate2.animations.add('right', [0,1,2,3], 8, true);
	// 	this.game.physics.arcade.enable(this.associate2);
	// 	if(this.aPositionY[p] > 0) {
	// 		this.associate2.body.velocity.x = 80;
	// 		this.associate2.animations.play('right');
	// 	}
	// 	else {
	// 		this.associate2.body.velocity.y = 100;
	// 		this.associate2.animations.play('right');
	// 	}

	// 	this.associate3.kill();
	// 	let poo = Math.floor(Math.random() * 7);
	// 	this.associate3 = this.game.add.sprite(this.aPositionX[poo], this.aPositionY[poo],'man', 1);
	// 	this.associate3.scale.setTo(.75);
	// 	this.text = game.add.text(0, -13, "How Can I help you", {font: "16px Arial", fill: "#ffffff"});
	// 	this.associate3.addChild(this.text);
	// 	this.associate3.animations.add('right', [0,1,2,3], 8, true);
	// 	this.game.physics.arcade.enable(this.associate3);
	// 	if(this.aPositionY[poo] > 0) {
	// 		this.associate3.body.velocity.x = 80;
	// 		this.associate3.animations.play('right');
	// 	}
	// 	else {
	// 		this.associate3.body.velocity.y = 100;
	// 		this.associate3.animations.play('right');
	// 	}		
		
	// 	this.associates = [this.associate1, this.associate2, this.associate3];
	// 	for(let a = 0; a < this.associates.length; a++) {
	// 		this.associates[a].body.collideWorldBounds = true;
	// 		this.associates[a].body.immovable = true;
	// 	}
	// },

	move: function() {
		if(this.leftMove) {
			for(let i = 0; i < this.guys.length - 2; i++) {
				this.guys[i].body.velocity.x = 130;
				this.guys[i].body.velocity.y = 5;
				this.leftMove = false;
				this.rightMove = true;
				this.guys[i].animations.play('right');
			}
		}
		else if(this.rightMove) {
			for(let i = 0; i < this.guys.length- 2; i++) {
				this.guys[i].body.velocity.x = -130;
				this.guys[i].body.velocity.y = -5;
				this.leftMove = true;
				this.rightMove = false;
				this.guys[i].animations.play('left');
			}
		}


		// for guy 6
		if(this.leftMove6) {
			this.guy6.body.velocity.x = -100;
			this.guy6.body.velocity.y = -5;
			this.leftMove6 = false;
			this.rightMove6 = true;
			this.guy6.animations.play('left');
		}
		else if(this.rightMove6) {
			this.guy6.body.velocity.x = 100;
			this.guy6.body.velocity.y = 5;
			this.leftMove6 = true;
			this.rightMove6 = false;
			this.guy6.animations.play('right');
		}


		// for guy 5 & 7
		if(this.upMove5) {
			this.guy5.body.velocity.x = 5;
			this.guy5.body.velocity.y = -130;
			this.guy7.body.velocity.x = 5;
			this.guy7.body.velocity.y = -130;
			this.guy8.body.velocity.x = 5;
			this.guy8.body.velocity.y = 130;
			this.guy9.body.velocity.x = 5;
			this.guy9.body.velocity.y = -130;
			this.upMove5 = false;
			this.downMove5 = true;
			this.guy5.animations.play('up');
			this.guy7.animations.play('up');
			this.guy8.animations.play('down');
			this.guy9.animations.play('up');
		}
		else if(this.downMove5) {
			this.guy5.body.velocity.x = -5;
			this.guy5.body.velocity.y = 130;
			this.guy7.body.velocity.x = -5;
			this.guy7.body.velocity.y = 130;
			this.guy8.body.velocity.x = -5;
			this.guy8.body.velocity.y = -130;
			this.guy9.body.velocity.x = -5;
			this.guy9.body.velocity.y = 130;
			this.upMove5 = true;
			this.downMove5 = false;
			this.guy5.animations.play('down');
			this.guy7.animations.play('down');
			this.guy8.animations.play('up');
			this.guy9.animations.play('down');
		}

	},
	collectItem: function() {
		for(let i = 0; i < this.items.length; i++) {
			if(this.game.collectedBag && this.itemsCollected[i] == false && this.game.physics.arcade.collide(this.person,this.items[i])) {
				this.collectSound.play();
				this.items[i].kill();
				this.itemsCollected[i] = true;
				this.score = this.score + 10;
				console.log(this.score);
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
	},
	restartMusic: function() {
		this.backgroundMusic.play();
	},
	render: function() {
		this.game.debug.text('Elapsed Seconds: ' + Math.trunc(this.game.time.totalElapsedSeconds()), 0, 12);
		// this.game.debug.text('Lives: ' + this.person.lives, 1100, 64);
		// this.game.debug.text('Time Penalty: ' + this.person.timepenalty, 1100, 96);
	}
}