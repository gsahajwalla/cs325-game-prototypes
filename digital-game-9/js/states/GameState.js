var GameState = {

	create: function() {

		// this is the space background 
		this.space = this.game.add.tileSprite(0, 0, 1000, 600, 'space');
		this.space.autoScroll(0, 100);

		// the player
		this.player = this.add.sprite(this.game.world.centerX, this.game.world.height - 50, 'player');
		this.player.anchor.setTo(0.5);
		this.game.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.lives = 5;

		// the enemy 
		this.invader = this.game.add.group();
		this.invader.enableBody = true;
		this.game.physics.arcade.enable(this.invader);

		this.createInvaders();

		this.creation = this.game.time.events.loop(8100, this.createInvaders, this); // a bullet every 10 seconds


		this.bullets = this.game.add.group();
	    this.bullets.enableBody = true;
	    this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	    this.bullets.createMultiple(30, 'bullet');
	    this.bullets.setAll('anchor.x', 0.5);
	    this.bullets.setAll('anchor.y', 1);
	    this.bullets.setAll('outOfBoundsKill', true);
	    this.bullets.setAll('checkWorldBounds', true);
		

		this.bulletTime = 0;


		// the stones
		this.stones = this.game.add.group();
		this.stones.enableBody = true;
		this.stones.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.time.events.loop(8000, this.createStones, this);

		this.collectedStones = 0;

		
		// the sounds
		this.collectSound = this.game.add.audio('collect');
		this.playerDeath = this.game.add.audio('playerDeath');
		this.backgroundMusic = this.game.add.audio('backgroundMusic');
		this.backgroundMusic.play();
		


		// creates the control keys
		this.cursor = this.game.input.keyboard.createCursorKeys();
		this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		this.text = this.game.add.text(game.world.width - 300, 10, 'Lives : ' + this.player.lives, { font: '34px Arial', fill: '#fff' });
	},

	update: function () {


		if(this.collectedStones == 5) {
			this.player.kill();
			this.stateText = game.add.text(game.world.centerX - 400,game.world.centerY,'You colleted all five stones. Refresh to restart', { font: '40px Arial', fill: '#fff' });
		}

		this.player.body.velocity.x = 0;
		this.player.body.velocity.y = 0;

		if (this.cursor.left.isDown) {
			this.player.body.velocity.x = -500;
		}
		else if (this.cursor.right.isDown) {
			this.player.body.velocity.x = 500;
		}
		else if (this.cursor.down.isDown) {
			this.player.body.velocity.y = 500;
		}
		else if (this.cursor.up.isDown) {
			this.player.body.velocity.y = -500;
		}
		else {
			this.player.animations.stop();
		}

		// this is for the player firing =
		// if (this.fireButton.isDown) {
		// 	this.fireBullets();
		// }


		//check for collisions
		if(this.game.physics.arcade.overlap(this.player, this.invader) && this.player.lives == 0) {
			this.backgroundMusic.stop();
			this.playerDeath.play();
			this.player.kill();
			this.stateText = game.add.text(game.world.centerX,game.world.centerY,'You were killed you collected ' + this.collectedStones + " stones. Refresh", { font: '40px Arial', fill: '#fff' });
    		this.stateText.anchor.setTo(0.5, 0.5);
		}

		if (this.game.physics.arcade.overlap(this.player, this.invader) && this.player.lives > 0) {
			this.player.reset(this.game.world.centerX, this.game.world.height - 50);
			this.invader.kill();
			// the enemy 
			this.invader = this.game.add.group();
			this.invader.enableBody = true;
			this.game.physics.arcade.enable(this.invader);
			this.createInvaders();
			this.player.lives -= 1;
			this.text.kill();
			this.text = this.game.add.text(game.world.width - 300, 10, 'Lives : ' + this.player.lives, { font: '34px Arial', fill: '#fff' });
		}

		if(this.game.physics.arcade.overlap(this.player, this.stones)) {
			this.stone.kill();
			this.collectSound.play();
			this.collectedStones += 1;
		}
	},

	fireBullets: function() {
		//  To avoid them being allowed to fire too fast we set a time limit
	    if (this.game.time.now > this.bulletTime) {
	        //  Grab the first bullet we can from the pool
	        this.bullet = this.bullets.getFirstExists(false);

	        if (this.bullet) {
	            //  And fire it
	            this.bullet.reset(this.player.x, this.player.y + 8);
	            this.bullet.body.velocity.y = -400;
	            this.bulletTime = this.game.time.now + 1000;
	        }
	    }
	},

	createInvaders: function () {

		for(let b = 0; b < Math.random() * 10 + 10; b++) {
			this.alien = this.invader.create(Math.random() * 1000 + 20, Math.random() * 120 + 20, 'invader');
			this.alien.lifespan = 8000;
			this.alien.anchor.setTo(0.5, 0.5);
			this.alien.scale.setTo(2);
	        this.alien.animations.add('fly', [ 0, 1, 2, 3 ], 20, true);
	        this.alien.animations.add('kaboom');
	        this.alien.play('fly');
	        this.alien.body.moves = false;


	        this.invader.x = 100;
		    this.invader.y = 50;



		    var tween = this.game.add.tween(this.invader).to( { x: 200, y: 500 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);

		    //  When the tween loops it calls descend
		    tween.onLoop.add(this.descend, this);
		}
	},

	descend: function () {
		this.invader.y += 1000;
	},

	createStones: function () {
		this.stone = this.stones.create(Math.random() * 900, Math.random() * 500, 'stone');
		this.stone.scale.setTo(2);
		this.stone.lifespan = 8000;
	}

}