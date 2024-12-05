export default [
  {
    path: "/",
    file: "./views/Home.jsx",
    children: [
      {
        index: true,
        file: "./components/Banner.jsx",
      },
      {
        path: "/hero",
        file: "./components/Hero.jsx",
      },
    ],
  },
  {
    path: "/about",
    file: "./views/About.jsx",
  },
];
