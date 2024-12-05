import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react-swc'
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-router-v7-demo/",
  plugins: [reactRouter()],
});
