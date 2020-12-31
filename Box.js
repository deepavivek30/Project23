class Box{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.object=Bodies.rectangle(x,y,200,20,options)
        this.width=width
        World.add(world,this.object)
    
    }
    display(){
        var pos=this.object.position
       
        rectMode(CENTER)
        fill (255,0,0)
        rect(pos.x,pos.y,200,20)
        
        
    }
}
