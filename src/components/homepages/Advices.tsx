import { ReactNode } from "react";

import { css } from "@emotion/react";

import { AdvicesStyle } from "./Advices.style";

function Advices(): ReactNode {
	return (
		<section
			css={css`
				${AdvicesStyle.container}
			`}
		></section>
	);
}

export default Advices;
