// import ReactDOM from "react-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "@/assets/fonts/font.less";
import "antd/dist/antd.less";
import "@/styles/common.less";
// import "virtual:svg-icons-register";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import { store, persistor } from "@/redux";
import App from "@/App";


// import * as Urls from '@/api/config/url'
// import { Request } from '@/api/request'
// React.Urls = urls;
// React.Request = Request;

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	// <Provider store={store}>
	// 	<PersistGate persistor={persistor}>
			<App />
	// 	</PersistGate>
	// </Provider>
	// </React.StrictMode>
);
