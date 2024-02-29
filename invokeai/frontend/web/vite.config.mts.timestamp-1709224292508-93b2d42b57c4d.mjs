// vite.config.mts
import { defineConfig } from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/vite@5.0.12_@types+node@20.11.5/node_modules/vite/dist/node/index.js";

// config/common.mts
import react from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/@vitejs+plugin-react-swc@3.5.0_vite@5.0.12/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { visualizer } from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import eslint from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.56.0_vite@5.0.12/node_modules/vite-plugin-eslint/dist/index.mjs";
import tsconfigPaths from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/vite-tsconfig-paths@4.3.1_typescript@5.3.3_vite@5.0.12/node_modules/vite-tsconfig-paths/dist/index.mjs";
var commonPlugins = [
  react(),
  eslint(),
  tsconfigPaths(),
  visualizer()
];

// config/vite.app.config.mts
var appConfig = {
  base: "./",
  plugins: [...commonPlugins],
  build: {
    chunkSizeWarningLimit: 1500
  },
  server: {
    // Proxy HTTP requests to the flask server
    proxy: {
      // Proxy socket.io to the nodes socketio server
      "/ws/socket.io": {
        target: "ws://127.0.0.1:9090",
        ws: true
      },
      // Proxy openapi schema definiton
      "/openapi.json": {
        target: "http://127.0.0.1:9090/openapi.json",
        rewrite: (path2) => path2.replace(/^\/openapi.json/, ""),
        changeOrigin: true
      },
      // proxy nodes api
      "/api/v1": {
        target: "http://127.0.0.1:9090/api/v1",
        rewrite: (path2) => path2.replace(/^\/api\/v1/, ""),
        changeOrigin: true
      }
    }
  }
};

