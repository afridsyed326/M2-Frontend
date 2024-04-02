import { LOGIN, REGISTER } from "@/utils/network/apiEndpoints";
import ApiRequest from "@/utils/network/apiRequest";
import { useDispatch } from "react-redux";
import { setLogIn } from "./userSlice";


export const useUserActions = () => {
    const dispatch = useDispatch()

    const userLogin = async (data: {
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
                dispatch(setLogIn(response.data.data))
                return response.data;
            })
            .catch((error: any) => error.data);
    };
    
    const userRegister = async (data: any) => {
        return await ApiRequest()
            .request({
                method: "POST",
                url: REGISTER,
                data,
            })
            .then((response: any) => {
                dispatch(setLogIn(response.data.data))
                return response.data;
            })
            .catch((error: any) => error.data);
    };

    return {
        userLogin,
        userRegister
    }
}