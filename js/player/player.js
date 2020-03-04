import base from '../base/base.js'


export default class player extends base{

  constructor(r,lineWidth, strokeStyle){
    super(canvas.width / 2, canvas.height / 2, r, 0, 2 * Math.PI, lineWidth, strokeStyle)
    this.state = 1
    this.speed = 4
  }

  update(){
    if(this.r >= (canvas.width / 2 - 50) ){
      this.state = 0
    }
    else if(this.r <= 0 ){
      this.state = 1
    }

    if(this.state === 1)
      this.r = this.r + this.speed
    else
      this.r = this.r - this.speed
    
  }
}