class Box{
    constructor(x,y,width,height)
    {
        var opt={
            restitution:0.9,
            friction:1.0,
            density:0.05
        }
        this.body=Bodies.rectangle(x,y,width,height,opt)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        stroke(0);
        strokeWeight(2)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}