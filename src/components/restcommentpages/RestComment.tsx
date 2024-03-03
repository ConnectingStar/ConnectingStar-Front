import { useState } from "react";

import { restCommentStyle } from "@/components/restcommentpages/RestComment.style";

function RestComment() {
	const [value, setValue] = useState("");
	const info = {
		identity: "정체성",
		nickname: "닉네임",
	};
	const lines = [
		"괜찮습니다, 쉬는 날도 있는 거죠 :)",
		"내일은 실천하고 별을 받아가시면 좋겠어요! 이틀 이상 쉬면 시스템화 하기 어려워지거든요.",
		"일정이 있다면 약속 시간과 다른 때 하셔도 좋고 시간이 촉박하다면 목표량 보다 낮춰도 좋아요",
		"아예 하지 않는 것보다 아주 조금이라도 하는 것이 정체성을 뚜렷하게 만드는 열쇠랍니다 :)",
	];
	return (
		<div css={restCommentStyle.container}>
			<main css={restCommentStyle.innerWrapper}>
				<div css={restCommentStyle.innerTitle}>쉬는 날이셨군요?</div>
				<section>
					<div css={restCommentStyle.lineWrapper}>
						{lines.map((line) => {
							return <span>{line}</span>;
						})}
						<span
							css={restCommentStyle.nickname}
						>{`${info.identity} ${info.nickname}님을 응원할게요 😊`}</span>
					</div>
				</section>
				<section css={restCommentStyle.writerWrapper}>
					<span css={restCommentStyle.writerTitle}>별자취 남기기</span>
					<textarea
						css={restCommentStyle.writerTextarea}
						placeholder="오늘 어떤 일로 쉬었는지 혹은 다짐 등을 자유롭게 적어보세요!"
						onChange={(e) => {
							setValue(e.target.value);
						}}
						value={value}
					/>
				</section>
			</main>
		</div>
	);
}

export default RestComment;
