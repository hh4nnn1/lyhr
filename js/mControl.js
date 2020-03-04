import player from './player/player.js'
import background from '../js/base/background.js'
import enemy from './enemy/enemys.js'
import font from '../js/base/font.js'

export default class mControl
{
  constructor(){

    this.background = new background()
    this.enemys = []
    this.player
    this.score = 0
    this.scoreFont = new font(this.score,60,'black',100,200)
    this.gameover = false

  }

  //自适应设备分辨率 
  Antialias(){
    let sysInfo = wx.getSystemInfoSync(), width = sysInfo.windowWidth, height = sysInfo.windowHeight;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.height = height * window.devicePixelRatio;
    canvas.width = width * window.devicePixelRatio;
    this.ctx = canvas.getContext('2d')
    //this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  //创建enemy对象
  enemysCreate(){
    let r = 60
    let lineWidth = 60
    let strokeStyle = 'red'
    for(let i=0;i<5;i++){
      console.log(this.player.r, r , i )
      if (Math.round(Math.random()) == 1 && (this.player.r > (r + (lineWidth / 2) ) || this.player.r < (r - (lineWidth / 2) ) ) ){
        let v = new enemy(r, lineWidth, strokeStyle)
        this.enemys.push(v)
        console.log(this.player.r , r )
      }
      r = r + lineWidth + (lineWidth / 3)
    }
  }

  playerCreate(){
    this.player = new player(0,10,'black')
  }

  update(){
    if( this.gameover == true)
    {
      return
    }

    if( this.enemys.length == 0 )
      this.enemysCreate()

    this.enemys.forEach(enemy=>{
      enemy.update()})

    this.player.update()

  }

  render(){

    if( this.gameover == true )
    {
      
    }

    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.background.drawToImage(this.ctx)
    this.enemys.forEach(v=>{v.drawToImage(this.ctx)})
    this.player.drawToImage(this.ctx)
    this.scoreFont.drawToImage(this.ctx,this.score)
  }
}