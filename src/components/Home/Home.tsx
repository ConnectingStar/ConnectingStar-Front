import { css } from "@emotion/react";

function Home() {
	const arr = Array.from({ length: 30 }).map((_, idx) => idx + 1);
	return (
		<div
			className="home_wrapper"
			css={css`
				position: relative;
				display: flex;
				flex-direction: column;
				width: 100%;
				height: 100vh;
			`}
		>
			<div
				className="home_inner"
				css={css`
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					width: 100%;
					height: 100vh;
				`}
			>
				<div
					className="home_header"
					css={css`
						display: flex;
						width: 100%;
						height: 10vh;
						border: 1px solid black;
					`}
				>
					<div
						className="home_header_inner"
						css={css`
							display: flex;
							justify-content: space-around;
							align-items: center;
							width: 100%;
							padding: 0 1rem 0 1rem;
							border: 1px solid black;
						`}
					>
						<div
							className="home_header_inner_logo"
							css={css`
								display: block;
								overflow: hidden;
								height: 100%;
								width: auto;
								aspect-ratio: 1/1;
								border: 1px solid black;
							`}
						>
							<span
								css={css`
									display: flex;
									justify-content: center;
									align-items: center;
									width: 100%;
									height: 100%;
								`}
							>
								LOGO
							</span>
						</div>
						<div
							className="home_header_inner_name"
							css={css`
								padding: 0 1rem 0 1rem;
								flex: 1;
							`}
						>
							<span>NICKNAME</span>
						</div>
						<div
							className="home_header_inner_generate"
							css={css`
								display: block;
								overflow: hidden;
								height: 100%;
								width: auto;
								aspect-ratio: 1/1;
								border: 1px solid black;
							`}
						>
							<span
								css={css`
									display: flex;
									justify-content: center;
									align-items: center;
									width: 100%;
									height: 100%;
								`}
							>
								gen.
							</span>
						</div>
					</div>
				</div>
				<div
					className="home_inner_guidance_container"
					css={css`
						display: flex;
						width: 100%;
						height: 10vh;
						border: 1px solid black;
					`}
				>
					<div
						className="home_inner_guidance"
						css={css`
							display: flex;
							align-items: center;
							width: 100%;
							padding: 0 1rem 0 1rem;
							border: 1px solid black;
						`}
					>
						<div
							className="home_inner_guidance_logo_container"
							css={css`
								display: block;
								overflow: hidden;
								height: 100%;
								width: auto;
								aspect-ratio: 1/1;
								border: 1px solid black;
							`}
						>
							<span
								className="home_inner_guidance_logo"
								css={css`
									display: flex;
									justify-content: center;
									align-items: center;
									height: 100%;
									width: auto;
									aspect-ratio: 1/1;
								`}
							>
								LOGO
							</span>
						</div>
						<div
							className="home_inner_guidance_line_container"
							css={css`
								flex: 1;
								display: flex;
								align-items: center;
								padding: 0 1rem 0 1rem;
							`}
						>
							<div className="home_inner_guidance_line">습관 도움말</div>
						</div>
					</div>
				</div>
				<div
					className="home_inner_calender_container"
					css={css`
						display: flex;
						width: 100%;
						height: 20vh;
						border: 1px solid black;
					`}
				>
					<div
						className="home_inner_calender"
						css={css`
							display: flex;
							flex-direction: column;
							width: 100%;
							padding: 0 1rem 0 1rem;
							height: 100%;
						`}
					>
						<div
							className="home_inner_calender_date"
							css={css`
								display: flex;
								justify-content: space-between;
								align-items: center;
								width: 100%;
								min-height: 40%;
								border: 1px solid black;
							`}
						>
							<span>DATE</span>
							<span>2일 전</span>
						</div>
						<div
							className="home_inner_calender_carousel_container"
							css={css`
								display: block;
								overflow-x: scroll;
								height: 100%;
								width: 100%;
								border: 1px solid black;
							`}
						>
							<div
								className="home_inner_calender_carousel"
								css={css`
									display: flex;
									background-color: whitesmoke;
									min-width: 150%;
									height: 100%;
								`}
							>
								<ul
									className="home_inner_calender_carousel_list"
									css={css`
										display: flex;
										align-items: center;
										height: 100%;
									`}
								>
									{arr.map((num) => {
										return (
											<li
												className="home_inner_calender_carousel_list_el"
												css={css`
													display: flex;
													flex-direction: column;
													padding: 0 1rem 0 1rem;
													min-width: 2rem;
													height: 100%;
													border: 1px solid black;
													margin-right: 0.3rem;
												`}
											>
												<span
													css={css`
														flex: 1;
														display: flex;
														justify-content: center;
														align-items: center;
													`}
												>
													일
												</span>
												<span
													css={css`
														flex: 1;
														display: flex;
														justify-content: center;
														align-items: center;
													`}
												>
													{num}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div
					className="home_inner_habit_container"
					css={css`
						display: flex;
						flex-direction: column;
						width: 100%;
						height: 45vh;
						border: 1px solid red;
					`}
				>
					<div
						className="home_inner_habit"
						css={css`
							display: flex;
							flex-direction: column;
							padding: 1rem;
							width: 100%;
							height: 100%;
						`}
					>
						<div
							className="home_inner_habit_carousel_container"
							css={css`
								display: block;
								width: 100%;
								height: 75%;
								border: 1px solid black;
								overflow-y: scroll;
							`}
						>
							<ul
								className="home_inner_habit_carousel"
								css={css`
									display: flex;
									flex-direction: column;
									width: 100%;
									min-height: 100%;
									border: 1px solid black;
									padding: 0 1rem 0 1rem;
								`}
							>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
								<li
									className="home_inner_habit_carousel_list"
									css={css`
										display: flex;
										width: 100%;
										min-height: 10vh;
										border: 1px solid black;
										margin-bottom: 0.5rem;
									`}
								></li>
							</ul>
						</div>
						<div
							className="home_inner_habit_pushbutton"
							css={css`
								display: flex;
								width: 100%;
								height: 25%;
								border: 1px solid black;
							`}
						>
							안녕
						</div>
					</div>
				</div>
				<div
					className="home_inner_buttons"
					css={css`
						display: flex;
						flex-direction: column;
						width: 100%;
						height: 15vh;
						border: 1px solid blue;
					`}
				>
					버튼
				</div>
			</div>
		</div>
	);
}
export default Home;
