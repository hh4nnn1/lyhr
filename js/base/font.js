
export default class font{

  constructor(text,size,color,x,y){
    this.text = text
    this.fontsize = size
    this.color = color
    this.x = x
    this.y = y
  }

  drawToImage(ctx){
    ctx.fillStyle = this.color
    ctx.font = this.fontsize + "px bold 黑体"
    ctx.fillText(this.text, this.x, this.y)
  }

}