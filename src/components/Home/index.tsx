import { Container, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { UserService } from "../../services/UserService";
import { User } from "../../types/User";
import { columns } from "./columns";

export const Home = () => {
	const [rows, setRows] = useState<User[]>([]);

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number | undefined>();

	useEffect(() => {
		const effect = async () => {
			const { data, pageCount } = await UserService.getUsers(currentPage);

			setRows(data);
			setPageCount(pageCount);
		};

		effect();
	}, [currentPage]);

	const handlePageChange = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setCurrentPage(value);
	};

	return (
		<Container sx={{ py: 2 }}>
			{Boolean(rows.length) && (
				<DataGrid
					autoHeight
					rows={rows}
					columns={columns}
					components={{ Pagination: Pagination }}
					componentsProps={{
						pagination: {
							count: pageCount,
							page: currentPage,
							onChange: handlePageChange,
						},
					}}
				/>
			)}
		</Container>
	);
};
