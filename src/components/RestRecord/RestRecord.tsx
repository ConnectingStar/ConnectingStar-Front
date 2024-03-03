import { useState } from "react";

import { info, lines } from "@/constants/restRecordConstants";

import { restRecordStyle } from "@/components/RestRecord/RestRecord.style";

function RestRecord() {
	const [value, setValue] = useState("");

	return (
		<div css={restRecordStyle.container}>
			<main css={restRecordStyle.innerWrapper}>
				<div css={restRecordStyle.innerTitle}>쉬는 날이셨군요?</div>
				<section>
					<div css={restRecordStyle.linesWrapper}>
						{lines.split("mainBlueBold").map((line, idx) => {
							return <span className={`${idx % 2 !== 0 && "mainBlueBold"}`}>{line}</span>;
						})}
						<span>{`${info.identity} ${info.nickname}님을 응원할게요 😊`}</span>
					</div>
				</section>
				<section css={restRecordStyle.writerWrapper}>
					<span css={restRecordStyle.writerTitle}>별자취 남기기</span>
					<textarea
						css={restRecordStyle.writerTextarea}
						maxLength={1000}
						placeholder="오늘 어떤 일로 쉬었는지 혹은 다짐 등을 자유롭게 적어보세요!"
						onChange={(e) => {
							setValue(e.target.value);
						}}
						value={value}
					/>
					{/* 입력버튼은 어떻게 할 것인가? */}
					<div css={restRecordStyle.typeLength}>
						<span>{`${value.length}/1,000자`}</span>
					</div>
				</section>
			</main>
		</div>
	);
}

export default RestRecord;
