import { LOGIN, REGISTER } from "@/utils/network/apiEndpoints";
import ApiRequest from "@/utils/network/apiRequest";
import { useDispatch } from "react-redux";
import { setOverview } from "./walletSlice";


export const useWalletActions = () => {
    const dispatch = useDispatch()

    const getDashboardOverview = async () => {
        return await ApiRequest()
            .request({
                method: "GET",
                url: LOGIN,
            })
            .then((response: any) => {
                dispatch(setOverview(response.data.data))
                return response.data;
            })
            .catch((error: any) => error.data);
    };
    

    return {
        getDashboardOverview,
    }
}