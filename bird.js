class Bird extends Parent{
    constructor(x, y) {
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      Matter.Body.setDensity(this.body,2);
    }
    display(){
      var pos =this.body.position;
     // pos.x = mouseX;
      //pos.y =mouseY;
      super.display();
    }
  };
  