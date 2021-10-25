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
      {
        path: "/contact",
        name: "contact",
        component: () =>
          import(/* webpackChunkName: "contact" */ "@/views/contact"),
        meta: {
          guest: true,
        },
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/about"),
        meta: {
          guest: true,
        },
      },
      {
        path: "/blog",
        name: "blog",
        component: () => import(/* webpackChunkName: "blog" */ "@/views/blog"),
        meta: {
          guest: true,
        },
      },
    ],
  },
];

export default pageRoutes;
