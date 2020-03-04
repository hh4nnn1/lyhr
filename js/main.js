import mControl from './mControl.js'

var m_Control = new mControl()
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.animId = 0
    
    this.bindloop = this.loop.bind(this)

    this.start()
  }

  start(){

    window.cancelAnimationFrame(this.animId)

    m_Control.Antialias()
    m_Control.playerCreate()
    m_Control.enemysCreate()

    wx.onTouchStart(function (res) {
      let success = false
      m_Control.enemys.forEach(v=>{
        console.log(m_Control.player.r) 
        if (m_Control.player.r <= (v.r + v.lineWidth / 2) && m_Control.player.r >= (v.r - v.lineWidth / 2) ){
          m_Control.enemys.splice(m_Control.enemys.indexOf(v),1)
          m_Control.score += 1;
          m_Control.scoreFont.text = m_Control.score
          success = true
        }
      })
      if(success == false)
      {
        this.gameover = true
      }
    })
    this.loop()
  }

  loop(){
    
    m_Control.update()
    m_Control.render()

    this.animId = window.requestAnimationFrame(this.bindloop)
  }

}