// config/vite.package.config.mts
import path from "path";
import cssInjectedByJsPlugin from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/vite-plugin-css-injected-by-js@3.3.1_vite@5.0.12/node_modules/vite-plugin-css-injected-by-js/dist/esm/index.js";
import dts from "file:///C:/Users/JM6530/dev/HX/invokeai-source/invokeai/frontend/web/node_modules/.pnpm/vite-plugin-dts@3.7.1_@types+node@20.11.5_typescript@5.3.3_vite@5.0.12/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\JM6530\\dev\\HX\\invokeai-source\\invokeai\\frontend\\web\\config";
var packageConfig = {
  base: "./",
  plugins: [
    ...commonPlugins,
    dts({
      insertTypesEntry: true
    }),
    cssInjectedByJsPlugin()
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "../src/index.ts"),
      name: "InvokeAIUI",
      fileName: (format) => `invoke-ai-ui.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom", "@emotion/react", "@chakra-ui/react", "@invoke-ai/ui-library"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/react": "EmotionReact",
          "@invoke-ai/ui-library": "UiLibrary"
        }
      }
    }
  },
  resolve: {
    alias: {
      app: path.resolve(__vite_injected_original_dirname, "../src/app"),
      assets: path.resolve(__vite_injected_original_dirname, "../src/assets"),
      common: path.resolve(__vite_injected_original_dirname, "../src/common"),
      features: path.resolve(__vite_injected_original_dirname, "../src/features"),
      services: path.resolve(__vite_injected_original_dirname, "../src/services"),
      theme: path.resolve(__vite_injected_original_dirname, "../src/theme")
    }
  }
};

// vite.config.mts
var vite_config_default = defineConfig(({ mode }) => {
  if (mode === "package") {
    return packageConfig;
  }
  return appConfig;
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgImNvbmZpZy9jb21tb24ubXRzIiwgImNvbmZpZy92aXRlLmFwcC5jb25maWcubXRzIiwgImNvbmZpZy92aXRlLnBhY2thZ2UuY29uZmlnLm10cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEpNNjUzMFxcXFxkZXZcXFxcSFhcXFxcaW52b2tlYWktc291cmNlXFxcXGludm9rZWFpXFxcXGZyb250ZW5kXFxcXHdlYlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSk02NTMwXFxcXGRldlxcXFxIWFxcXFxpbnZva2VhaS1zb3VyY2VcXFxcaW52b2tlYWlcXFxcZnJvbnRlbmRcXFxcd2ViXFxcXHZpdGUuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSk02NTMwL2Rldi9IWC9pbnZva2VhaS1zb3VyY2UvaW52b2tlYWkvZnJvbnRlbmQvd2ViL3ZpdGUuY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5cclxuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdml0ZS5hcHAuY29uZmlnLm1qcyc7XHJcbmltcG9ydCB7IHBhY2thZ2VDb25maWcgfSBmcm9tICcuL2NvbmZpZy92aXRlLnBhY2thZ2UuY29uZmlnLm1qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgaWYgKG1vZGUgPT09ICdwYWNrYWdlJykge1xyXG4gICAgcmV0dXJuIHBhY2thZ2VDb25maWc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXBwQ29uZmlnO1xyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKTTY1MzBcXFxcZGV2XFxcXEhYXFxcXGludm9rZWFpLXNvdXJjZVxcXFxpbnZva2VhaVxcXFxmcm9udGVuZFxcXFx3ZWJcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKTTY1MzBcXFxcZGV2XFxcXEhYXFxcXGludm9rZWFpLXNvdXJjZVxcXFxpbnZva2VhaVxcXFxmcm9udGVuZFxcXFx3ZWJcXFxcY29uZmlnXFxcXGNvbW1vbi5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0pNNjUzMC9kZXYvSFgvaW52b2tlYWktc291cmNlL2ludm9rZWFpL2Zyb250ZW5kL3dlYi9jb25maWcvY29tbW9uLm10c1wiO2ltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcclxuaW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24sIFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb21tb25QbHVnaW5zOiBVc2VyQ29uZmlnWydwbHVnaW5zJ10gPSBbXHJcbiAgcmVhY3QoKSxcclxuICBlc2xpbnQoKSxcclxuICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgdmlzdWFsaXplcigpIGFzIHVua25vd24gYXMgUGx1Z2luT3B0aW9uLFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEpNNjUzMFxcXFxkZXZcXFxcSFhcXFxcaW52b2tlYWktc291cmNlXFxcXGludm9rZWFpXFxcXGZyb250ZW5kXFxcXHdlYlxcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEpNNjUzMFxcXFxkZXZcXFxcSFhcXFxcaW52b2tlYWktc291cmNlXFxcXGludm9rZWFpXFxcXGZyb250ZW5kXFxcXHdlYlxcXFxjb25maWdcXFxcdml0ZS5hcHAuY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSk02NTMwL2Rldi9IWC9pbnZva2VhaS1zb3VyY2UvaW52b2tlYWkvZnJvbnRlbmQvd2ViL2NvbmZpZy92aXRlLmFwcC5jb25maWcubXRzXCI7aW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcblxyXG5pbXBvcnQgeyBjb21tb25QbHVnaW5zIH0gZnJvbSAnLi9jb21tb24ubWpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBhcHBDb25maWc6IFVzZXJDb25maWcgPSB7XHJcbiAgYmFzZTogJy4vJyxcclxuICBwbHVnaW5zOiBbLi4uY29tbW9uUGx1Z2luc10sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgLy8gUHJveHkgSFRUUCByZXF1ZXN0cyB0byB0aGUgZmxhc2sgc2VydmVyXHJcbiAgICBwcm94eToge1xyXG4gICAgICAvLyBQcm94eSBzb2NrZXQuaW8gdG8gdGhlIG5vZGVzIHNvY2tldGlvIHNlcnZlclxyXG4gICAgICAnL3dzL3NvY2tldC5pbyc6IHtcclxuICAgICAgICB0YXJnZXQ6ICd3czovLzEyNy4wLjAuMTo5MDkwJyxcclxuICAgICAgICB3czogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgLy8gUHJveHkgb3BlbmFwaSBzY2hlbWEgZGVmaW5pdG9uXHJcbiAgICAgICcvb3BlbmFwaS5qc29uJzoge1xyXG4gICAgICAgIHRhcmdldDogJ2h0dHA6Ly8xMjcuMC4wLjE6OTA5MC9vcGVuYXBpLmpzb24nLFxyXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9vcGVuYXBpLmpzb24vLCAnJyksXHJcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAvLyBwcm94eSBub2RlcyBhcGlcclxuICAgICAgJy9hcGkvdjEnOiB7XHJcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovLzEyNy4wLjAuMTo5MDkwL2FwaS92MScsXHJcbiAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaVxcL3YxLywgJycpLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKTTY1MzBcXFxcZGV2XFxcXEhYXFxcXGludm9rZWFpLXNvdXJjZVxcXFxpbnZva2VhaVxcXFxmcm9udGVuZFxcXFx3ZWJcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxKTTY1MzBcXFxcZGV2XFxcXEhYXFxcXGludm9rZWFpLXNvdXJjZVxcXFxpbnZva2VhaVxcXFxmcm9udGVuZFxcXFx3ZWJcXFxcY29uZmlnXFxcXHZpdGUucGFja2FnZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9KTTY1MzAvZGV2L0hYL2ludm9rZWFpLXNvdXJjZS9pbnZva2VhaS9mcm9udGVuZC93ZWIvY29uZmlnL3ZpdGUucGFja2FnZS5jb25maWcubXRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB0eXBlIHsgVXNlckNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWNzcy1pbmplY3RlZC1ieS1qcyc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmltcG9ydCB7IGNvbW1vblBsdWdpbnMgfSBmcm9tICcuL2NvbW1vbi5tanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhY2thZ2VDb25maWc6IFVzZXJDb25maWcgPSB7XHJcbiAgYmFzZTogJy4vJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICAuLi5jb21tb25QbHVnaW5zLFxyXG4gICAgZHRzKHtcclxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgY3NzSW5qZWN0ZWRCeUpzUGx1Z2luKCksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdJbnZva2VBSVVJJyxcclxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbnZva2UtYWktdWkuJHtmb3JtYXR9LmpzYCxcclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdAZW1vdGlvbi9yZWFjdCcsICdAY2hha3JhLXVpL3JlYWN0JywgJ0BpbnZva2UtYWkvdWktbGlicmFyeSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcclxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxyXG4gICAgICAgICAgJ0BlbW90aW9uL3JlYWN0JzogJ0Vtb3Rpb25SZWFjdCcsXHJcbiAgICAgICAgICAnQGludm9rZS1haS91aS1saWJyYXJ5JzogJ1VpTGlicmFyeScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBhcHA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvYXBwJyksXHJcbiAgICAgIGFzc2V0czogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9hc3NldHMnKSxcclxuICAgICAgY29tbW9uOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2NvbW1vbicpLFxyXG4gICAgICBmZWF0dXJlczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9mZWF0dXJlcycpLFxyXG4gICAgICBzZXJ2aWNlczogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9zZXJ2aWNlcycpLFxyXG4gICAgICB0aGVtZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy90aGVtZScpLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBYLFNBQVMsb0JBQW9COzs7QUNBaEIsT0FBTyxXQUFXO0FBQ3paLFNBQVMsa0JBQWtCO0FBRTNCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjtBQUVuQixJQUFNLGdCQUF1QztBQUFBLEVBQ2xELE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLGNBQWM7QUFBQSxFQUNkLFdBQVc7QUFDYjs7O0FDUE8sSUFBTSxZQUF3QjtBQUFBLEVBQ25DLE1BQU07QUFBQSxFQUNOLFNBQVMsQ0FBQyxHQUFHLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCx1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUE7QUFBQSxNQUVMLGlCQUFpQjtBQUFBLFFBQ2YsUUFBUTtBQUFBLFFBQ1IsSUFBSTtBQUFBLE1BQ047QUFBQTtBQUFBLE1BRUEsaUJBQWlCO0FBQUEsUUFDZixRQUFRO0FBQUEsUUFDUixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxtQkFBbUIsRUFBRTtBQUFBLFFBQ3JELGNBQWM7QUFBQSxNQUNoQjtBQUFBO0FBQUEsTUFFQSxXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxjQUFjLEVBQUU7QUFBQSxRQUNoRCxjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QUNoQ2lhLE9BQU8sVUFBVTtBQUVsYixPQUFPLDJCQUEyQjtBQUNsQyxPQUFPLFNBQVM7QUFIaEIsSUFBTSxtQ0FBbUM7QUFPbEMsSUFBTSxnQkFBNEI7QUFBQSxFQUN2QyxNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxHQUFHO0FBQUEsSUFDSCxJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxzQkFBc0I7QUFBQSxFQUN4QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDaEQsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsZ0JBQWdCLE1BQU07QUFBQSxJQUM5QztBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLFNBQVMsYUFBYSxrQkFBa0Isb0JBQW9CLHVCQUF1QjtBQUFBLE1BQzlGLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxVQUNiLGtCQUFrQjtBQUFBLFVBQ2xCLHlCQUF5QjtBQUFBLFFBQzNCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDekMsUUFBUSxLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQy9DLFFBQVEsS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUMvQyxVQUFVLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNuRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNuRCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDL0M7QUFBQSxFQUNGO0FBQ0Y7OztBSHhDQSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxNQUFJLFNBQVMsV0FBVztBQUN0QixXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFDVCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=
