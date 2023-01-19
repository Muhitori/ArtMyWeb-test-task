import type { GridRenderCellParams } from "@mui/x-data-grid";
import { FC, useMemo } from "react";
import { Status } from "../../../types/User";

import ActiveIcon from "@mui/icons-material/Check";
import InactiveIcon from "@mui/icons-material/Close";
import { Tooltip, capitalize, Box } from "@mui/material";

const activeIconColor = "#6ab04c";
const inactiveIconColor = "#eb4d4b";

export const StatusColumn: FC<GridRenderCellParams> = ({ value }) => {
	const icon = useMemo(() => {
		if (value === Status.INACTIVE) {
			return <InactiveIcon sx={{ color: inactiveIconColor }} />;
		}

		return <ActiveIcon sx={{ color: activeIconColor }} />;
	}, [value]);

	return (
		<Tooltip title={capitalize(value)}>
			<Box width='100%' display='flex' justifyContent='center'>
				{icon}
			</Box>
		</Tooltip>
	);
};
