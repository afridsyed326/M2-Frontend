//AXIOS
import axios from "axios";
//API
import { API_INSTANCE } from "./apiEndpoints";
import { getAccessTokenFromCookie, removeAccessTokenCookie } from "../storage";

const logout = () => {
    const fullPath = window.location.pathname + window.location.search;
    removeAccessTokenCookie();
    window.location.href =
        "/auth/login" + `?next=${encodeURIComponent(fullPath)}`;
};

export default function ApiRequest() {

    const request = axios.create({
        baseURL: `${API_INSTANCE}`,
        headers: {
            Authorization: `Bearer ${getAccessTokenFromCookie() || null}`,
        },
        responseType: "json",
        socketPath: null,
    });

    request.interceptors.response.use(
        (response: any): any => response,
        (error: any) => {
            if (error.code === "ERR_NETWORK") {
                return;
            }

            if (error.response.status === 401) {
                logout();
            }

            if (error.response.status === 403) {
                logout();
                return;
            }

            return Promise.reject(error.response);
        }
    );

    return request;
}
