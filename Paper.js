class Paper{
    constructor(x,y,r){
        var options = {
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
    this.mypaper = Bodies.circle(x,y,r/2,options)
    World.add(world,this.mypaper)
    this.image = loadImage("paper.png")
    this.r = r/2
    }
    display(){
    push()
    translate(this.mypaper.position.x,this.mypaper.position.y)
    ellipseMode(RADIUS)
 // ellipse(0,0,this.r,this.r)
    image(this.image,0,0,this.r,this.r)
    pop()
    }
}
