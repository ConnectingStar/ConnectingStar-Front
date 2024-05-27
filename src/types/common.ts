export interface CommonResponseType {
	status: number;
	message: string;
}

export type DateFormatType = "LINE" | "POINT";

export interface CommonAlertType {
	noon: string;
	hour: string;
	minute: string;
}
