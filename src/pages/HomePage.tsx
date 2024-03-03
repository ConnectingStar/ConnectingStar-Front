import { ReactNode } from "react";

import Gnb from "@/components/common/Gnb/Gnb";
import Advices from "@/components/homepages/Advices";
import ComprehensiveHabits from "@/components/homepages/ComprehensiveHabits";
import HelpAnnouncement from "@/components/homepages/HelpAnnouncement";
import Profile from "@/components/homepages/Profile";

import { HomePageStyle } from "./HomePage.style";

export default function HomePage() {
	return (
		<>
			<HomePage.Container>
				<HomePage.InnerWrapper>
					<Profile />
					<HelpAnnouncement />
					<Advices />
					<ComprehensiveHabits />
				</HomePage.InnerWrapper>
				<Gnb />
			</HomePage.Container>
		</>
	);
}

HomePage.Container = function ({ children }: { children: ReactNode }): ReactNode {
	return <div css={HomePageStyle.container}>{children}</div>;
};

HomePage.InnerWrapper = function ({ children }: { children: ReactNode }): ReactNode {
	return <main css={HomePageStyle.innerWrapper}>{children}</main>;
};
