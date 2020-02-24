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
    m_Control.enemysCreate()

    // wx.onTouchStart(function (res) {
    //   m_Control.enemys.foreach(v=>{
    //     if( m_Control.player.r <= (v.r + 10) && m_Control.player.r >= (v.r + 10) )
    //       v.visable = false
    //     })
    // })

    this.loop()

  }

  loop(){
    
    m_Control.update()
    m_Control.render()

    this.animId = window.requestAnimationFrame(this.bindloop)
  }

}