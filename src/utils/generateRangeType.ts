export const generateGenderType = (genderType: string) => {
	if (genderType === "M") {
		return "남";
	} else {
		return "여";
	}
};

export const generateAgeType = (ageType: string) => {
	if (ageType === "A") {
		return "15-19";
	} else if (ageType === "B") {
		return "20-24";
	} else if (ageType === "C") {
		return "25-29";
	} else if (ageType === "D") {
		return "30-34";
	} else if (ageType === "E") {
		return "35-39";
	} else if (ageType === "F") {
		return "40-44";
	} else if (ageType === "G") {
		return "45-49";
	} else if (ageType === "H") {
		return "50-54";
	} else {
		return "55 이상";
	}
};
