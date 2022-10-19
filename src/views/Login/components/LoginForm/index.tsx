import md5 from "js-md5";
import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { ReqLoginForm,ResLogin } from "./interface";
import { HOME_URL } from "@/configs/config";

import * as Urls from '@/api/config/url'
import { Request } from '@/api/request'
import { setToken } from "@/utils/cookie";

// import { loginApi } from "@/api/modules/login";
// import { connect } from "react-redux";
// import { setToken } from "@/redux/modules/global/action";
// import { setTabsList } from "@/redux/modules/tabs/action";

const LoginForm = (props: any) => {
	const navigate = useNavigate();
	// const { setToken, setTabsList } = props;
	const [form] = Form.useForm();
	const [loading, setLoading] = useState<boolean>(false);

	// 登录
	const onFinish = (loginForm: ReqLoginForm) => {
		return new Promise((resolve,reject) => {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			Request({
				url: Urls.Login,
				method: "post",
				data: loginForm
			})
			.then((res:any) => {
				let { userInfo } = res;
				setToken("token",userInfo.token);
				// setTabsList([]);
				message.success("登录成功！");
				navigate(HOME_URL);
			})
			.finally(() => 
			  setLoading(false)
			)
		})
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<Form
			form={ form }
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={ onFinish }
			onFinishFailed={ onFinishFailed }
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

// const mapDispatchToProps = { setToken, setTabsList };
// export default connect(null, mapDispatchToProps)(LoginForm);
export default LoginForm;

