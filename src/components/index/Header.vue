<template>
  <div id="header">
    <div id="loginAndRegistered">
      <div id="login-registered">
        <el-link type="info" id="login">登录</el-link>
        <el-link type="info" id="registered">注册</el-link>
      </div>
      <div>
        <el-input v-model="SearchInput" placeholder="请输入新闻、公告、法规、办事指南" style="width:250px"></el-input>
        <el-button style="background-color:#775637;color:#FFFFFF;height:40px;width:80px">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      SearchInput: ''
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
#header{
  width: 100%;
  height: 125px;
  background-image: url("../../images/u16.png");
  background-size: 100%;
  background-repeat:no-repeat;
}
#loginAndRegistered{
  float: right;
  padding-top:40px;
  padding-right: 300px;
}
#login{
  font-weight:bold;
  font-size: 18px;
  padding-right: 10px;
}
#registered{
  font-weight:bold;
  font-size: 18px;
  padding-left: 10px;
}
#login-registered{
  float: right;
}
</style>
