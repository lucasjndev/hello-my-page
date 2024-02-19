"use server";

import apiClient from "../apis/api-defaut";
import { ROUTES_APIS } from "@/utils/enum";

const profile = async () => {
    let errors = null;
    let response = null;
    try {
        response = await apiClient.get(ROUTES_APIS.PROFILE);
        response = response.data;
        return { response, errors };
    } catch (error) {
        return { response, errors: error };
    }
};

export default profile;