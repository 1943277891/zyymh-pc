<template>
    <div id="navMenu-parent">
        <div class="navMenu-father">
            <ul v-for="(menu,index) in allMenus" :class="{'SelectedMenu':currentIndex==index}" @click="change(index)" :key="menu.id">
                <li class="navMenu-li">
                    <router-link :to="menu.menu_url">{{menu.menu_name}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'MavMenu',
    data(){
        return{
          currentIndex:0,
            allMenus: [{
                menu_name: "首页",
                menu_url: "/",
                id: "1",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "新闻中心",
                menu_url: "/news/list",
                path:"/news/list",
                id: "2",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "通知公告",
                menu_url: "/notice/list",
                id: "3",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "政策法规",
                menu_url: "/policies/policiesMain",
                id: "4",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "办事指南",
                menu_url: "/office/list",
                id: "5",
                level: "1",
                pid: "1",
                childTrees: []
              },{
                menu_name: "医疗服务",
                menu_url: "/medical/famousHospital",
                id: "6",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "产业发展",
                menu_url: "/resource/count",
                id: "7",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "中医服务",
                menu_url: "/cultural/resources",
                id: "8",
                level: "1",
                pid: "1",
                childTrees: []
              }, {
                menu_name: "养生保健",
                menu_url: "/knowledge/selectAll",
                id: "9",
                level: "1",
                pid: "1",
                childTrees: []
              },
              ],
        }
    },
  methods:{
    change(index){
      this.currentIndex=index;
    }
  },
  mounted() {
      this.change(0);
  }

}
</script>
<style>
#navMenu-parent{
    background-color: #775637;
    width:100%;
    height: 60px;
    display: flex;
    justify-content: center;
}
.navMenu-father{
    display: flex;
    justify-content: center;
    height:60px;
    width: 60%;
}
.navMenu-li{
    list-style: none;
    height:60px;
    text-align: center;
    line-height: 60px;
    color: white;
}
.navMenu-father>ul{
    height:60px;
    width: 12%;
}
.navMenu-li>a{
    color:white;
    height: 100%;
    text-decoration: none;
    display: block;
}
.navMenu-li:hover{
  background-color: #CC0001;
}
.SelectedMenu{
  background-color: #CC0001;
  height:60px;
  width: 12%;
}
</style>
