var GameState = {

	preload: function() {
		this.game.load.image('background','assets/images/background.jpg');
		this.game.load.image('ground', 'assets/images/ground.png');
		this.game.load.spritesheet('dude','assets/images/dude.png',32,48);
		this.game.load.image('platforms','assets/images/platforms.png');
		this.game.load.spritesheet('ghost','assets/images/ghost.png',48,64);
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


		//this is the player 
		this.player = this.game.add.sprite(0, 0,'dude');
		this.game.physics.arcade.enable(this.player);

		//physics for the player
		this.player.body.gravity.y = 300;
		this.player.body.collideWorldBounds = true;

		//player animations
		this.player.animations.add('left', [0, 1, 2, 3], 10, true);
    	this.player.animations.add('right', [5, 6, 7, 8], 10, true);

    	//this is the ghost 
    	this.ghost = this.game.add.sprite(0,0,'ghost');
    	this.game.physics.arcade.enable(this.ghost);
    	this.ghost.body.collideWorldBounds = true;

    	// ghost animation 
    	this.ghost.animations.add('right',[3,4,5],3,true);
    	this.ghost.animations.add('left',[9,10,11],3,true);


    	//camera follows player
    	this.game.camera.follow(this.player);

    	// the platforms
    	this.platforms = this.game.add.group();
    	this.platforms.enableBody = true;
    	this.ledge = this.platforms.create(500,500,'platforms');
    	this.ledge.body.immovable = true;

    	//added keyboard controls incase player does not have a mouse
    	this.controls = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {

		//check is the player collides with the ground 
		this.game.physics.arcade.collide(this.player,this.ground);

		//checks for collision between player and platforms
		this.game.physics.arcade.collide(this.player,this.platforms);

		//sets the player velocity 
		this.player.body.velocity.x = 0;

		this.ghost.animations.play('right');

		//mouse controls and keyboard 
		if((this.game.input.mousePointer.middleButton.isDown || this.controls.up.isDown) && this.player.body.touching.down) {
			this.player.body.velocity.y = -400;
		}

		if((this.game.input.mousePointer.leftButton.isDown || this.controls.left.isDown)) {
			this.player.body.velocity.x = -400;
			this.player.animations.play('left');
		}
		else if ((this.game.input.mousePointer.rightButton.isDown || this.controls.right.isDown)) {
			this.player.body.velocity.x = 1000;
			this.player.animations.play('right');
		}
		else {
			this.player.animations.stop();
			this.player.frame = 4;
		}
	},


};