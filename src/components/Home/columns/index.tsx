import type { GridColDef } from "@mui/x-data-grid";
import { GenderColumn } from "./GenderColumn";
import { StatusColumn } from "./StatusColumn";

export const columns: GridColDef[] = [
	{ field: "name", headerName: "Name", flex: 1 },
	{ field: "email", headerName: "Email", flex: 1 },
	{
		field: "gender",
		headerName: "Gender",
		renderCell: (params) => <GenderColumn {...params} />,
	},
	{
		field: "status",
		headerName: "Status",
		renderCell: (params) => <StatusColumn {...params} />,
	},
];
