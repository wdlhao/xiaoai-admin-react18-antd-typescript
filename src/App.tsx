import { useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import Router from "@/routers/index";


// import { getBrowserLang } from "@/utils/util";
// import { ConfigProvider } from "antd";
// import { connect } from "react-redux";
// import { setLanguage } from "@/redux/modules/global/action";
// import AuthRouter from "@/routers/utils/authRouter";
// import useTheme from "@/hooks/useTheme";
// import zhCN from "antd/lib/locale/zh_CN";
// import enUS from "antd/lib/locale/en_US";
// import i18n from "i18next";
// import "moment/dist/locale/zh-cn";

const App = (props: any) => {
	return (
		<HashRouter>
			{/* <AuthRouter> */}
				<Router />
			{/* </AuthRouter> */}
		</HashRouter>
	);
};

// const mapStateToProps = (state: any) => state.global;
// const mapDispatchToProps = { setLanguage };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
