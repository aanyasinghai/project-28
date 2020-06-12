class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness : 0.02,
            lenght : 10
        }
        this.pointB = pointB
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    fly(){
        this.rope.bodyA = null;
    }
      
    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x + 30, pointB.y - 3);
            }else{
                strokeWeight(4);
                line(pointA.x+25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            pop();
        }
    }
    
}