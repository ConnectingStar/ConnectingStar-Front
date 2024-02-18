import arrowDown from "@/assets/icon/arrow-down.svg";
import Header from "@/components/common/Header";

import { createAccountStyle } from "@/pages/CreateAccountPage.style";

const accountInputData = [
	{
		title: "닉네임",
		inputText: "닉네임을 입력해 주세요",
		isPopUpModal: false,
	},
	{
		title: "성별",
		inputText: "성별을 선택해 주세요",
		isPopUpModal: true,
	},
	{
		title: "나이대",
		inputText: "나이대를 선택해 주세요",
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
				{accountInputData.map((item, index) => {
					return (
						<ul css={createAccountStyle.input} key={index}>
							<li>
								<p>{item.title}</p>
								<div>
									<input placeholder={item.inputText}></input>
									{item.isPopUpModal ? (
										<button>
											<img src={arrowDown} alt="arrow-down" />
										</button>
									) : null}
								</div>
							</li>
						</ul>
					);
				})}
			</div>
		</>
	);
}
