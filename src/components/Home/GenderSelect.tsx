import {
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { FC } from "react";
import { Gender } from "../../types/User";

interface Props {
	gender?: Gender;
	onChange: (gender?: Gender) => void;
}

export const GenderSelect: FC<Props> = ({ gender, onChange }) => {
	const handleChange = (event: SelectChangeEvent) => {
		if (event.target.value !== "all") {
			onChange(event.target.value as Gender);
		} else {
			onChange(undefined);
		}
	};

	return (
		<Box sx={{ width: 120 }}>
			<FormControl fullWidth>
				<InputLabel>Gender</InputLabel>
				<Select value={gender || "all"} label='Gender' onChange={handleChange}>
					<MenuItem value='all'>All</MenuItem>
					<MenuItem value={Gender.MALE}>Male</MenuItem>
					<MenuItem value={Gender.FEMALE}>Female</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
