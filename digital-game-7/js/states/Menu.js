var Menu = {

	create: function() {
		
		// some text 
		this.text = game.add.text(0, 50, "Speed Shopper", {font: "30px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 100, "- Speed Shopper is a 2 level platformer", {font: "25px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 150, "- The overall purpose is to move around and collect all the items", {font: "25px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 200, "- 6 per level. If the player collides with the store associates \n in Level 1 the player teleports to a random position\n in Level 2 player teleports to the start", {font: "25px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 300, "- Unlike Leve l to collect items in Level 2 the player has to first collect a bag", {font: "25px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 350, "- In level when all items are collect can move to level 2 and in Level2 when all items are\n collected then move to register to pay", {font: "25px Arial", fill: "#ffffff"});
		this.text = game.add.text(0, 420, "- Maximum of 250 secs to finish the game\n Learn to use the teleport to your advantage", {font: "25px Arial", fill: "#ffffff"});
		

		this.startButton = this.game.add.sprite(this.game.world.centerX - 80, this.game.world.centerY + 200, 'startButton');
		this.startButton.inputEnabled = true;
		
		
		this.startButton.events.onInputDown.add(function() {
			this.game.state.start('Level1');
		})
	}
};