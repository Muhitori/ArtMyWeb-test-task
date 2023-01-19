import * as Yup from "yup";
import { Grid, Button, Box } from "@mui/material";
import { Formik, Form } from "formik";
import { Gender, Status, User } from "../../types/User";
import { Field, FieldData } from "./field";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";
import { snackbarGenerator } from "../SnackbarGenerator";

type FormInputs = Omit<User, "id">;

const fields: FieldData[] = [
	{
		name: "name",
		type: "input",
	},
	{
		name: "email",
		type: "input",
	},
	{
		name: "gender",
		type: "select",
		options: Object.values(Gender),
	},
	{
		name: "status",
		type: "select",
		options: Object.values(Status),
	},
];

const validationSchema = Yup.object().shape({
	name: Yup.string().max(40, "Too Long!").required("Required"),
	email: Yup.string().email("Incorrect email format").required("Required"),
	gender: Yup.string().required("Required"),
	status: Yup.string().required("Required"),
});

const initialValues: FormInputs = {
	name: "",
	email: "",
	gender: Gender.MALE,
	status: Status.INACTIVE,
};

export const Edit = () => {
	const navigate = useNavigate();
	const { id } = useParams();

	const [values, setValues] = useState<FormInputs>(initialValues);

	useEffect(() => {
		const effect = async () => {
			if (!id) return;

			const data = await UserService.getUserById(id);
			setValues(data);
		};

		effect();
	}, [id]);

	const handleSubmit = async (data: FormInputs) => {
		try {
			await UserService.updateUser(id, data);

			snackbarGenerator.success("User updated");
			navigate("/users");
		} catch (err) {
			snackbarGenerator.error("Editing failed");
		}
	};

	return (
		<Grid height='100%' container justifyContent='center' alignItems='center'>
			<Grid item sm={5}>
				<Formik
					enableReinitialize
					initialValues={values}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}>
					<Form>
						<Box width='100%' display='flex' flexDirection='column' gap={2}>
							{fields.map(({ name, type, options }, index) => (
								<Field key={index} name={name} type={type} options={options} />
							))}

							<Button variant='contained' color='primary' type='submit'>
								Save
							</Button>
						</Box>
					</Form>
				</Formik>
			</Grid>
		</Grid>
	);
};
