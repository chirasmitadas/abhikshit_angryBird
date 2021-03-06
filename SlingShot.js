class SlingShot{
    constructor(body1, point2){
        var options ={
            bodyA:body1,
            pointB:point2,
            stiffness:0.08,
            length:10
        }
     
        this.sling = Matter.Constraint.create(options);
        Matter.World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var startPoint = this.sling.bodyA.position;
            var endPoint = this.sling.pointB;
            line(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
        }
       
    }
}