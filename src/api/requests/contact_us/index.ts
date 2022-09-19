import { api } from "../..";

export default async function apiGetContactUsIndex() {
    return api.get("/contact_us/index");
}

