import base from '../base/base.js'



export default class player extends base{

  constructor(r,lineWidth, strokeStyle){
    super(canvas.width / (window.devicePixelRatio *2), canvas.height / (window.devicePixelRatio*2), r, 0, 2 * Math.PI, lineWidth, strokeStyle)
    this.state = 1
  }

  update(){
    if(this.r >= 200){
      this.state = 0
    }
    else if(this.r <= 0 ){
      this.state = 1
    }

    if(this.state === 1)
      this.r = this.r + 2
    else
      this.r = this.r - 2
  }


}