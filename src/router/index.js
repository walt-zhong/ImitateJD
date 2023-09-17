import { createRouter, createWebHashHistory } from 'vue-router'
// import HomePage from '../views/home/HomePage.vue'
// import ShopPage from '../views/shop/ShopPage.vue'
// import RegisterPage from '../views/register/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import(/* webpackChunkName: "home" */ '../views/home/HomePage.vue')
  }, {
    path: '/shop',
    name: 'ShopPage',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/ShopPage.vue')
  }
, {
    path: '/login',
    name: 'LoginPage',
    // component: LoginPage,
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginPage.vue'),
    // 如果已经登录了，再访问login，不允许访问
    beforeEnter(to,from,next){
      console.log(to,from);
      // const isLogin = localStorage.isLogin;
      // if(isLogin){
      //   next({name: 'HomePage'})
      // }else{
      //   next();
      // }

      const {isLogin} = localStorage;
      isLogin ? next({name: 'HomePage'}) : next();
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/RegisterPage.vue'),
    // 如果已经登录了，再访问login，不允许访问
    beforeEnter(to,from,next){
      console.log(to,from);
      // const isLogin = localStorage.isLogin;
      // if(isLogin){
      //   next({name: 'HomePage'})
      // }else{
      //   next();
      // }

      const {isLogin} = localStorage;
      isLogin ? next({name: 'HomePage'}) : next();
    }
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 每次路由跳转都会执行这个方法
router.beforeEach((to,from,next)=>{
  // const isLogin = localStorage.isLogin;
  // console.log(to,from);
  // if(isLogin || to.name === 'LoginPage'){
  //   next();
  // }else{
  //   next({name: 'LoginPage'})
  // }

  const {isLogin} = localStorage;

  const {name} = to;
  const isLoginOrRegister = (name === "LoginPage" || name === "RegisterPage");
  (isLogin || isLoginOrRegister) ? next() : next({name: 'LoginPage'});
})

export default router
