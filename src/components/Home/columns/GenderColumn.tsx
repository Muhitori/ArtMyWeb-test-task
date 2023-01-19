import type { GridRenderCellParams } from "@mui/x-data-grid";
import { FC, useMemo } from "react";
import { Gender } from "../../../types/User";

import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import { Tooltip, capitalize, Box } from "@mui/material";

const iconColor = "#535c68";
export const GenderColumn: FC<GridRenderCellParams> = ({ value }) => {
	const icon = useMemo(() => {
		if (value === Gender.FEMALE) {
			return <WomanIcon sx={{ color: iconColor }} />;
		}

		return <ManIcon sx={{ color: iconColor }} />;
	}, [value]);

	return (
		<Tooltip title={capitalize(value)}>
			<Box width='100%' display='flex' justifyContent='center'>
				{icon}
			</Box>
		</Tooltip>
	);
};
