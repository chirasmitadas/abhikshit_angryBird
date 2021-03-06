class Log extends Parent {
    constructor(x, y, height, angle) {
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
      Matter.Body.set(this.body, 'restitution', 0);
      Matter.Body.set(this.body, 'friction', 4);
      Matter.Body.setDensity(this.body,0.5 );
      this.image=loadImage("sprites/wood2.png")
    }
    
  };
  