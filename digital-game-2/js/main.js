 
var game = new Phaser.Game(2000,620, Phaser.Canvas,'game');

//this is a game state

var GameState1 = {
    preload: function() {
        this.load.spritesheet('chicken','assets/chicken.png');
        this.load.image('background','assets/background.png');
        this.load.image('seed','assets/seed.png');
        this.load.image('chick','assets/chick.png');
        this.load.image('pet','assets/Pet.png');
        this.load.image('seeds','assets/seeds.png');
        this.load.image('chicks','assets/chicks.png');
        this.load.image('sleep','assets/sleep.jpg');
    },
    create: function() {



        //enables physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //this is the background 
        this.background = this.game.add.sprite(0,0,'background');


        
        

        //this is the seed 
        //this.seeds = this.game.add.group();
        console.log(this);


        //allows input by keyboard
        this.cursors = this.game.input.keyboard.createCursorKeys();



        //this is the pet button 
        this.pet =  this.game.add.sprite(300,560,'pet');
        //enables input for pet 
        this.pet.inputEnabled = true;
        this.pet.input.pixelPerfect = true;
        //pets chicken to increase love on being clicked
        this.pet.events.onInputDown.add(this.petChicken,this);
        this.pet.amount = 12;
        this.pet.health = 0;
        this.pet.love = 10;


        //this is the seeds button
        this.seeds = this.game.add.sprite(400,560,'seeds');
        //enables input for seeds
        this.seeds.inputEnabled = true;
        this.seeds.input.pixelPerfect = true;
        //give seed on being clicked
        this.seeds.events.onInputDown.add(this.giveSeed,this);
        this.seeds.amount = 10;
        this.seeds.health = 10;
        this.seeds.love = 0;

        this.seed;

        //this button is to feed the chicken chicks (adds alot of health but also will drastically decrease the love)
        this.chicks = this.game.add.sprite(500,560,'chicks');
        //enables input for the chicks button 
        this.chicks.inputEnabled = true;
        this.chicks.input.pixelPerfect = true;
        this.chicks.events.onInputDown.add(this.giveChick,this);
        this.chicks.amount = 5;
        this.chicks.health = 50;
        this.chicks.love = -50;

        this.check;

        //this is the sleep button, increases health drastically 
        this.sleep = this.game.add.sprite(600,560,'sleep');
        this.sleep.inputEnabled = true;
        this.sleep.input.pixelPerfect = true;
        this.sleep.events.onInputDown.add(this.chickenSleep,this);
        this.sleep.amount = 5;
        this.sleep.health = 15;
        this.sleep.love = 15;


        //this is the chicken/pet
        this.chicken = this.game.add.sprite(800,400,'chicken');
        this.chicken.scale.setTo(.2,.2);
        this.chicken.anchor.setTo(.5);
        this.chicken.health = 100;//this is the chicken health
        this.chicken.love = 100;//this is the amount of love the chicken currently has (a custom property of the field)
        //enable physics for the chicken 
        this.game.physics.arcade.enable(this.chicken);

        //this array is an array of all the buttons
        this.interact = [this.seeds,this.pet,this.chicks,this.sleep];
        //this is variable stores the currently active button 
        this.currentInteraction = null;

        //these two variables give details if the chicken is sleeping and eating 
        this.sleeping = false;
       //this.eating = false;


    },
    update: function() {
        
        //this part checks for overlaps
        if(this.seed != undefined || this.chick != undefined) {
            /*
            if(game.physics.arcade.collide(this.chicken,this.seed)) {
                console.log('in here');
                this.updateLife(this.seeds);
                this.seed.kill();
            } */
            if(this.chicken.overlap(this.chick)) {
                this.chicken.body.velocity.x = 10;
                this.chick.kill();
                this.updateLife(this.chicks);
                
            }
    
            //game.physics.arcade.overlap(this.chicken, this.chick,kills);
       }

        //movements for the chicken
        this.chicken.body.velocity.x = 0;
        this.chicken.body.velocity.y = 0;

        if(this.sleeping == false) {
            if(this.cursors.left.isDown) {
                //this.chicken.moveLeft.start();
                 this.chicken.body.velocity.x = -100;
                 this.chicken.scale.setTo(-.2,.2);
            }
            else if(this.cursors.right.isDown) {
                this.chicken.body.velocity.x = 50;
                this.chicken.scale.setTo(.2,.2);
            }
            else if(this.cursors.up.isDown) {
                this.chicken.body.velocity.y = -50;

            }
            else if(this.cursors.down.isDown) {
                this.chicken.body.velocity.y = 50;
            }
        }

        this.checkAlive();//keeps checking if chicken is alive
        this.getOld();//constantly reduces health and love each by 0.1

        //
        
    },
    giveSeed: function(sprite) {
        if(sprite.amount >= 1) {
            this.seed = this.game.add.sprite( Math.random() * 1030, (Math.random() * (310)) + 250,'seed');
            this.seed.lifespan = 10000;
            sprite.amount -= 1;
            this.game.physics.arcade.enable(this.seed);
        }
    },
    petChicken: function(sprite) {
        if(sprite.amount >= 1) {
            console.log("pet chicken");
            sprite.amount -= 1;
            this.wakeUp();
            this.updateLife(sprite);
        }
    },
    giveChick: function(sprite) {
        if(sprite.amount >= 1) {
            this.chick = this.game.add.sprite( Math.random() * 1030, (Math.random() * (310)) + 250,'chick');
            this.chick.lifespan = 10000;
            sprite.amount -= 1;
            this.game.physics.arcade.enable(this.chick);
        }
    },
    chickenSleep: function(sprite) {
        if(sprite.amount >= 1 && this.sleeping == false) {
            console.log("sleep chicken");
            sprite.amount -= 1;
            this.sleeping = true;
            this.updateLife(sprite);
        }
    },
    clearAlpha: function(sprite) {
        sprite.alpha = 1;
    },
    wakeUp: function() {
        this.sleeping = false;
    },
    render: function() {
        this.game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 1050, 32);
        this.game.debug.text('Health:' + this.chicken.health,1050,50);
         this.game.debug.text('Love:' + this.chicken.love,1050,68);

    },
    checkAlive: function() {
        if ((this.chicken.health <= 0 || this.chicken.love <= 0) && this.sleeping == true) {
            this.chicken.kill();
            alert("Your chicken died because you did not wake it up. You kept your chicken alive for " + this.game.time.totalElapsedSeconds() + "seconds. Referesh to play again");
            //this.game.time.reset();
            //this.game.state.restart();
            this.game.state.destroy();
        }
        else if(this.chicken.health <= 0 && this.chicken.love <= 0) {
            this.chicken.kill();
            alert("Your chicken died because you did not take care of it. You kept your chicken alive for " + this.game.time.totalElapsedSeconds() + "seconds. Referesh to play again");
            //this.game.time.reset();
            this.game.state.destroy();
        }
    },
    getOld: function() {
        this.chicken.love -= 0.02;
        this.chicken.health -= 0.02;
    },
    updateLife: function(sprite1) {
        //update health and love depending on which sprite the chicken collides with
        
            this.chicken.health += sprite1.health;
            this.chicken.love += sprite1.love;
    },
    kills: function() {
        this.chick.kill();
    }
};

game.state.add('GameState1', GameState1);
game.state.start('GameState1');
