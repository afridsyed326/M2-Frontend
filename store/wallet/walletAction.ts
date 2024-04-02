import {
    DASHBOARD_OVERVIEW,
    TRANSACTION_HISTORY,
    TRANSFER_COINS,
} from "@/utils/network/apiEndpoints";
import ApiRequest from "@/utils/network/apiRequest";
import { useDispatch } from "react-redux";
import { setOverview, setTransactionHistory } from "./walletSlice";

export const useWalletActions = () => {
    const dispatch = useDispatch();

    const getDashboardOverview = async () => {
        return await ApiRequest()
            .request({
                method: "GET",
                url: DASHBOARD_OVERVIEW,
            })
            .then((response: any) => {
                dispatch(setOverview(response.data.data));
                return response.data;
            })
            .catch((error: any) => error.data);
    };

    const transferCoins = async (data: {
        amount: number;
        walletAddress: string;
    }) => {
        return await ApiRequest()
            .request({
                method: "POST",
                url: TRANSFER_COINS,
                data,
            })
            .then((response: any) => {
                return response.data;
            })
            .catch((error: any) => error.data);
    };

    const getTransactionHistory = async (query: { page: number }) => {
        return await ApiRequest()
            .request({
                method: "GET",
                url: TRANSACTION_HISTORY,
                params: { ...query, limit: 3 },
            })
            .then((response: any) => {
                dispatch(setTransactionHistory(response.data.data));
                return response.data;
            })
            .catch((error: any) => error.data);
    };

    return {
        getDashboardOverview,
        transferCoins,
        getTransactionHistory,
    };
};
