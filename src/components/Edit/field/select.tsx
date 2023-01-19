import { FC } from "react";
import { Field, FieldProps } from "formik";
import { MenuItem, Select as MuiSelect } from "@mui/material";
import { capitalize } from "../../../utils/utils";

interface Props {
	name: string;
	options?: string[];
}

export const Select: FC<Props> = ({ name, options }) => {
	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<MuiSelect fullWidth label={capitalize(name)} {...field}>
					{options?.map((option, index) => (
						<MenuItem key={`formik-select-${index}`} value={option}>
							{capitalize(option)}
						</MenuItem>
					))}
				</MuiSelect>
			)}
		</Field>
	);
};
