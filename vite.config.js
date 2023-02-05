import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default ({ mode }) => {
//   process.env = { ...process.env, ...loadEnv(mode, process.cdw()) };
//   return defineConfig({
//     plugins: [react()],
//     root: "src",
//     GOOGLEMAPS_API_KEY
//   });
// };

export default defineConfig({
  plugins: [react()],
  root: "src",
});
