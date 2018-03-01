var GameState = {

	preload: function() {

	},

	create: function() {

		//adds the physics
		this.game.physics.startSystem(Phaser.Physics.Arcade);

		//gets the player's horse 
		this.playerHorse = this.game.choice;
		
		// this part is to mainly decide the player position
		this.playerPosition = 0;
		this.standings = [];
		this.positions = [];
		this.standing();

		// this is the ground
		this.grounds = this.game.add.sprite(0,0,'grounds');
		this.lines = this.game.add.group();
		this.line = this.lines.create(0,300,'line');
		this.line = this.lines.create(0,400,'line');
		this.line = this.lines.create(0,500,'line');
		//this.line = this.lines.create(0,270,'line');
		this.finish = this.game.add.sprite(795,240,'finish');
		this.game.physics.arcade.enable(this.finish);


		// these are the horses
		this.h1 = this.game.add.sprite(05,220,'horse');
		this.h1.animations.add('walk',[3,4,5]);
		this.h1.animations.play('walk',9,true);
		this.game.physics.arcade.enable(this.h1);
		this.h1.body.collideWorldBounds = true;
		this.h1.p = this.positions[0];
		this.setVelocities(this.h1);
		
		this.h2 = this.game.add.sprite(05,320,'horse');
		this.h2.animations.add('walk',[3,4,5]);
		this.h2.animations.play('walk',9,true);
		this.game.physics.arcade.enable(this.h2);
		this.h2.body.collideWorldBounds = true;
		this.h2.p = this.positions[1];
		this.setVelocities(this.h2);


		this.h3 = this.game.add.sprite(05,420,'horse');
		this.h3.animations.add('walk',[3,4,5]);
		this.h3.animations.play('walk',9,true);
		this.game.physics.arcade.enable(this.h3);
		this.h3.body.collideWorldBounds = true;
		this.h3.p = this.positions[2];
		this.setVelocities(this.h3);


		this.h4 = this.game.add.sprite(05,520,'horse');
		this.h4.animations.add('walk',[3,4,5]);
		this.h4.animations.play('walk',9,true);
		this.game.physics.arcade.enable(this.h4);
		this.h4.body.collideWorldBounds = true;
		this.h4.p = this.positions[3];
		this.setVelocities(this.h4);


		// the velocities
		//this.velocity = [this.h1.body.velocity.x,this.h2.body.velocity.x,this.h3.body.velocity.x,this.h4.body.velocity.x];
		this.velocity = [0,0,0,0]
		//console.log(this.velocity)
		//this.setVelocities();
		console.log(this.velocity)
	},

	update: function() {
		if(this.game.physics.arcade.collide(this.h1, this.finish) || this.game.physics.arcade.collide(this.h2, this.finish) || this.game.physics.arcade.collide(this.h3, this.finish) || this.game.physics.arcade.collide(this.h4, this.finish)) {
			this.declareWinner();
		}
	},

	standing: function() {
		var number = Math.floor((Math.random() * 999) + 1);
		// so while 4 numbers have not been added to the list
		while(this.standings.length != 4) {
			 var number = Math.floor((Math.random() * 999) + 1);
			  this.standings.push(number);
			  //console.log(this.standings)
		}

		while(this.positions.length != 4) {
			var a = Math.max.apply(null,this.standings);
			//console.log(a);
			this.positions.push(this.standings.indexOf(a) + 1);
			this.standings[this.standings.indexOf(a)] = -1;
			

		}
		
			console.log(this.positions);
	},
	setVelocities: function(sprite) {
		// for(let i = 0; i < 4; i++) {
		// 	this.velocity[this.positions[i] - 1] = 100 - (i * 10);
		// }
		// this.h1.body.velocity.x = this.velocity[this.positions[0] - 1];
		// this.h2.body.velocity.x = this.velocity[this.positions[1] - 1];
		// this.h3.body.velocity.x = this.velocity[this.positions[2] - 1];
		// this.h4.body.velocity.x = this.velocity[this.positions[3] - 1];
		sprite.body.velocity.x = 110 - (sprite.p * 10);
	},
	declareWinner: function() {
		var text;
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		this.text = game.add.text(0, 0, "Player's Horse #" + this.playerHorse + " came " + this.positions[this.playerHorse - 1] , style);
		//this.game.state.restart();
	}
};