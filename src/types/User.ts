export enum Gender {
	MALE = "male",
	FEMALE = "female",
}

export enum Status {
	ACTIVE = "active",
	INACTIVE = "inactive",
}

export interface User {
	id: number;
	name: string;
	email: string;
	gender: Gender;
	status: Status;
}
