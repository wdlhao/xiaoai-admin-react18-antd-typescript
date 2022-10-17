import { defineConfig, loadEnv } from 'vite'
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log('mode---',mode);
  const env = loadEnv(mode, process.cwd())
  console.log('env---',env);
  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.ruoyi.vip/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.ruoyi.vip/admin/，则设置 baseUrl 为 /admin/。
    // base: mode === 'production' ? '/' : '/',
    // plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
				"@": resolve(__dirname, "./src") // 设置别名

      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 8090,
      host: true,
      open: true,
      proxy: {
        "/api": {
					target: env.VITE_API_URL, // easymock
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
      }
    },
    plugins: [
			react()
    ],
    css: {
      // postcss: {
      //   plugins: [
      //     {
      //       postcssPlugin: 'internal:charset-removal',
      //       AtRule: {
      //         charset: (atRule) => {
      //           if (atRule.name === 'charset') {
      //             atRule.remove();
      //           }
      //         }
      //       }
      //     }
      //   ]
      // }
    }
  }
})
