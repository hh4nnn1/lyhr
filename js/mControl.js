import player from './player/player.js'
import background from '../js/base/background.js'
import enemy from './enemy/enemys.js'

export default class mControl
{
  constructor(){

    this.ctx = canvas.getContext('2d')
    this.Antialias()

    this.background = new background()
    this.player = new player(0,5,'black')
    this.enemys = []
    
  }

  //自适应设备分辨率 
  Antialias(){
    let sysInfo = wx.getSystemInfoSync(), width = sysInfo.windowWidth, height = sysInfo.windowHeight;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.height = height * window.devicePixelRatio;
    canvas.width = width * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  update(){
    
    this.player.update()
    this.enemys.forEach(enemy=>{
      enemy.update()
    })
    //this.enemy.update()
  }

  render(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.background.drawToImage(this.ctx)
    this.player.drawToImage(this.ctx)
  }
}