export default [
  {
    path: "/",
    name: "Home",
    component: require("./views/Home.vue").default,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/About.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("./views/SignIn.vue"),
  },
];
