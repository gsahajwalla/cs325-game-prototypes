var GameState = {

	preload: function() {
		this.game.load.image('background','assets/images/background.jpg');
		this.game.load.image('ground', 'assets/images/ground.png');
		this.game.load.spritesheet('dude','assets/images/dude.png',32,48);
	},

	create: function() {

		//enabling the game physics 
		this.game.physics.startSystem(Phaser.Physics.Arcade);

		//this is the background of the game
		this.background = this.game.add.sprite(0,0,'background');
		//this.background.scale.setTo(1,2);
		//this.world.resize(3000,600);


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
	},

	update: function() {
		
		//check is the player collides with the ground 
		this.game.physics.arcade.collide(this.player,this.ground);
	},


};