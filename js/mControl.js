import player from './player/player.js'
import background from '../js/base/background.js'
import enemy from './enemy/enemys.js'


export default class mControl
{
  constructor(){

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
    this.ctx = canvas.getContext('2d')
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  //创建enemy对象
  enemysCreate(){
    let r = 40 
    let lineWidth = 20
    let strokeStyle = 'red'
    for(let i=0;i<5;i++){
      let v = new enemy(r,lineWidth,strokeStyle)
      r = r + 30
      this.enemys.push(v)
    }
  }

  update(){
    
    this.enemys.forEach(enemy=>{
      enemy.update()})

    this.player.update()

  }

  render(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.background.drawToImage(this.ctx)
    this.enemys.forEach(v=>{v.drawToImage(this.ctx)})
    this.player.drawToImage(this.ctx)
  }
}