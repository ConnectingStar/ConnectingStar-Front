export const getCookie = (name: string) => {
	const cookieArray = document.cookie.split(";"); // 쿠키들을 분리하여 배열로 만듦
	for (let i = 0; i < cookieArray.length; i++) {
		const cookiePair = cookieArray[i].split("="); // 키와 값을 분리
		if (name == cookiePair[0].trim()) {
			// 쿠키의 키 이름이 입력받은 이름과 일치하는지 확인
			return decodeURIComponent(cookiePair[1]); // 쿠키의 값을 디코딩하여 반환
		}
	}
	return null; // 일치하는 쿠키가 없다면 null 반환
};
