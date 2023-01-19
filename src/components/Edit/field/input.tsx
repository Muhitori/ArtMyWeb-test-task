import { Field, FieldProps } from "formik";
import { TextField } from "@mui/material";
import { FC } from "react";
import { capitalize } from "../../../utils/utils";

interface Props {
	name: string;
}

export const Input: FC<Props> = ({ name }) => {
	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => (
				<TextField
					fullWidth
					error={Boolean(form.errors[name])}
					label={capitalize(name)}
					helperText={form.errors[name] && `${form.errors[name]}`}
					{...field}
				/>
			)}
		</Field>
	);
};
