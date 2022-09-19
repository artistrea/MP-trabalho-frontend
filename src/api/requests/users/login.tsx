import { api } from "../..";

export default async function apiLogin(user: {
    email: string;
    password: string;
}) {
    return api.post<{ email: string; password: string; user_type: 0 | 1 | 2 }>(
        "/users/login",
        user
    );
}

