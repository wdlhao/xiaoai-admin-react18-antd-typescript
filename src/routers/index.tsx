import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface";
import Login from "@/views/Login/index";
import Layouts from "@/layouts/index";
import Dashboard from "@/views/Dashboard/index";
import User from "@/views/System/User/index";
import Role from "@/views/System/Role/index";
import Menu from "@/views/System/Menu/index";



import { HomeOutlined,
	LoadingOutlined,
	SettingFilled,
	SmileOutlined,
	SyncOutlined, } from "@ant-design/icons";
// * 导入所有router
// const metaRouters = import.meta.globEager("./modules/*.tsx");
// console.log('metaRouters---',metaRouters);

// // * 处理路由
// export const routerArray: RouteObject[] = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });

export const menuRouter: RouteObject[] = [
	{
		path: "/home",
		element: <Layouts />,
		children: [
            {
                path: 'index',
				element: <Dashboard />,
                meta: {
                    title: '首页',
                    // icon: <HomeOutlined />,
                }
			}
		],
	},
	{
		path: "/system",
		element: <Layouts />,
		meta: {
			title: "系统管理",
		},
		children: [
            {
				path: "user",
				element:<User />,
				meta: {
					title: "用户管理",
				}
			},
            {
				path: "role",
				element:<Role />,
				meta: {
					title: "角色管理",
				}
			},
            {
				path: "menu",
				element:<Menu />,
				meta: {
					title: "菜单管理",
				}
			},
		],
	},
]

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />,
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
	...menuRouter,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];



const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
