import FooterBtnStyle from "@/components/common/FooterBtn/FooterBtn.Style";

export default function FooterBtn({ children }: { children: React.ReactNode }) {
	return <div css={FooterBtnStyle.container}>{children}</div>;
}

FooterBtn.Round = function FooterBtnRound({
	children,
	cancle,
	blur,
}: {
	children: React.ReactNode;
	cancle?: boolean;
	blur?: boolean;
}) {
	return (
		<div css={FooterBtnStyle.round}>
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

FooterBtn.Square = function FooterBtnSquare({
	children,
	cancle,
	blur,
}: {
	children: React.ReactNode;
	cancle?: boolean;
	blur?: boolean;
}) {
	return (
		<div css={FooterBtnStyle.square}>
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
