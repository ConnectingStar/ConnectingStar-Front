import RoundCloseButtonIcon from "@/assets/icon/ic-round-close-button.svg?react";

interface HabitTipProps {
	isOpenTip: boolean;
	setIsOpenTip: (isOpenTip: boolean) => void;
}

function HabitTip({ isOpenTip, setIsOpenTip }: HabitTipProps) {
	return (
		<>
			<button onClick={() => setIsOpenTip(!isOpenTip)}>
				<div>{`좋은 습관 Tip`}</div>
			</button>
			{isOpenTip && (
				<div>
					<div>
						<p>{`1. 일단 쉬워야 해요.`}</p>
						<p>{`쉬워야 반복할 수 있기 때문이에요.`}</p>
					</div>
					<div>
						<p>{`2. 만족스럽기까지 하면 최고!`}</p>
						<p>{`매력적이고 만족스러워야 계속하고 싶으니까요.`}</p>
					</div>

					<RoundCloseButtonIcon onClick={() => setIsOpenTip(false)} />
				</div>
			)}
		</>
	);
}

export default HabitTip;
