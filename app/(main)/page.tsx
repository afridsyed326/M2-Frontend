'use client';
import { coin, logo } from "@/images";
import { selectUser } from "@/store/user/userSlice";
import { useWalletActions } from "@/store/wallet/walletAction";
import Image from "next/image";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MdOutlineToken } from "react-icons/md";

type Props = {};

const page = (props: Props) => {

    const { getDashboardOverview } = useWalletActions();

    useEffect(() => {
        getDashboardOverview()
    }, [])

    const user = useSelector(selectUser);

    return <div>
        <div className="main-card !rounded-md">
            <div className="flex justify-between flex-col md:flex-row p-10 items-center">
                <div className="h-[80px] w-[80px] bg-accent rounded-full flex  justify-center items-center text-[4rem] drop-shadow-xl hover:drop-shadow-2xl shadow-accent">
                    <MdOutlineToken />
                </div>
                <div className="font-bold flex flex-col items-center justify-center gap-3">
                    <div className="text-xl">M2X Token Address</div>
                    <div className="border border-accent text-xs md:textlg rounded-lg py-2 px-4 bg-accent/50">{user?.walletAddress}</div>
                </div>
            </div>
        </div>
    </div>;
};

export default page;
