import { modalType } from "@/constants/modalConstants";

import { theme } from "@/styles/theme";

import type { HabitRequestType } from "@/types/habit";

export function createChatData(nickname: string, habitRequest: HabitRequestType) {
	return [
		{
			id: "firstMeet",
			botMessage: [
				`반가워요 ${nickname}님!\n저는 약속 맺기를 도울 타스예요 :)`,
				`어떤 습관을 함께 만들어 볼까요?`,
				`매일 해도 무리 없는 쉬운 것부터 시작하기를 추천해요 😊`,
			],
			bottomButton: ["습관 선택"],
			userMessage: `${habitRequest.behavior}`,
			modalType: [modalType.SELECT_BEHAVIOR],
		},
		{
			id: "behavior",
			botMessage: [
				`그렇군요!`,
				`이번엔 정체성을 정해 볼게요`,
				`${habitRequest.behavior}을(를) 통해서 ${nickname}님은 어떤 사람이 되고 싶으세요?`,
			],
			bottomButton: ["정체성 선택"],
			userMessage: `${habitRequest.identity}`,
			modalType: [modalType.SELECT_IDENTITY],
		},
		{
			id: "identity",
			botMessage: [
				`좋습니다 :)`,
				`지금 이 순간부터 ${nickname}님은 ${habitRequest.identity} 사람이에요`,
				`오늘부터 진심으로 ${nickname}님은 ${habitRequest.identity} 사람이라고 믿어 주세요!`,
			],
			bottomButton: ["그런데 정체성을 왜 정하는 거야?"],
			userMessage: "그런데 정체성을 왜 정하는 거야?",
		},
		{
			id: "reasonIdentity",
			botMessage: [
				`정체성을 정함으로써 스스로에게 믿음을 부여할 수 있어요`,
				`그리고 우리는 놀랍도록 스스로가 믿는 대로 행동하죠`,
			],
			bottomButton: ["알겠어!"],
			userMessage: "알겠어!",
		},
		{
			id: "runTime",
			botMessage: [
				`이제 본격적으로 습관을 구체화 시켜볼까요?`,
				`습관 약속은 시간, 장소, 행동으로 구분돼요`,
				`그리고 그 약속은\n1. 무엇을 할지 <span style="color: ${theme.color.main_blue};font-weight: 700;">명확</span>해야 하고\n2. 하고 싶도록 <span style="color: ${theme.color.main_blue};font-weight: 700;">매력</span>적이며\n3. <span style="color: ${theme.color.main_blue};font-weight: 700;">쉽게</span> 할 수 있어야 하고\n4. 하고 난 뒤 <span style="color: ${theme.color.main_blue};font-weight: 700;">만족</span>스러워야 합니다`,
				`최대한 4가지 원칙에 맞게끔 습관을 만들어 볼까요?`,
				`먼저 시간을 정해 볼게요!`,
				`다른 일에 방해 받지 않는 시간 혹은 매일 지키기에 수월한 시간으로 설정해 주세요`,
			],
			bottomButton: ["시간 선택"],
			userMessage: `${habitRequest.runTime.noon} ${habitRequest.runTime.hour}:${habitRequest.runTime.minute}`,
			modalType: [modalType.SELECT_TIME("RUNTIME")],
		},
		{
			id: "place",
			botMessage: [
				`다음으로 장소를 정해 볼게요!`,
				`어떤 장소가 ${nickname}님에게 매력적인가요?`,
				`가는 것만으로 만족스럽거나 습관을 쉽게 할 수 있는 곳으로 명확하게 적어 주세요`,
			],
			bottomButton: ["장소 선택"],
			userMessage: `${habitRequest.place}`,
			modalType: [modalType.SELECT_PLACE],
		},

		{
			id: "behaviorUnit",
			botMessage: [
				`마지막으로 행동을 정해 볼게요`,
				`난이도는 매일 할 수 있을 정도로 쉽게 시작해야 해요!`,
				`예를들어 책을 읽는다면 30분보다 3장 처럼요 :D`,
				`3장으로 시작했지만, 점차 자리 잡으면 30장도 쉬운 일이 되어 있을 거예요!`,
			],
			bottomButton: ["실천 정도 선택"],
			userMessage: `${habitRequest.behaviorValue} ${habitRequest.behaviorUnit}`,
			modalType: [modalType.SELECT_BEHAVIORUNIT],
		},
		{
			id: "alert",
			botMessage: [`약속을 기억하고 실천을 기록하실 수 있도록 하루 두 번, 알림을 보내드릴게요!`],
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
			botMessage: [`지금까지 나눈 이야기를 정리해 보여드릴게요`],
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
				`습관 실천이 가장 핵심이지만, 기록 역시 정말 중요해요 :)`,
				`무엇 때문에 쉬었는지 혹은 오늘 실천은 어땠는지 매일 제게 알려주세요!`,
			],
			bottomButton: ["알겠어!"],
			userMessage: "알겠어!",
		},
		{
			id: "last",
			botMessage: [
				`감사합니다. 실천을 기록하신 날에는 별을 드릴게요🌟`,
				`모은 별로  별자리를 완성시킬 때마다 캐릭터를 획득할 수 있어요 :)`,
				`성운 마을의 귀여운 친구들이 ${nickname}님과 만날 날을 기다리고 있답니다 :D`,
				`Tars와 맺는 습관 약속은 <span style="color: ${theme.color.main_blue};font-weight: 700;">매일 실행</span>하는 것을 권장하고 있어요`,
				`매번 완벽할 필요 없습니다`,
				`약속의 단 10%만 지켜지더라도 \n<span style="color: ${theme.color.main_blue};font-weight: 700;">"꾸준하게 하는 것”</span>이 핵심이니까요`,
				`고생 많으셨습니다!`,
				`${habitRequest.behavior}를 꾸준히 하는 ${nickname}님을 응원할게요 XD`,
			],
			bottomButton: ["나도 잘 부탁해!"],
			userMessage: "",
			modalType: [modalType.SUCCESS_GUIDE],
		},
	];
}
