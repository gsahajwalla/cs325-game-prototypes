var GameState = {

	preload: function() {
		this.game.load.image('background','assets/images/background.jpg');
		this.game.load.image('ground', 'assets/images/ground.png');
		this.game.load.spritesheet('dude','assets/images/dude.png',32,48);
		this.game.load.image('platforms','assets/images/platforms.png');
		this.game.load.spritesheet('ghost','assets/images/ghost.png',48,64);
		this.game.load.image('star','assets/images/star.png');
	},

	create: function() {


		//enabling the game physics 
		this.game.physics.startSystem(Phaser.Physics.Arcade);

		//to stop the menu from showing up when right click is down 
		this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

		//this is the background of the game
		this.background = this.game.add.sprite(0,0,'background');
		this.background.scale.setTo(2.5,1);
		this.world.resize(3000,650);


		//this is the ground
		this.ground = this.game.add.sprite(0,600,'ground');
		this.game.physics.arcade.enable(this.ground);
		this.ground.body.immovable = true;


		// the platforms
    	this.platforms = this.game.add.group();
    	//this.platforms.lifespan = 10000;
    	this.platforms.enableBody = true;

    	// the ledges are generated
    	this.ledges;
    	this.ledge()
    	this.ledges = this.platforms.create(10000,10000,'platforms');
    	this.ledges.body.immovable = true;
    	this.ledge.lifespan = 15000;


		//this is the player 
		this.player = this.game.add.sprite(0, 0,'dude');
		this.game.physics.arcade.enable(this.player);
		this.player.poweredUp = false; //if the player is powered up to fly

		//physics for the player
		this.player.body.gravity.y = 500;
		this.player.body.collideWorldBounds = true;

		//player animations
		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    	this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    	//this is the ghost 
    	this.ghost = this.game.add.sprite(Math.random() * 3000,Math.random() * 120,'ghost');
    	//this.ghost.lifespan = 15000;
    	this.game.physics.arcade.enable(this.ghost);
    	this.ghost.body.collideWorldBounds = true;

    	// ghost animation 
    	this.ghost.animations.add('right',[3,4,5],3,true);
    	this.ghost.animations.add('left',[9,10,11],3,true);
    	this.ghost.animations.add('straight',[6,7,8],4,true);
    	this.ghostMove();
    	this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 100000, this.ghostMove, this);

    	//camera follows player
    	this.game.camera.follow(this.player);

    	
    	//added keyboard controls incase player does not have a mouse
    	this.controls = this.game.input.keyboard.createCursorKeys();


    	//this is the part to give player a special flying ability for 5 secs every 50 secs if the player collects a star
    	this.game.time.events.repeat(Phaser.Timer.SECOND * 35, 10000, this.stars, this);
    	this.game.time.events.repeat(Phaser.Timer.SECOND * 10, 10000, this.ledge, this);

    	// this.timef = this.game.time.elapsed;
    	// if(this.timef >= 10) {
    	// 	this.timef = 0;
    	// 	this.ghostMove();
    	// }
	},

	update: function() {

		//check is the player collides with the ground 
		this.game.physics.arcade.collide(this.player,this.ground);

		//checks for collision between player and platforms
		this.game.physics.arcade.collide(this.player,this.platforms);

		// if player and ghost collide game is over
		if (this.game.physics.arcade.collide(this.player,this.ghost)) {
			this.ghost.kill();
			alert("You have 'CAUGHT' the ghost")
			this.game.state.restart();
		}

		// // checks if ledges exists
		// if(this.ledges.alive == false) {
		// 	this.ledge();
		// }

		if(this.game.physics.arcade.collide(this.player, this.star)) {
			this.star.kill();
			this.player.poweredUp = true;
			this.start = Math.trunc(this.game.time.totalElapsedSeconds());
			this.player.animations.stop();
			this.player.frame = 4;
			console.log(this.start);
		}

		//checks to see if the player should still be powered up since a power up only lasts 5 seconds
		this.end = Math.trunc(this.game.time.totalElapsedSeconds());
		if(this.end - this.start >= 5) {
			this.player.poweredUp = false;
		}

		//sets the player velocity 
		this.player.body.velocity.x = 0;

		//this.ghost.animations.play('straight');
		//this.ghostMove();

		//mouse controls and keyboard 
		if(this.player.poweredUp == false) {
			if((this.game.input.mousePointer.middleButton.isDown || this.controls.up.isDown) && this.player.body.touching.down) {
				this.player.body.velocity.y = -485;
			}

			if((this.game.input.mousePointer.leftButton.isDown || this.controls.left.isDown)) {
				this.player.body.velocity.x = -400;
				this.player.animations.play('left');
			}
			else if ((this.game.input.mousePointer.rightButton.isDown || this.controls.right.isDown)) {
				this.player.body.velocity.x = 400;
				this.player.animations.play('right');
			}
			else {
				this.player.animations.stop();
				this.player.frame = 4;
			}
		}
		//if the player is powered up gives a new set of controls 
		else if (this.player.poweredUp == true) {
			this.player.animations.stop();
			this.player.frame = 4;

			if(this.game.input.mousePointer.isDown) {
				this.game.physics.arcade.moveToPointer(this.player,400);
			}

		}
	},
	ghostMove: function() {
		var move = Math.trunc(Math.random() * 1000);
		//console.log(move);
		// if (move % 3 == 0) {
		// 	this.ghost.body.velocity.x = -400;
		// 	this.ghost.body.velocity.y = 5;
		// 	this.ghost.animations.play('left');
		// }
		// else if (move % 5 == 0){
		// 	this.ghost.body.velocity.x = 400;
		// 	this.ghost.body.velocity.y = -10;
		// 	this.ghost.animations.play('right');
		// }
		// else if (move % 7 == 0) {
		// 	this.ghost.body.velocity.x = -400;
		// 	this.ghost.body.velocity.y = 5;
		// 	this.ghost.animations.play('left');
		// }
		// else if (move % 13 == 0) {
		// 	this.ghost.body.velocity.x = 400;
		// 	this.ghost.body.velocity.y = -10;
		// 	this.ghost.animations.play('right');
		// }
		if (this.ghost.x >= 2900) {
			this.ghost.body.velocity.x = -400;
			this.ghost.body.velocity.y = 5;
			this.ghost.animations.play('left');
		}
		else if (this.ghost.x <= 80) {
			this.ghost.body.velocity.x = 400;
			this.ghost.body.velocity.y = -20;
			this.ghost.animations.play('right');
		}
		else {
			if (move % 2 == 0) {
			this.ghost.body.velocity.x = -400;
			this.ghost.body.velocity.y = 5;
			this.ghost.animations.play('left');
		}
		else if (move % 5 == 0){
			this.ghost.body.velocity.x = 400;
			this.ghost.body.velocity.y = -20;
			this.ghost.animations.play('right');
		}
		}
	},
	stars: function() {
		this.star = this.game.add.sprite(Math.random() * 3000, Math.random() * 600,'star');
		this.star.lifespan = 10000;
		this.game.physics.arcade.enable(this.star);
	},
	ledge: function() {
		for(var i = 0; i < 10; i++) {
    		let ax = Math.trunc(Math.random() * 6);
    		let ay = Math.trunc(Math.random() * 6);
    		console.log('hello');
    		let x = ax * 500 ;
    		let y = ay * 100;
    		this.ledges = this.platforms.create(x,y,'platforms');
    		this.ledges.lifespan = 15000;
    		this.ledges.body.immovable = true;
    	}
	}

};