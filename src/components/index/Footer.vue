<template>
  <div id="footer">
    <div id="footer-first">
      <div v-for="link in LinkList" class="linkList" :key="link.link_id">
        <a :href="link.link_url">{{link.link_name}}</a>
      </div>
    </div>
    <div id="footer-second">
      <div id="organizer">
        主办单位：河北省中医药管理局
      </div>
      <div id="contactWay">
        联系方式：河北省石家庄合作路42号
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return{
      LinkList:[
        {
          link_id: '001',
          link_name: "国家中医药管理局",
          link_url: "http://www.satcm.gov.cn/",
        },
        {
          link_id: '002',
          link_name: "河北省卫生健康委员会",
          link_url: "http://wsjkw.hebei.gov.cn/",
        },
        {
          link_id: '003',
          link_name: "河北省农业农村厅",
          link_url: "http://nync.hebei.gov.cn/",
        },
        {
          link_id: '004',
          link_name: "河北省工业和信息化厅",
          link_url: "http://gxt.hebei.gov.cn/hbgyhxxht/index/index.html",
        },
        {
          link_id: '005',
          link_name: "河北省药品监督管理局",
          link_url: "http://yjj.hebei.gov.cn/",
        },
      ]
    }
  }
}
</script>

<style scoped>
#footer-first{
  background-color: #775637;
  width:100%;
  height: 50px;
  display: flex;
  justify-content: center;
}
#footer-second{
  background-color: #FEF7ED;
  width:100%;
  height: 70px;
  display: flex;
  justify-content: center;
}
.linkList{
  width: 150px;
  height: 34px;
  margin-top: 10px;
  background-image: url("../../images/u22.png");
  background-size: 150px 34px;
  background-repeat:no-repeat;
  margin-left: 5px;
}
.linkList>a{
  font-size: 13px;
  color: #FFFFFF;
  text-decoration: none;
  position: relative;
  top: 6px;
}
#organizer{
  font-size: 13px;
  padding-right: 50px;
  margin-top: 30px;
}
#contactWay{
  font-size: 13px;
  padding-left: 50px;
  margin-top: 30px;
}
</style>
