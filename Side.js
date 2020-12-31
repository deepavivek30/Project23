class Side{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,20,100,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill (255,0,0)
        rect(pos.x,pos.y,20,100)
    }
}