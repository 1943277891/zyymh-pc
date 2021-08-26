import Vue from 'vue'
import vueRouter from 'vue-router'
import Index from  '../components/Index'
import MainContent from '../components/index/MainContent'
import Shouye from '../pages/Shouye'
import NewList from '../pages/NewList'
import NoticeList from '../pages/NoticeList'
import PoliciesMain from '../pages/PoliciesMain'
import OfficeList from "../pages/OfficeList";
import FamousHospital from "../pages/FamousHospital";
import ResourceCount from "../pages/ResourceCount";
import CulturalResources from "../pages/CulturalResources";
import KnowledgeSelectAll from "../pages/KnowledgeSelectAll";

Vue.use(vueRouter)

const Router = new vueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/mainContent',
          component: MainContent,
          children:[
            {
              path: '/news/list',
              component: NewList
            },
            {
              path: '/notice/list',
              component: NoticeList
            },
            {
              path: '/policies/policiesMain',
              component: PoliciesMain
            },
            {
              path: '/office/list',
              component: OfficeList
            },
            {
              path: '/medical/famousHospital',
              component: FamousHospital
            },
            {
              path: '/resource/count',
              component: ResourceCount
            },
            {
              path: '/cultural/resources',
              component: CulturalResources
            },
            {
              path: '/knowledge/selectAll',
              component: KnowledgeSelectAll
            },
          ]
        }
      ]
    }
  ]
})

export default Router