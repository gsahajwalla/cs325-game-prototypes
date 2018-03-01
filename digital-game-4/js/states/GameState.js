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