---
layout: home

title: Kitty
titleTemplate: 一个Vue3组件库

hero:
  name: Kitty
  text: 看看你
  tagline: 没啥特点仅供学习
  image:
    src: /logo.png
    alt: Kitty
  actions:
    - theme: brand
      text: 开始
      link: /qkl/menu1/小程序/小程序components模板.md
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/geeksdidi/kittyui

features:
  - icon: 💡
    title: Vue3组件库
    details: 基于vite打包和TypeScript开发
  - icon: 📦
    title: 仅供学习使用
    details: 倾向于Vue3组件库的学习，请勿用于实际生产项目
  - icon: 🛠️
    title: 按需引入
    details: 直接支持按需引入无需配置任何插件。
---


<script setup>
  import { onMounted } from 'vue'
  // features跳转
  onMounted(() => {
      const cards = document.getElementsByTagName('article')
      if(cards.length){
        console.log(typeof cards,55)
        Object.keys(cards).forEach(item=>{
        console.log(item,55)
        })
        // cards.Array.foreach(item=>{
        //     console.log(item,55)
        // })
      }
    //   for (let i=0; i<cards.length; i++){ 
    //     cards[i].classList.add('article')
    //     let url = ''
    //     switch(i){
    //       case 0:
    //         url = '/menu1/Vue2/Vue页面模版.html'
    //         break;
    //       case 1:
    //         url = '/menu1/小程序/小程序components模板.html'
    //         break;
    //       case 2:
    //         url = '/menu1/思维导图/Git操作.html'
    //         break;
    //       case 3:
    //         url = '/menu1/WebStorm编辑器/常用快捷键.html'
    //         break;
    //     }
    //     cards[i].addEventListener('click',()=> {
    //       window.location.replace(url)
    //     })
    //   }
    })
</script>

