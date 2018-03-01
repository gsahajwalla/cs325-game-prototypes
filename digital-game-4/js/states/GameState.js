var GameState = {

	preload: function() {

	},

	create: function() {
		//gets the player's horse 
		this.playerHorse = this.game.choice;
		
		// this part is to mainly decide the player position
		this.playerPosition = 0;
		this.standings = [];
		this.positions = [];
		this.standing();

		// this is the ground
		this.grounds = this.game.add.sprite(0,0,'grounds');

		// these are the horses
		this.h1 = this.game.add.sprite(05,220,'horse');
		this.h1.animations.add('walk',[3,4,5]);
		this.h1.animations.play('walk',9,true);

		this.h2 = this.game.add.sprite(05,320,'horse');
		this.h2.animations.add('walk',[3,4,5]);
		this.h2.animations.play('walk',9,true);

		this.h3 = this.game.add.sprite(05,420,'horse');
		this.h3.animations.add('walk',[3,4,5]);
		this.h3.animations.play('walk',9,true);

		this.h4 = this.game.add.sprite(05,520,'horse');
		this.h4.animations.add('walk',[3,4,5]);
		this.h4.animations.play('walk',9,true);
	},

	update: function() {

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
			//console.log(this.standings);
			//console.log(this.positions);

		}
	}
};