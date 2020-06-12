class Box {
    constructor(){
        var options={
            'isStatic': true,
            'restitution': 0.5,
            'friction': 0.5,
            'density':1.2
        }
        this.left = Bodies.rectangle(500,680,220,20,options);
        this.right = Bodies.rectangle(400,650,20,70,options);
        this.bottom = Bodies.rectangle(600,650,20,70,options);
       
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.left);
        World.add(world,this.right);
        World.add(world,this.bottom);
    }
    display(){
        //var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
        //fill("yellow");
        //strokeWeight(4);
        //rectMode(CENTER)
        //rect(0,0,this.width,this.height);
        imageMode(CENTER)
        image(this.image,500,650,220,80);
        //pop();
    }
}
