

export default class base{

  constructor(x = 0, y = 0, r = 0, sAngle = 0, eAngle = 2 * Math.PI,lineWidth=1,strokeStyle="white"){
    this.x=x
    this.y=y
    this.r=r
    this.sAngle=sAngle
    this.eAngle=eAngle
    this.lineWidth=lineWidth
    this.strokeStyle=strokeStyle
  }

  drawToImage(ctx){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,this.eAngle,this.sAngle)
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.strokeStyle
    ctx.stroke()
  }
}