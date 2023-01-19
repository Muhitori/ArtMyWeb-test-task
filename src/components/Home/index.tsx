import { Container, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { UserService } from "../../services/UserService";
import { Gender, User } from "../../types/User";
import { columns } from "./columns";
import { GenderSelect } from "./GenderSelect";

export const Home = () => {
	const [rows, setRows] = useState<User[]>([]);

	const [gender, setGender] = useState<Gender | undefined>();

	const [currentPage, setCurrentPage] = useState<number>(1);
	const [pageCount, setPageCount] = useState<number | undefined>();

	useEffect(() => {
		const effect = async () => {
			const { data, pageCount } = await UserService.getUsers(
				currentPage,
				gender
			);

			setRows(data);
			setPageCount(pageCount);
		};

		effect();
	}, [currentPage, gender]);

	const handleGenderChange = useCallback(
		(gender: Gender | undefined) => {
			setGender(gender);
		},
		[setGender]
	);

	const handlePageChange = useCallback(
		(event: React.ChangeEvent<unknown>, value: number) => {
			setCurrentPage(value);
		},
		[setCurrentPage]
	);

	return (
		<Container sx={{ display: "flex", flexDirection: "column", gap: 2, pt: 2 }}>
			<GenderSelect gender={gender} onChange={handleGenderChange} />
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
