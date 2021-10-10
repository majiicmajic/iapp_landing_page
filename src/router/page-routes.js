const pageRoutes = [
  {
    path: "/home",
    alias: "/",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/layout/base-layout"),

    children: [
      {
        path: "",
        name: "Home",
        component: () => import(/* webpackChunkName: "home" */ "@/views/home"),
        meta: {
          guest: true,
        },
      },
      {
        path: "/super-apps",
        name: "superApps",
        component: () =>
          import(/* webpackChunkName: "superApps" */ "@/views/super-apps"),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default pageRoutes;
