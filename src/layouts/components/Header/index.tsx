import { Layout } from "antd";
import AvatarIcon from "./components/AvatarIcon";
import CollapseIcon from "./components/CollapseIcon";
import BreadcrumbNav from "./components/BreadcrumbNav";
// import AssemblySize from "./components/AssemblySize";
import Language from "./components/Language";
import Theme from "./components/Theme";
import Fullscreen from "./components/Fullscreen";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<div style={{border:'1px solid green',height: '80px',}}>
			<Header>
				<div className="header-lf">
					<CollapseIcon />
					<BreadcrumbNav />
				</div>
				<div className="header-ri">
					{/* <AssemblySize /> */}
					{/* <Language /> */}
					{/* <Theme /> */}
					<Fullscreen />
					<span className="username">Hooks</span>
					<AvatarIcon />
				</div>
			</Header>
		</div>
	);
};

export default LayoutHeader;
