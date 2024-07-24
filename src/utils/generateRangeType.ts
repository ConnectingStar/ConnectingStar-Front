export const generateGenderType = (genderType: string) => {
	if (genderType === "MALE") {
		return "남";
	} else if (genderType === "FEMALE") {
		return "여";
	} else {
		return "선택 안 함";
	}
};

export const generateGender = (gender: string) => {
	if (gender === "남") {
		return "M";
	} else if (gender === "여") {
		return "F";
	} else {
		return "N";
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

export const generateAge = (age: string) => {
	if (age === "15-19") {
		return "A";
	} else if (age === "20-24") {
		return "B";
	} else if (age === "25-29") {
		return "C";
	} else if (age === "30-34") {
		return "D";
	} else if (age === "35-39") {
		return "E";
	} else if (age === "40-44") {
		return "F";
	} else if (age === "45-49") {
		return "G";
	} else if (age === "50-54") {
		return "H";
	} else {
		return "I";
	}
};
