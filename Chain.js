class Chain {
    constructor(dot1, dot2 ){

        var options = {

            bodyA: dot1,
            pointB: dot2,
            length: 1,
            stiffness: .20
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
        this.point = dot2;
    }
   display(){
    
    if(this.chain.bodyA){
         var pointA = this.chain.bodyA.position;
            
        strokeWeight(5);
        line(pointA.x,pointA.y, this.point.x, this.point.y)
    }

   }

   fly(){
    this.chain.bodyA = null;
}

attach(body){
    this.sling.bodyA = body;
}
  
}