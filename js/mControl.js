import player from './player/player.js'
import background from '../js/base/background.js'


let ctx = canvas.getContext('2d')

export default class mControl
{
  constructor(){
    this.background = new background()
    this.player = new player(0,5,'white')
  }

  update(){
    this.player.update()
  }

  redraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.background.drawToImage(ctx)
    this.player.drawToImage(ctx)
  }

}