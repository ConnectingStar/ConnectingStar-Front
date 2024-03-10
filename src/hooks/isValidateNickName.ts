// 이모지 판별을 위한 정규식
const emojiRegex = /\p{Extended_Pictographic}/u;

// 닉네임 유효한지 체크하는 함수
export const isValidateNickName = (input: string): boolean => {
	if (input.length > 8 || emojiRegex.test(input) || input.includes(" ")) {
		return false;
	}
	return true;
};
