import { defineConfig, loadEnv } from "vite";
// import react from '@vitejs/plugin-react-swc'
import { reactRouter } from "@react-router/dev/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  return {
    base: env.VITE_BASE,
    plugins: [reactRouter()],
  };
});
