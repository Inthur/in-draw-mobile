# in-writing-board

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 功能
``` bash
手机端写字板、画板vue组件
```

## 使用
``` bash
import draw from './inDraw/index'
```
``` bash
      <div id="draw-box">                  #样式自定义
        <draw ref="in-draw"
          :inRatio="3"                     #retina屏兼容,画布大小放大倍数，Number   
          :inLineColor="'#999'"            #笔触颜色
          :inLineWidth="5"                 #笔触宽度，Number
          :inShadowBlur="5"                #笔触阴影大小，Number
        ></draw>
        <div class="draw-delete" @click="drawDelete()">清空</div>    #可调用组件方法inDeleteCanvas清空画布
      </div>
```
``` bash
  methods: {
      drawDelete(){
        this.$refs["in-draw"].inDeleteCanvas()
      },
  }
```