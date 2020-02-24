import base from '../base/base.js'


export default class enemy extends base{

  constructor(r, lineWidth, strokeStyle) {
    super(canvas.width / (window.devicePixelRatio * 2), canvas.height / (window.devicePixelRatio * 2), r, 0, 2 * Math.PI, lineWidth, strokeStyle)
    this.state = 1
  }

  update(){
    
  }
}