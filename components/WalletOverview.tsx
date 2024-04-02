'use client';
import { selectUser } from "@/store/user/userSlice";
import { useWalletActions } from "@/store/wallet/walletAction";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineToken } from "react-icons/md";
import { selectWallet } from "@/store/wallet/walletSlice";
import RingLoader from "react-spinners/RingLoader";

type Props = {};

const WalletOverview = (props: Props) => {

    const [loading, setLoading] = useState(true);

    const { getDashboardOverview } = useWalletActions();

    useEffect(() => {
        setLoading(true);
        getDashboardOverview().then(() => setLoading(false))
    }, [])

    const user = useSelector(selectUser);
    const { overview } = useSelector(selectWallet)

    if (loading) {
        return <div className="w-full h-[50vh] flex justify-center items-center">
            <RingLoader color="white" loading={loading} size={50} />
        </div>
    }


    return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="main-card !rounded-md !bg-accent/20">
            <div className="flex justify-between flex-col md:flex-row p-10 items-center">
                <div className="h-[80px] w-[80px] top-0 left-0 bg-gradient-to-tr from-accent to-accent/50 rounded-full flex  justify-center items-center text-[4rem] drop-shadow-xl hover:drop-shadow-2xl shadow-accent">
                    <MdOutlineToken />
                </div>
                <div className="font-bold z-10 flex flex-col items-center justify-center gap-3 overflow-hidden">
                    <div className="text-xl">M2X Wallet Address</div>
                    <div className="border border-accent md:textlg rounded-lg py-2 px-4 bg-accent/30 truncate">{user?.walletAddress}</div>
                </div>
            </div>
            <div className="px-10 py-3 text-2xl font-semibold grid grid-cols-2 gap-3">
                <div>Total transactions:</div>
                <div>{overview?.totalTransactions || 0}</div>
                <div>Last transactions:</div>
                <div>{overview?.lastTransaction || "Mar 15, 2024"}</div>
            </div>
        </div>

        <div className="main-card !rounded-md !bg-accent/20">
            <div className="flex justify-between flex-col md:flex-row p-10 items-center">
                <div className="grid grid-cols-2 w-full">
                    <div className="grid grid-cols-1">
                        <div className="font-bold flex flex-col border border-accent p-2 items-center justify-center gap-3">
                            <div className="text-xl">M2X Received</div>
                            <div className="border border-green-600 text-xl md:textlg rounded-lg py-2 px-4 bg-accent/30">{overview?.totalCredit} <span className="text-orange-400 font-bold">M2X</span></div>
                        </div>
                        <div className="font-bold flex flex-col border  border-accent p-2 items-center justify-center gap-3">
                            <div className="text-xl">M2X Sent</div>
                            <div className="border border-red-600 text-xl md:textlg rounded-lg py-2 px-4 bg-accent/30">{overview?.totalDebit} <span className="text-orange-400 font-bold">M2X</span></div>
                        </div>
                    </div>
                    <div className="font-bold flex flex-col border border-accent p-2 items-center justify-center gap-3">
                        <div className="text-2xl">M2X Balance</div>
                        <div className="border border-orange-400 text-2xl md:textlg rounded-lg py-2 px-4 bg-accent/30">{overview?.total} <span className="text-orange-400 font-bold">M2X</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default WalletOverview;
