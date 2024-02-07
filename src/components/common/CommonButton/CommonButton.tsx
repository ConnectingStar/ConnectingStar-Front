import CommonButtonStyle from "@/components/common/CommonButton/CommonButton.style";

export default function CommonButton({ children }: { children: React.ReactNode }) {
	return <div css={CommonButtonStyle.container}>{children}</div>;
}

CommonButton.Round = function CommonButtonRound({
	children,
	cancle,
	blur,
}: {
	children: React.ReactNode;
	cancle?: boolean;
	blur?: boolean;
}) {
	return (
		<div css={CommonButtonStyle.round}>
			{cancle ? (
				<button type="button" className="canclebutton">
					취소
				</button>
			) : null}
			<button type="button" css={blur ? { opacity: "40%" } : null}>
				{children}
			</button>
		</div>
	);
};

CommonButton.Square = function CommonButtonSquare({
	children,
	cancle,
	blur,
}: {
	children: React.ReactNode;
	cancle?: boolean;
	blur?: boolean;
}) {
	return (
		<div css={CommonButtonStyle.square}>
			{cancle ? (
				<button type="button" className="canclebutton">
					취소
				</button>
			) : null}
			<button type="button" css={blur ? { opacity: "40%" } : null}>
				{children}
			</button>
		</div>
	);
};
