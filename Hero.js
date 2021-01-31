class Hero{
    constructor(x,y,r){
        this.body = Bodies.circle(x,y,r);

        this.image = playerImg1;
        this.r = r;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*3, this.r*2);
        pop();
    }
}