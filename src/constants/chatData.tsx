import { modalType } from "@/constants/modalConstants";

import { josaEulReul } from "@/utils/josa";

import type { HabitRequestType } from "@/types/habit";

export function createChatData(habitRequest: HabitRequestType, nickname?: string) {
	return [
		{
			id: "firstMeet",
			botMessage: [
				`반갑습니다🙂 저는 ${nickname}님의 습관 설계를 도와드릴 타스라고 해요`,
				`무엇을 우리의 첫 약속으로 시작해 볼까요?`,
				`처음엔 매일 해도 무리 없는 쉬운 것부터 시작하는 게 좋아요😊`,
			],
			bottomButton: ["습관 선택"],
			userMessage: `${habitRequest.behavior}`,
			modalType: [modalType.SELECT_BEHAVIOR],
		},
		{
			id: "behavior",
			botMessage: [
				`좋아요, 이번엔 정체성을 정해 보죠`,
				`${habitRequest.behavior}${josaEulReul(habitRequest.behavior)} 통해 ${nickname}님은 어떤 사람이 되고 싶으세요?`,
			],
			bottomButton: ["정체성 선택"],
			userMessage: `${habitRequest.identity}`,
			modalType: [modalType.SELECT_IDENTITY],
		},
		{
			id: "identity",
			botMessage: [
				`좋습니다, 지금 이 순간부터 ${nickname}님은 ${habitRequest.identity} 사람이라고 믿는 거예요💪`,
			],
			bottomButton: ["그런데 정체성은 갑자기 왜?"],
			userMessage: "그런데 정체성은 갑자기 왜?",
		},
		{
			id: "reasonIdentity",
			botMessage: [
				`우리는 놀라울 정도로 스스로가 믿는대로 행동하고 또 그렇게 변화하기 때문이에요`,
				`처음엔 조금 어색하겠지만, 믿음이 쌓여가는 하루가 늘어갈 수록 어느새 믿는 대로 변화한 ${nickname}님의 모습에 놀라게 될 거예요🙂️`,
			],
			bottomButton: ["좋아,  믿어볼게💪"],
			userMessage: "좋아,  믿어볼게💪",
		},
		{
			id: "runTime",
			botMessage: [
				`지금부터 습관 약속을 본격적으로 구체화 시켜볼게요`,
				`먼저, 약속은 시간/장소/행동 세 가지 요소로 구분됩니다`,
				`그리고 아래의 네 규칙을 지킬 수록 강력한 변화를 이끌어 낼 거예요`,
				`1. <span class="bold blue">명확</span>할 것\n2. <span class="bold blue">매력</span>적일 것\n3. <span class="bold blue">쉬울</span> 것\n4. <span class="bold blue">만족</span>스러울 것`,
				`시간부터 정해 볼게요⏰ 매일 지키기 쉽고 다른 일에 방해 받지 않는 시간은 언제인가요?`,
			],
			bottomButton: ["시간 선택"],
			userMessage: `${habitRequest.runTime.noon} ${habitRequest.runTime.hour}:${habitRequest.runTime.minute}`,
			modalType: [modalType.SELECT_TIME("RUNTIME")],
		},
		{
			id: "place",
			botMessage: [
				`이번엔 장소를 정해 볼게요🧭 ${habitRequest.behavior}${josaEulReul(habitRequest.behavior)} 쉽게 할 수 있거나 가는 것만으로 기분이 좋아지는 곳이 있나요?`,
			],
			bottomButton: ["장소 선택"],
			userMessage: `${habitRequest.place}`,
			modalType: [modalType.SELECT_PLACE],
		},

		{
			id: "behaviorUnit",
			botMessage: [
				`다음으로 ${habitRequest.behavior}${josaEulReul(habitRequest.behavior)} 얼마나 할지 정해 보겠습니다🚩 이때, 가능한 쉬운 수준으로 시작해 보세요`,
				`그러다 일주일 내내 실천할 수 있게 될 때쯤, 난이도를 살짝 높이고 주기적으로 수준을 높여가는 거예요😉`,
			],
			bottomButton: ["실천 정도 선택"],
			userMessage: `${habitRequest.behaviorValue} ${habitRequest.behaviorUnit}`,
			modalType: [modalType.SELECT_BEHAVIORUNIT],
		},
		{
			id: "alert",
			botMessage: [
				`좋습니다! 마지막으로 알림 받을 시간을 선택해 주세요☺️`,
				`약속을 기억하고 실천을 기록할 수 있게 하루 두 번, 알림을 보내드립니다`,
			],
			bottomButton: ["이대로 진행", "1차 알림 변경", "2차 알림 변경"],
			userMessage: `
			<div class="alert">
				<div>
					<div>1차 알림(약속 인지)</div>
					<div>약속 시간</div>
					<div>2차 알림(기록 독려)</div>
				</div>
				<div class="bold">
					<div>${habitRequest.firstAlert.noon} ${habitRequest.firstAlert.hour}:${habitRequest.firstAlert.minute}</div>
					<div>${habitRequest.runTime.noon} ${habitRequest.runTime.hour}:${habitRequest.runTime.minute}</div>
					<div>${habitRequest.secondAlert.noon} ${habitRequest.secondAlert.hour}:${habitRequest.secondAlert.minute}</div>
				</div>
			</div>
		`,
			modalType: [null, modalType.SELECT_TIME("FIRSTALERT"), modalType.SELECT_TIME("SECONDALERT")],
		},
		{
			id: "organize",
			botMessage: [
				`이제 거의 다 왔어요! 지금까지 나눈 이야기들을  정리해 보여드릴게요😊 수정할 부분이 있나요?`,
			],
			bottomButton: [
				"이 내용이 맞아",
				"정체성 변경",
				"시간 변경",
				"장소 변경",
				"행동 변경",
				"실천 정도 변경",
				"1차 알림 변경",
				"2차 알림 변경",
			],
			userMessage: `
			<div>
			<div class="allUserData">
				<h2 class="bold">정체성</h2>
				<div>
					<ul>
						<li>정체성</li>
					</ul>
					<ul class="bold">
						<li>${habitRequest.identity}</li>
					</ul>
				</div>
			</div>
			<div class="allUserData">
				<h2 class="bold">습관 내용</h2>
				<div>
					<ul>
						<li>시간</li>
						<li>장소</li>
						<li>행동</li>
						<li>실천 정도</li>
					</ul>
					<ul class="bold">
						<li>${habitRequest.runTime.noon} ${habitRequest.runTime.hour}:${habitRequest.runTime.minute}</li>
						<li>${habitRequest.place}</li>
						<li>${habitRequest.behavior}</li>
						<li>${habitRequest.behaviorValue}${habitRequest.behaviorUnit}</li>
					</ul>
				</div>
			</div>
			<div class="allUserData">
				<h2 class="bold">알림</h2>
				<div>
					<ul>
						<li>1차 알림</li>
						<li>2차 알림</li>
					</ul>
					<ul class="bold">
						<li>${habitRequest.firstAlert.noon} ${habitRequest.firstAlert.hour}:${habitRequest.firstAlert.minute}</li>
						<li>${habitRequest.secondAlert.noon} ${habitRequest.secondAlert.hour}:${habitRequest.secondAlert.minute}</li>
					</ul>
				</div>
			</div>
		`,
			modalType: [
				null,
				modalType.SELECT_IDENTITY,
				modalType.SELECT_TIME("RUNTIME"),
				modalType.SELECT_PLACE,
				modalType.SELECT_BEHAVIOR,
				modalType.SELECT_BEHAVIORUNIT,
				modalType.SELECT_TIME("FIRSTALERT"),
				modalType.SELECT_TIME("SECONDALERT"),
			],
		},
		{
			id: "inform",
			botMessage: [
				`마지막으로 습관 형성에 중요한 <span class="bold blue">두 가지 주의 사항</span>을 말씀드릴게요`,
				`<span class="bold blue">첫째,</span> 시간/장소/정도에 너무 얽매이지 마세요🙅 물론 지키면 좋지만, 중요한 건 <span class="bold blue">일단 하는 거</span>니까요`,
				`<span class="bold blue">둘째,</span> 실천했든 쉬었든 그날의 기록을 남겨 주세요📝 <span class="bold blue">기록은 그 자체로 강력한 동기부여 수단</span>이 된답니다`,
			],
			bottomButton: ["기억할게, 일단 하기랑 기록 남기기 맞지?"],
			userMessage: "기억할게, 일단 하기랑 기록 남기기 맞지?",
		},
		{
			id: "last",
			botMessage: [
				`네 맞아요, 감사합니다😊 그리고 그거 아세요?`,
				`저 뿐만 아니라 다른 친구들도 ${nickname}님을 보고싶어 한다는 사실! `,
				`하지만 부끄러움이 많아 별자리 뒤에 숨어 있답니다🫣`,
				`<span class="bold">실천 기록으로 받은 별</span>을 별자리에 하나 둘 넣다 보면 어느새 친구들이 가득하게 될 거예요😉`,
				`<span class="bold blue">스스로를 믿으며 꾸준히 나아갈</span> ${nickname}님을 응원하겠습니다💪 앞으로 잘 부탁드려요!`,
			],
			bottomButton: ["나도 잘 부탁해!"],
			userMessage: "",
			modalType: [modalType.SUCCESS_GUIDE],
		},
	];
}
