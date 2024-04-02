import React from "react";
import WalletOverview from "@/components/WalletOverview";
import TransferCoin from "@/components/TransferCoin";

type Props = {};

const page = (props: Props) => {

    return <div>
        <div className="rounded-lg border border-orange-400 px-8 py-5 bg-accent/30 my-5">
            <h2 className="font-bold text-center text-4xl">Welcome to M2X</h2>
        </div>
        <WalletOverview />
        <TransferCoin />
    </div>;
};

export default page;
