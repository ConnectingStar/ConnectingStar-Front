export interface userType {
	nickName: string;
	gender: string;
	age: string;
	findRoute: string;
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
	gender: string;
	age: string;
}

export interface findRouteType {
	findRoute: string;
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
