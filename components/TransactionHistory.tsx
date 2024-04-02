"use client";
import React, { useEffect, useState } from "react";
import GlobalTable from "./Table/GlobalTable";
import { useWalletActions } from "@/store/wallet/walletAction";
import { useSelector } from "react-redux";
import { selectWallet } from "@/store/wallet/walletSlice";

type Props = {};

const TransactionHistory = (props: Props) => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const { transactions } = useSelector(selectWallet);

    const { getTransactionHistory } = useWalletActions();
    useEffect(() => {
        getTransactionHistory({ page });
    }, [page]);

    const headCells = [
        { id: "id", label: "#", dataClass: "w-12" },
        { id: "type", label: "Type", dataClass: "w-20" },
        { id: "direction", label: "Direction", dataClass: "w-24" },
        { id: "fee", label: "Fee", dataClass: "w-12" },
        { id: "hash", label: "Hash", dataClass: "w-38" },
        { id: "amount", label: "Amount", dataClass: "max-w-32" },
        { id: "createdAt", label: "Date", dataClass: "w-32 text-center" },
    ];

    const rows = transactions.result.map((_data: any) => ({
        ..._data,
        direction: (
            <span
                className={`font-bold ${
                    _data.direction === "DEBIT"
                        ? "text-red-500"
                        : "text-green-500"
                }`}
            >
                {_data.direction}
            </span>
        ),
    }));

    return (
        <div className="w-full p-10 border border-orange-300 mt-6 rounded-lg bg-gradient-to-br from-bgPrimary to-accent/30">
            <h2 className="text-center w-full flex font-bold text-3xl mb-10">
                Transaction History
            </h2>
            <GlobalTable
                rows={rows}
                headCells={headCells}
                isLoading={loading}
                page={page}
                handlePageChange={setPage}
                totalPages={Math.abs(transactions.totalObjects / 10)}
            />
        </div>
    );
};

export default TransactionHistory;
