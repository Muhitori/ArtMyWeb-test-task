import type { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
	{ field: "name", headerName: "Name", flex: 1 },
	{ field: "email", headerName: "Email", flex: 1 },
	{ field: "gender", headerName: "Gender" },
	{ field: "status", headerName: "Status" },
];
