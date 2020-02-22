import maincontrol  from './mainControl'


let ctx   = canvas.getContext('2d')
let mainControl = new mainControl()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    // 维护当前requestAnimationFrame的id
    this.aniId    = 0
    this.start()
  }


  start(){
    this.loop()
  }

  loop(){

  }

}