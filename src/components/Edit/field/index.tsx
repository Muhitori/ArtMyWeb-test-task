import { FC } from "react";
import { Input } from "./input";
import { Select } from "./select";

type FieldType = "input" | "select";

export interface FieldData {
	name: string;
	type?: FieldType;
	options?: string[];
}

export const Field: FC<FieldData> = ({ name, type, options }) => {
	if (type === "select") {
		return <Select name={name} options={options} />;
	}

	return <Input name={name} />;
};
