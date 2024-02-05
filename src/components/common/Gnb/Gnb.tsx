import { useNavigate, useLocation } from "react-router-dom";

import { layoutStyle } from "@/components/common/Gnb/Gnb.style";
import { gnbData } from "@/constants/gnbConstants";

const Gnb = () => {
	const navigate = useNavigate();
	const locate = useLocation();

	return (
		<div css={layoutStyle}>
			<ul>
				{gnbData.map((data) => (
					<li key={data.id} onClick={() => navigate(data.link)}>
						{data.link === locate.pathname ? data.icon : data.disabledIcon}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Gnb;
