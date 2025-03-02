import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Vitest configuration
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "test/setup.ts",
  },
});
