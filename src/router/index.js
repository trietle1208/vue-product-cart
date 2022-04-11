import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "../store"
const routes = [
  {
    path: "/",
    name: "DashboardLayout",
    redirect: '/dashboard',
    meta: {requiresAuth: true},
    component: () => import('@/components/DashboardLayout.vue'),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
          import("@/views/Dashboard.vue"),
      },
      {
        path: "/product/list",
        name: "product.list",
        component: () =>
          import("@/views/products/List.vue"),
      },
      {
        path: "/product/create",
        name: "product.create",
        component: () =>
          import("@/views/products/Form.vue"),
      },
      {
        path: '/product/edit/:id',
        name: 'product.edit',
        component: () => import('@/views/products/Form.vue')
      },
      {
        path: '/product/detail/:id',
        name: 'product.detail',
        component: () => import('@/views/products/Detail.vue')
      },
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/carts/IndexCart.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/carts/Cart.vue')
      },
    ]
  },
  {
    path: "/auth",
    name: "Auth",
    redirect: '/login',
    meta: {isGuest: true},
    component: () => import('@/components/AuthLayout.vue'),
    children: [
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !store.state.user.token) {
      next({name: 'Login'})
  }else if(store.state.user.token && (to.meta.isGuest)){
      next({name: 'Dashboard'});
  }else {
      next();
  }
})
export default router;
