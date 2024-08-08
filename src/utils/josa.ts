const HANGUL_START_CHARCODE = "가".charCodeAt(0);
const HANGUL_END_CHARCODE = "힣".charCodeAt(0);
const JONGSUNG = 28;

/**
 * 단어 마지막 글자의 종성(=받침) 유무 판단하는 함수
 * @description 빈 문자열이거나 마지막 글자가 한글이 아니면 종성 유무를 제대로 판단하지 못하니 undefined 리턴
 */
function hasJongsung(letter: string) {
	if (!letter) return;

	const lastCharCode = letter.charCodeAt(letter.length - 1);
	const isHangul = HANGUL_START_CHARCODE <= lastCharCode && lastCharCode <= HANGUL_END_CHARCODE;

	if (!isHangul) return;

	const jongsungIndex = (lastCharCode - HANGUL_START_CHARCODE) % JONGSUNG;

	return jongsungIndex ? true : false;
}

export function josaIga(letter: string) {
	return hasJongsung(letter) ? "이" : "가";
}
