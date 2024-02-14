import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '@/components/ListView'
import EventView from '@/components/EventView'
import ReviewViewpage from '@/views/ReviewViewpage'
import ReviewEnroll from '@/views/ReviewEnroll'
import ReviewSuccess from '@/views/ReviewSuccess'
import imageInsert from '@/views/imageInsert'
import MemberSignin from '@/views/MemberSignin'
import CoffeeMenu from '@/views/CoffeeMenu'
import ProductCreate from '@/views/ProductCreate'
import SalesList from '@/views/SalesList'
import menuInsert from '@/views/menuInsert'
import productUpdate from '@/views/productUpdate'
import mainView from '@/views/mainView'
import HomeView2 from '@/views/HomeView2'
import StoreSearch from '@/views/StoreSearch'
import MemberLogin from '@/views/MemberLogin'
import PetMenu from '@/views/PetMenu'
import PeopleMenu from '@/views/PeopleMenu'
import EDetailView from '@/views/EDetailView'
import EimageInsert from '@/views/EimageInsert'
import EListView from '@/views/EListView'
import EmanageMent from '@/views/EmanageMent'
import EorderCheck from '@/views/EorderCheck'
import EproductCreate from '@/views/EproductCreate'
import EproductPrice from '@/views/EproductPrice'
import EproductUpdate from '@/views/EproductUpdate'
import ESales from '@/views/ESales'
import TermsOfUse from '@/views/TermsOfUse'
import SignUpPrivacy from '@/views/SignUpPrivacy'
import myInfo from '@/views/myInfo'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ListView',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/EventView',
    name: 'EventView',
    component: EventView
  },
  {
    path: '/ReviewViewpage',
    name: 'ReviewViewpage',
    component: ReviewViewpage
  },
  {
    path: '/ReviewEnroll',
    name: 'ReviewEnroll',
    component: ReviewEnroll
  },
  {
    path: '/ReviewSuccess',
    name: 'ReviewSuccess',
    component: ReviewSuccess
  },
  {
    path: '/imageInsert',
    name: 'imageInsert',
    component: imageInsert
  },
  {
    path: '/MemberSignin',
    name: 'MemberSignin',
    component: MemberSignin
  },
  {
    path: '/CoffeeMenu',
    name: 'CoffeeMenu',
    component: CoffeeMenu
  },
  {
    path: '/ProductCreate',
    name: 'ProductCreate',
    component: ProductCreate
  },
  {
    path: '/SalesList',
    name: 'SalesList',
    component: SalesList
  },
  {
    path: '/menuInsert',
    name: 'menuInsert',
    component: menuInsert
  },
  {
    path: '/productUpdate',
    name: 'productUpdate',
    component: productUpdate
  },
  {
    path: '/mainView',
    name: 'mainView',
    component: mainView
  },
  {
    path: '/HomeView2',
    name: 'HomeView2',
    component: HomeView2
  },
  {
    path: '/StoreSearch',
    name: 'StoreSearch',
    component: StoreSearch
  },
  {
    path: '/MemberLogin',
    name: 'MemberLogin',
    component: MemberLogin
  },
  {
    path: '/PetMenu',
    name: 'PetMenu',
    component: PetMenu
  },
  {
    path: '/PeopleMenu',
    name: 'PeopleMenu',
    component: PeopleMenu
  },
  {
    path: '/EDetailView',
    name: 'EDetailView',
    component: EDetailView
  },
  {
    path: '/EimageInsert',
    name: 'EimageInsert',
    component: EimageInsert
  },
  {
    path: '/EListView',
    name: 'EListView',
    component: EListView
  },
  {
    path: '/EmanageMent',
    name: 'EmanageMent',
    component: EmanageMent
  },
  {
    path: '/EorderCheck',
    name: 'EorderCheck',
    component: EorderCheck
  },
  {
    path: '/EproductCreate',
    name: 'EproductCreate',
    component: EproductCreate
  },
  {
    path: '/EproductPrice',
    name: 'EproductPrice',
    component: EproductPrice
  },
  {
    path: '/EproductUpdate',
    name: 'EproductUpdate',
    component: EproductUpdate
  },
  {
    path: '/ESales',
    name: 'ESales',
    component: ESales
  },
  {
    path: '/TermsOfUse',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
  {
    path: '/SignUpPrivacy',
    name: 'SignUpPrivacy',
    component: SignUpPrivacy
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: myInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
