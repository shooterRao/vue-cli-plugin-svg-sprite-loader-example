import Vue from 'vue'
import Router from 'vue-router';

import SvgViewer from "./components/SvgViewer";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "svg",
      component: SvgViewer
    }
  ]
})