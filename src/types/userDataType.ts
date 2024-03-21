export interface userType {
	nickName: string;
	gender: "남" | "여" | "";
	age: "15-19" | "20-24" | "25-29" | "30-34" | "35-39" | "40-44" | "45-50" | "50-54" | "55이상";
	findRoute: "앱 스토어" | "지인 추천" | "SNS 광고" | "검색" | "기타";
	habit: string;
	identity: string;
	time: string;
	location: string;
	behavior: string;
	alert1: string;
	alert2: string;
}

export interface basicUserDataType {
	nickName: string;
	gender: "남" | "여" | "";
	age: "15-19" | "20-24" | "25-29" | "30-34" | "35-39" | "40-44" | "45-50" | "50-54" | "55이상";
	findRoute: "앱 스토어" | "지인 추천" | "SNS 광고" | "검색" | "기타";
}

export interface habitUserDataType {
	habit?: string;
	identity?: string;
	time?: string;
	location?: string;
	behavior?: string;
	alert1?: string;
	alert2?: string;
}
