export default [
  {
    file: "./views/App.jsx",
    children: [
      {
        index: true,
        file: "./views/Home.jsx",
      },
      {
        path: "/about",
        file: "./views/About.jsx",
      },
    ],
  },
];
