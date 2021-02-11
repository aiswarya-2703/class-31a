class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smkimage = loadImage("sprites/smoke.png");
    // traj is the array of path of bird
    this.traj=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var pos=this.body.position;
    var position=[pos.x,pos.y]
    this.traj.push(position);
    for(var i=0; i<this.traj.length; i=i+1){
      
   image(this.smkimage,this.traj[i][0],this.traj[i][1])
    }

    super.display();
  }
}
