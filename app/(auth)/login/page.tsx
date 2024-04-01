"use client";
import GlobalInput from "@/components/common/GlobalInput";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GlobalButton from "@/components/common/GlobalButton";
import Image from "next/image";
import { logo } from "@/images";
import { userLogin } from "@/apiActions/authActions";
import { toast } from "react-toastify";
import { useRouter, usePathname } from "next/navigation";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            username: "afridsyed326",
            password: "Abcd123!",
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required")
                .min(5, "Username must be at least 5 characters"),
            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),
        }),
        onSubmit: async (values: any) => {
            setLoading(true);
            const login = await userLogin(values);
            setLoading(false);
            console.log(login.status);
            if (!login.status) {
                toast.error(login.data.message);
            } else {
                toast.success("Login successfull");
                router.push("/");
            }
        },
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className="border rounded-lg p-5 ">
            <div className="w-full text-center font-bold text-2xl py-5">
                Login
            </div>
            <div className="grid grid-cols-1 gap-5">
                <div>
                    <GlobalInput
                        label="Username/Email"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.username && formik.errors.username
                        }
                    />
                </div>
                <div>
                    <GlobalInput
                        label="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password && formik.errors.password
                        }
                        type="password"
                    />
                </div>
                <GlobalButton
                    text="Login"
                    onClick={formik.handleSubmit}
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default Page;
