class Superhero{

    constructor(x,y){

        var options = {

            restitution : 0.8,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,50,50, options);

        this.width = 50;
        this.height = 50;
        this.image = "images/superhero01.png"

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        
        //Capture the new settings
        push();
        //to change the 0 of the axis to a given x and y position
        translate(pos.x,pos.y);
        //rotate angle
        rotate(angle);

        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        //revert to the original settings
        pop();
    }
}