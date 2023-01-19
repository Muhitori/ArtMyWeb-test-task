import { Container, Pagination } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserService } from "../../services/UserService";
import { GenderSelect } from "./GenderSelect";
import type { Gender, User } from "../../types/User";

import { columns } from "./columns";

export const Home = () => {
	const navigate = useNavigate();

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
					onRowClick={({ id }) => navigate(`/edit/${id}`)}
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
