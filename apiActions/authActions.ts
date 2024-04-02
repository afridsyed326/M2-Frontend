import { LOGIN, REGISTER } from "@/utils/network/apiEndpoints";
import ApiRequest from "@/utils/network/apiRequest";

export const userLogin = async (data: {
    username: string;
    password: string;
}) => {
    return await ApiRequest()
        .request({
            method: "POST",
            url: LOGIN,
            data,
        })
        .then((response: any) => {
            localStorage.setItem("accessToken", response.data.data.token);
            return response.data;
        })
        .catch((error: any) => error.data);
};

export const userRegister = async (data: any) => {
    return await ApiRequest()
        .request({
            method: "POST",
            url: REGISTER,
            data,
        })
        .then((response: any) => {
            console.log(response)
            localStorage.setItem("accessToken", response.data.data.token);
            return response.data;
        })
        .catch((error: any) => error.data);
};
