 
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
        this.load.image('border', 'assets/border.png');
        this.load.image('wall','assets/wall.png');
        this.load.image('insect', 'assets/insect.png');
    },

    create: function() {



        //enables physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //this is the background 
        this.background = this.game.add.sprite(0,0,'background');

        //this is the border to stop the chicken from flying 
        this.border = this.game.add.sprite(0,240,'border');
        this.game.physics.arcade.enable(this.border);
        this.border.body.immovable = true;

        //this is the wall for the world
        this.wall = this.game.add.sprite(1050,241,'wall');
        this.game.physics.arcade.enable(this.wall);
        this.wall.body.immovable = true;


        //this is the insect for the chicken to catch
        this.insect = this.game.add.sprite(Math.random() * 1030, (Math.random() * (310)) + 250,'insect');
        this.insect.lifespan = 10000;
        this.game.physics.arcade.enable(this.insect);

        //this is the chicken/pet
        this.chicken = this.game.add.sprite(800,400,'chicken');
        this.chicken.scale.setTo(.2,.2);
        this.chicken.anchor.setTo(.5);
        this.chicken.health = 100;//this is the chicken health
        this.chicken.love = 100;//this is the amount of love the chicken currently has (a custom property of the field)
        //enable physics for the chicken 
        this.game.physics.arcade.enable(this.chicken);
        //makes sure chicken dosent go off screen
        this.chicken.body.collideWorldBounds = true;

        


        //allows input by keyboard
        this.cursors = this.game.input.keyboard.createCursorKeys();



        //this is the pet button 
        this.pet =  this.game.add.sprite(300,560,'pet');
        this.pet.anchor.setTo(.5);
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
        this.seeds.anchor.setTo(.5);
        this.seeds.amount = 10;
        this.seeds.health = 10;
        this.seeds.love = 0;
        //enables input for seeds
        this.seeds.inputEnabled = true;
        this.seeds.input.pixelPerfect = true;
        //give seed on being clicked
        this.seeds.events.onInputDown.add(this.giveSeed,this);
        
        //ths seed 
        this.seed = this.game.add.sprite(Math.random() * 1030, (Math.random() * (310)) + 250,'seed');
        this.seed.lifespan = 5000;
        this.game.physics.arcade.enable(this.seed);


        //this button is to feed the chicken chicks (adds alot of health but also will drastically decrease the love)
        this.chicks = this.game.add.sprite(500,560,'chicks');
        this.chicks.anchor.setTo(.5);
        this.chicks.amount = 5;
        this.chicks.health = 50;
        this.chicks.love = -50;
        //enables input for the chicks button 
        this.chicks.inputEnabled = true;
        this.chicks.input.pixelPerfect = true;
        this.chicks.events.onInputDown.add(this.giveChick,this);
        


        //this is the sleep button, increases health drastically 
        this.sleep = this.game.add.sprite(600,560,'sleep');
        this.sleep.anchor.setTo(.5);
        this.sleep.inputEnabled = true;
        this.sleep.input.pixelPerfect = true;
        this.sleep.events.onInputDown.add(this.chickenSleep,this);
        this.sleep.amount = 5;
        this.sleep.health = 15;
        this.sleep.love = 15;


        

        //this array is an array of all the buttons
        this.interact = [this.seeds,this.pet,this.chicks,this.sleep];
        //this is variable stores the currently active button 
        this.currentInteraction = null;

        //these two variables give details if the chicken is sleeping and eating 
        this.sleeping = false;
       //this.eating = false;




    },

    update: function() {
        
        if(this.insect.alive == false) {
            this.insect = this.game.add.sprite(Math.random() * 1030, (Math.random() * (310)) + 250,'insect');
            this.insect.lifespan = 10000;
            this.game.physics.arcade.enable(this.insect);
        }

        if(this.game.physics.arcade.overlap(this.chicken, this.insect)) {
            this.insect.kill();
            this.catch();

        }

        //for the seed
        if(this.seed.alive == false) {
            this.seed = this.game.add.sprite(Math.random() * 1030, (Math.random() * (310)) + 250,'seed');
            this.seed.lifespan = 5000;
            this.game.physics.arcade.enable(this.seed);
        }

        if(this.game.physics.arcade.overlap(this.chicken, this.seed)) {
            this.seed.kill();
            this.updateLife(this.seeds);

        }


        //check for border collision and wall collison
        this.game.physics.arcade.collide(this.chicken,this.border);
        this.game.physics.arcade.collide(this.chicken,this.wall);

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
                this.chicken.body.velocity.x = 100;
                this.chicken.scale.setTo(.2,.2);
            }
            else if(this.cursors.up.isDown) {
                this.chicken.body.velocity.y = -100;

            }
            else if(this.cursors.down.isDown) {
                this.chicken.body.velocity.y = 100;
            }
        }

        this.checkAlive();//keeps checking if chicken is alive
        this.getOld();//constantly reduces health and love each by 0.02
    },

    giveSeed: function() {
        if(this.seeds.amount >= 1 && this.sleeping == false) {
            /*
            this.seed = this.game.add.sprite( Math.random() * 1030, (Math.random() * (310)) + 250,'seed');
            this.seed.lifespan = 10000;
            sprite.amount -= 1;
            this.game.physics.arcade.enable(this.seed);
            */
            this.seeds.amount -= 1;
            this.updateLife(this.seeds);
        }
    },

    petChicken: function() {
        if(this.pet.amount >= 1) {
            this.pet.amount -= 1;
            this.wakeUp();
            this.updateLife(this.pet);
        }
    },

    giveChick: function() {
        if(this.chicks.amount >= 1 && this.sleeping == false) {
            this.chicks.amount -= 1;
            this.updateLife(this.chicks);
        }
    },

    chickenSleep: function() {
        if(this.sleep.amount >= 1 && this.sleeping == false) {
            this.sleep.amount -= 1;
            this.sleeping = true;
            this.updateLife(this.sleep);
        }
    },

    clearAlpha: function(sprite) {
        sprite.alpha = 1;
    },

    wakeUp: function() {
        this.sleeping = false;
    },

    render: function() {
        this.game.debug.text('Elapsed seconds: ' + this.game.time.totalElapsedSeconds(), 1055, 32);
        this.game.debug.text('Health:' + this.chicken.health,1055,50);
        this.game.debug.text('Love:' + this.chicken.love,1055,68);
        let a = 100;
        for(let i = 0; i < this.interact.length; i++) {
            this.game.debug.text(this.interact[i].key + ": " + this.interact[i].amount,1055,(a + (i * 18)));
        }

    },

    checkAlive: function() {
        if ((this.chicken.health <= 0 || this.chicken.love <= 0) && this.sleeping == true) {
            this.chicken.kill();
            alert("Your chicken died because you did not wake it up. You kept your chicken alive for " + this.game.time.totalElapsedSeconds() + " seconds. Referesh to play again");
            //this.game.time.reset();
            //this.game.state.restart();
            this.game.state.destroy();
        }
        else if(this.chicken.health <= 0 || this.chicken.love <= 0) {
            this.chicken.kill();
            alert("Your chicken died because you did not take care of it. You kept your chicken alive for " + this.game.time.totalElapsedSeconds() + " seconds. Referesh to play again");
            this.game.state.destroy();
        }
    },

    getOld: function() {
        this.chicken.love -= 0.02;
        this.chicken.health -= 0.02;
    },

    updateLife: function(sprite) {
        //update health and love depending on which sprite the chicken collides with
            this.chicken.health += sprite.health;
            this.chicken.love += sprite.love;
    },
    catch: function() {
        let index = Math.trunc(Math.random() * 4);
        let as = Math.trunc(Math.random() * 2);
        let amount = Math.trunc(Math.random() * 4);
        console.log(index + " " + as + " " + amount);
        if(as == 0) {
            this.interact[index].amount -= amount;
        }
        else {
            this.interact[index].amount += amount;
        }
    }
};

game.state.add('GameState1', GameState1);
game.state.start('GameState1');
