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
    this.loop()
  }

  loop(){
    
    m_Control.update()
    m_Control.render()

    this.animId = window.requestAnimationFrame(this.bindloop)
  }

}