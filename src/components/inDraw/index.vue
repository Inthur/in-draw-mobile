<template>
    <div class="in-draw-page" ref="in-draw-page">
       <canvas id="in-draw-canvas" ref="in-draw-canvas" @touchstart="inCanvasStart($event)" @touchmove="inCanvasMove($event)" @touchend="inCanvasEnd($event)">您的浏览器不支持 HTML5 canvas 标签</canvas>
        <!--<div class="in-draw-toolbar">
            <ul class="clearfix">
                <li></li>
            </ul>
        </div>-->
    </div>
</template>

<script>
import './static/js/msize.js'

export default {
  name: 'inDrawPage',
  props:{
        inRatio:{
            type:Number,
        },
        inLineColor:{
            type:String,
        },
        inLineWidth:{
            type:Number,
        },
        inShadowBlur:{
            type:Number,
        },
   },
  data () {
    return {
        inCtx:{},
        inCanvasBound:{},
        inStartX:'',
        inStartY:'',
        // inRatio:3,
    }
  },
  watch:{
    //   drawShow(newName, oldName) {
    //       if(newName){
            
    //       }
    //   }
  },
  created:function() {
       
  },
  mounted:function() {
        this.$nextTick(()=> {
            let canvasDom=this.$refs['in-draw-canvas'];

            this.inCanvasBound = canvasDom.getBoundingClientRect();
            canvasDom.width=this.inCanvasBound.width*this.inRatio;
            canvasDom.height=this.inCanvasBound.height*this.inRatio;

            this.inCtx=canvasDom.getContext("2d");

            
            this.inCtx.lineWidth=this.inLineWidth*this.inRatio;
            this.inCtx.lineCap = "round";
            this.inCtx.lineJoin = "round";
            this.inCtx.strokeStyle=this.inLineColor;
            this.inCtx.shadowBlur = this.inShadowBlur;
            this.inCtx.shadowColor = this.inLineColor;
            // console.log(this.inCtx)
        })
  },
  methods: {
      /* 书写 */
      inCanvasStart(e){
            e.preventDefault();
        //   console.log(this.inCtx)
            // let touch= e.touches[0]
            let x=(e.changedTouches[0].pageX - this.inCanvasBound.left + 0.5)*this.inRatio;
            let y=(e.changedTouches[0].pageY- this.inCanvasBound.top + 0.5)*this.inRatio;
            // let x=e.changedTouches[0].pageX;
            // let y=e.changedTouches[0].pageY;
            this.inStartX=x;
            this.inStartY=y;
            this.inCtx.beginPath();
            this.inCtx.moveTo(x, y);
            // this.inCtx.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
      },
      inCanvasMove(e){
          e.preventDefault();
        // let touch = e.touches[0]
        let x=(e.changedTouches[0].pageX - this.inCanvasBound.left + 0.5)*this.inRatio;
        let y=(e.changedTouches[0].pageY- this.inCanvasBound.top + 0.5)*this.inRatio;
        // let x=e.changedTouches[0].pageX;
        // let y=e.changedTouches[0].pageY;
       
        // this.inCtx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        this.inCtx.lineTo(x, y);
        this.inCtx.stroke();
      },
      inCanvasEnd(){
          this.inCtx.closePath();
      },
      /* 清空 */
      inDeleteCanvas(){
           this.inCtx.clearRect(0, 0,this.$refs['in-draw-canvas'].width, this.$refs['in-draw-canvas'].height);  
      },
  }

}
</script>
<style>
.in-draw-page{
    width:100%;height:100%;
    overflow:hidden;
    /* background:rgba(255, 255, 255, 0.9) */
}
.in-draw-canvas-box{
    width: 100%;
    height: 100%;
}
.in-draw-canvas-box img{
    width: 100%;
    height: 100%;
}
#in-draw-canvas{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;left: 0;
    /* background: rgba(102, 51, 153, 0.5); */
    border-radius: 0.4rem;
}
.in-draw-page .in-draw-toolbar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #eee;
    color: #333;
    font-size: 0.24;
}
.in-draw-page .in-draw-toolbar ul{
    padding: 0.2rem 0.4rem;
}
.in-draw-page .in-draw-toolbar li{
    float: left;
    padding: 0 0.3rem;
}
</style>
