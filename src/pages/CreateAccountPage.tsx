import ArrowDown from "@/assets/icon/arrow-down.svg?react";

import Header from "@/components/common/Header/Header";

import { createAccountStyle } from "@/pages/CreateAccountPage.style";

const accountInputData = [
	{
		title: "닉네임",
		content: "닉네임을 입력해 주세요",
		isPopUpModal: false,
	},
	{
		title: "성별",
		content: "성별을 선택해 주세요",
		isPopUpModal: true,
	},
	{
		title: "나이대",
		content: "나이대를 선택해 주세요",
		isPopUpModal: true,
	},
];

export default function CreateAccountPage() {
	return (
		<>
			<Header>
				<Header.PrevButton></Header.PrevButton>
			</Header>
			<div css={createAccountStyle.container}>
				<h1>내 정보 입력을 완료해 주세요</h1>
				<ul css={createAccountStyle.wrap}>
					{accountInputData.map((item) => {
						return (
							<li>
								<h2>{item.title}</h2>
								<div>
									{item.content}
									{item.isPopUpModal && <ArrowDown />}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
