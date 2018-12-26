<template>
    <div class="draw-body">
      <ul class="draw-btn">
        <li @click="showFun()">弹层</li>
      </ul>
      <div id="draw-mask" v-if="drawPageShow">
        <draw ref="in-draw-mask"
          :inRatio="3"
          :inLineColor="'#999'"
          :inLineWidth="5"
          :inShadowBlur="5"
        ></draw>
        <div class="draw-close" @click="drawClose()">关闭</div>
        <div class="draw-delete" @click="drawDelete()">清空</div>
      </div>
      <div id="draw-box">
        <draw ref="in-write"
          :inRatio="3"
          :inLineColor="'#000'"
          :inLineWidth="12"
          :inShadowBlur="5"
        ></draw>
        <div class="write-delete" @click="writeDelete()">清空</div>
      </div>
    </div>
</template>

<script>
import draw from './inDraw/index' 

export default {
  name: 'drawBody',
  components: {
    draw,
  },
  data () {
    return {
      drawPageShow:false,
      WordImg:'',
    }
  },
  created:function() {
       
  },
  mounted:function() {
        
  },
  methods: {
      showFun(){
        this.drawPageShow=true;
      },
      drawClose(){
        this.drawPageShow=false;
      },
      drawDelete(){
        this.$refs["in-draw-mask"].inDeleteCanvas()
      },
      writeDelete(){
        this.$refs["in-write"].inDeleteCanvas()
      },
  }

}
</script>
<style>
.draw-body{
  width: 100%;height: 100%; 
  background: #eee;
  
}
.draw-body .draw-btn{
  padding: 0.4rem;
}
.draw-body .draw-btn li{
  text-align: center;
  line-height: 0.8rem;
}
#draw-mask{
  width: 100%;height: 100%;
  position:fixed;
  top:0;left:0;
  z-index: 800;
  background:rgba(255, 255, 255, 0.9);
}
#draw-mask .draw-delete{
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
}
#draw-mask .draw-close{
  position: absolute;
  left: 0.4rem;
  bottom: 0.4rem;
}
#draw-box{
  margin-top: 0.8rem;
  width: 6.7rem;
  height: 6.7rem;
  position: relative;
  left: 50%;
  margin-left: -3.35rem;
  border-radius: 0.4rem;
  background: #fff url("../../static/img/1.png") no-repeat 0 0;
  background-size: 100% 100%;
}
#draw-box .write-delete{
  position: absolute;
  bottom: -0.8rem;
  right: 0.4rem;
}
</style>
