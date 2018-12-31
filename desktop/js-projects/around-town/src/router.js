import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Register from "./views/Register.vue";
import LogIn from "./views/LogIn.vue";
import CreateEvent from "./views/CreateEvent.vue";
import EventShow from "./views/EventShow.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/log-in",
      name: "log-in",
      component: LogIn
    },
    {
      path: "/event/create",
      name: "create-event",
      component: CreateEvent
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    }
  ]
});
