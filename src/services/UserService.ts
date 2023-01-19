import { Gender, User } from "../types/User";
import { axiosInstance } from "./axios";

const ITEMS_COUNT = 10;
const BASE_URL = "https://gorest.co.in/public/v2/users";

export class UserService {
	static async getUsers(page: number = 1, gender?: Gender) {
		const params = new URLSearchParams();

		if (page) {
			params.set("page", String(page));
			params.set("per_page", String(ITEMS_COUNT));
		}

		if (gender) {
			params.set("gender", gender);
		}

		const { data, headers } = await axiosInstance.get(
			`${BASE_URL}?${params.toString()}`
		);

		const pageCount = Number(headers["x-pagination-pages"]);

		return { data, pageCount };
	}

	static async updateUser(userId: number, user: Partial<User>) {
		await axiosInstance.patch(`${BASE_URL}/${userId}`, user);
	}
}
