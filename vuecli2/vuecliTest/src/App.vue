<template>
  <div id="app">
    <img src="./assets/logo.png">
<div>
  <router-link to="/">首页</router-link> |
  <router-link to="/hi">hi页面</router-link> |
  <!-- 用route-link绑定值的时候一定要绑定to 
        to中以对象形式写 
        name要与路由中配置的name相同  
        params是传递的参数,参数可以传递多个 是key:value形式
        接收是在模板中用插值形式{{$route.params.key}}接收-->
  <router-link :to="{name:'hi1',params:{username:'cc',id:'888'}}">hi页面1</router-link> |
  <router-link to="/hi/hi2">hi页面2</router-link>
</div>
<p>{{$route.name}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
