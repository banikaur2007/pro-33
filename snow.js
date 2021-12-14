class Snow{
    constructor(x,y){
        this.body=Bodies.circle(x,y,20,{restitution:0.5});
        this.radius=20;
       this.image=loadImage("snow4.webp")
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        imageMode(RADIUS);
        image(this.image,0,0,this.radius, this.radius);
        pop()
    }


}