var game = new Phaser.Game(2000,620, Phaser.Canvas,'game');

//this is a game state
var GameState1 = {
    preload: function() {
        this.load.spritesheet('chicken','assets/chick.png');
        this.load.image('background','assets/background.png')
    },
    create: function() {

        //this is the background 
        this.background = this.game.add.sprite(0,0,'background');


        //this is the chicken/pet
        this.chicken = this.game.add.sprite(800,400,'chicken');
        this.chicken.scale.setTo(2,2);
        this.chicken.health = 100;//this is the chicken health
        this.chicken.love = 100;//this is the amount of love the chicken currently has (a custom property of the field)
        //tweens for moving the chicken
        this.chicken.moveRight = this.game.add.tween(this.chicken).to({x: this.chicken.x + 50 });
        this.chicken.moveLeft = this.game.add.tween(this.chicken).to({x: this.chicken.x - 50 });
        this.chicken.moveUp = this.game.add.tween(this.chicken).to({y: this.chicken.y - 50 });
        this.chicken.moveDown = this.game.add.tween(this.chicken).to({y: this.chicken.y + 50 });
        this.chicken.moveRight.start();
        this.chicken.moveLeft.start();
        this.chicken.moveDown.start();
        this.chicken.moveUp.start();
        //this.chicken.lifespan = 10000;
        //this.chicken.animations.add('left',[0],10,true);
        console.log(this);
    },
    update: function() {
        //  Reset the this.chickens velocity (movement)
    }
};

game.state.add('GameState1', GameState1);
game.state.start('GameState1');