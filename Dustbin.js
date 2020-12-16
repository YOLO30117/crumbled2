class Dustbin{
    constructor(){
        this.left = Bodies.rectangle(1100, 600, 20,100 , {isStatic:true} );
         World.add(world,this.left);
         
         this.right = Bodies.rectangle(1300, 600, 20,100 , {isStatic:true} );
         World.add(world,this.right);
         
         this.bottom = Bodies.rectangle(1200, 650, 100,20 , {isStatic:true} );
         World.add(world,this.bottom);

         this.image = loadImage("dustbingreen.png")
    }

    display(){
        rectMode(CENTER)
        fill("yellow")
      //rect(this.left.position.x,this.left.position.y,20,100)
      //rect(this.right.position.x,this.right.position.y,20,100)
      //rect(this.bottom.position.x,this.bottom.position.y,200,20)
        image(this.image,1100,550,200,100)
    }
}

