import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Classify from "../views/Classify";
import Hot from "../views/Hot";
import Introduction from "../views/Introduction";
import Login from "../views/Login";
import My from "../views/My";
import Register from "../views/Register";
import Search from "../views/Search";
import User from "../views/User";
import Cart from "../views/User/Cart";
import MyCoupon from "../views/User/MyCoupon";
import Order from "../views/User/Order";
import PayCard from "../views/User/PayCard";
import Promoter from "../views/User/Promoter";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/classify",
      component: Classify
    },
    {
      path: "/hot",
      component: Hot
    },
    {
      path: "/introduction",
      component: Introduction
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/my",
      component: My
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/user",
      component: User,
      children: [
        {
          path: "cart",
          component: Cart
        },
        {
          path: "myCoupon",
          component: MyCoupon
        },
        {
          path: "order",
          component: Order
        },
        {
          path: "payCard",
          component: PayCard
        },
        {
          path: "promoter",
          component: Promoter
        }
      ]
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});

export default router;
