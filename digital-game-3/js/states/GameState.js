var GameState = {

	preload: function() {
		this.game.load.image('background','assets/images/background.jpg');
		this.game.load.image('ground', 'assets/images/ground.png');
		this.game.load.spritesheet('dude','assets/images/dude.png',32,48);
	},

	create: function() {


		//enabling the game physics 
		this.game.physics.startSystem(Phaser.Physics.Arcade);

		//to stop the menu from showing up when right click is down 
		this.game.canvas.oncontextmenu = function (e) { e.preventDefault(); }

		//this is the background of the game
		this.background = this.game.add.sprite(0,0,'background');
		//this.background.scale.setTo(1,2);
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

    	//camera follows player
    	this.game.camera.follow(this.player);

    	//added keyboard controls incase player does not have a mouse
    	this.controls = this.game.input.keyboard.createCursorKeys();
	},

	update: function() {

		//check is the player collides with the ground 
		this.game.physics.arcade.collide(this.player,this.ground);

		//sets the player velocity 
		this.player.body.velocity.x = 0;

		//mouse controls and keyboard 
		if((this.game.input.mousePointer.middleButton.isDown || this.controls.up.isDown) && this.player.body.touching.down) {
			this.player.body.velocity.y = -200;
		}

		if((this.game.input.mousePointer.leftButton.isDown || this.controls.left.isDown)) {
			this.player.body.velocity.x = -200;
			this.player.animations.play('left');
		}
		else if ((this.game.input.mousePointer.rightButton.isDown || this.controls.right.isDown)) {
			this.player.body.velocity.x = 200;
			this.player.animations.play('right');
		}
		else {
			this.player.animations.stop();
			this.player.frame = 4;
		}
	},


};