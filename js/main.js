import maincontrol  from './mainControl'


let ctx   = canvas.getContext('2d')
let mControl = new mainControl()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.animId = 0
    this.start()
  }

  start(){
    window.cancelAnimationFrame(this.animId)
    this.loop()
  }

  loop(){
    
    mControl.update()
    mControl.redraw()
    this.animId = window.requestAnimationFrame(this.loop,canvas)
  }

}