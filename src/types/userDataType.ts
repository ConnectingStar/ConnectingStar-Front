export interface userType {
	nickName: string;
	gender: string;
	age: string;
	visitorRoute: string;
	habit: string;
	identity: string;
	time: { noon: string; hour: string; minute: string };
	location: string;
	behavior: string;
	alert1: { noon: string; hour: string; minute: string };
	alert2: { noon: string; hour: string; minute: string };
}

export interface basicUserDataType {
	nickName: string;
	gender: string;
	age: string;
}

export interface habitUserDataType {
	habit?: string;
	identity?: string;
	time?: { noon: string; hour: string; minute: string };
	location?: string;
	behavior?: string;
	alert1?: { noon: string; hour: string; minute: string };
	alert2?: { noon: string; hour: string; minute: string };
}
