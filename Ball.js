class BOC {
    constructor(x,y,radius,opt){
        var Options={

            restitution = 0.8,
            friction = 0.5,
            density =  1.2,
        }
        
        this.body = Matter.Bodies.circle(200,500,40,Options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
  
  }
};