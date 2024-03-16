function isValidNickname(nickname: string) {
	const regex = /^[가-힣\u3131-\u314E\u314F-\u3163a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;
	return regex.test(nickname);
}

export default isValidNickname;
