"use client";
import { useWalletActions } from "@/store/wallet/walletAction";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GlobalInput from "./common/GlobalInput";
import GlobalButton from "./common/GlobalButton";
import { toast } from "react-toastify";

type Props = {};

const TransferCoin = (props: Props) => {
    const { transferCoins, getTransactionHistory } = useWalletActions();

    const formik = useFormik({
        initialValues: {
            walletAddress: "",
        },
        validationSchema: Yup.object({
            walletAddress: Yup.string()
                .required("M2X wallet address is required")
                .matches(/^0x[a-fA-F0-9]{40}$/, "Invalid M2X wallet address"),
            amount: Yup.number()
                .required("Amount is required")
                .positive("Amount must be positive") // Ensures the amount is positive
                .typeError("Amount must be a number"),
        }),
        onSubmit: async (values: any) => {
            setLoading(true);
            const login = await transferCoins(values);
            setLoading(false);
            if (!login.status) {
                toast.error(login.message);
            } else {
                toast.success("Trsnsfer successfull");
                getTransactionHistory({ page: 1 });
                formik.resetForm();
            }
        },
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full p-10 border border-orange-300 mt-6 rounded-lg bg-gradient-to-br from-bgPrimary to-accent/30">
            <h2 className="text-center w-full flex font-bold text-3xl mb-10">
                Transfer
            </h2>
            <div className="flex w-full gap-2 justify-center">
                <div className="w-[80%]">
                    <input
                        type="text"
                        name="walletAddress"
                        placeholder="Enter wallet Address"
                        value={formik.values.walletAddress}
                        onChange={formik.handleChange}
                        className={`rounded-md w-full border border-accent h-16 text-xl bg-transparent px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:shadow-md ${
                            formik.errors.walletAddress
                                ? "border-red-500"
                                : "focus:shadow-accent"
                        }`}
                    />
                    {formik.errors.walletAddress && (
                        <p className="my-2 text-red-500 text-lg">
                            {String(formik.errors.walletAddress)}
                        </p>
                    )}
                    <input
                        type="number"
                        name="amount"
                        placeholder="Enter Amount"
                        value={formik.values.amount}
                        onChange={formik.handleChange}
                        className={`rounded-md w-full border mt-2 border-accent h-16 text-xl bg-transparent px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:shadow-md ${
                            formik.errors.amount
                                ? "border-red-500"
                                : "focus:shadow-accent"
                        }`}
                    />
                    {formik.errors.amount && (
                        <p className="my-2 text-red-500 text-lg">
                            {String(formik.errors.amount)}
                        </p>
                    )}
                    <div className="flex-1 h-full mt-3">
                        <GlobalButton
                            text="Send"
                            className="!text-2xl"
                            loading={loading}
                            // onClick={formik.handleSubmit}
                            onClick={() =>
                                toast.success("Trsnsfer successfull")
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransferCoin;
