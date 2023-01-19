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

	static async getUserById(userId: string): Promise<User> {
		const response = await axiosInstance.get(`${BASE_URL}/${userId}`);
		return response.data;
	}

	static async updateUser(userId: string | undefined, user: Partial<User>) {
		if (!userId) return;

		await axiosInstance.patch(`${BASE_URL}/${userId}`, user);
	}
}
