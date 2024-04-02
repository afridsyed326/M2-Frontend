"use client";
import GlobalInput from "@/components/common/GlobalInput";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import GlobalButton from "@/components/common/GlobalButton";
import Image from "next/image";
import { logo } from "@/images";
import { toast } from "react-toastify";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useUserActions } from "@/store/user/userAction";

type Props = {};

const Page = (props: Props) => {
    const router = useRouter();
    const { userRegister } = useUserActions();
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required("Username is required")
                .min(3, "Username must be at least 3 characters")
                .max(20, "Username must not exceed 20 characters")
                .matches(
                    /^[a-zA-Z0-9_]+$/,
                    "Username can only contain letters, numbers, and underscores"
                ),

            email: Yup.string()
                .required("Email is required")
                .email("Invalid email address"),

            password: Yup.string()
                .required("Password is required")
                .min(8, "Password must be at least 8 characters"),

            confirmPassword: Yup.string().required(
                "Please confirm your password"
            ),

            firstName: Yup.string().required("First name is required"),

            lastName: Yup.string().required("Last name is required"),
        }),
        onSubmit: async (values: any) => {
            setLoading(true);
            const register = await userRegister(values);
            setLoading(false);
            if (!register.status) {
                toast.error(register.message);
            } else {
                toast.success("Registration successfull");
                router.push("/login");
            }
        },
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className="flex w-full justify-center items-center p-10 h-full">
            <div className="p-5 mt-10 w-full max-w-[30rem]">
                <div className="w-full text-center font-bold text-2xl py-5">
                    Sign Up
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <div>
                        <GlobalInput
                            label="Username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.username &&
                                formik.errors.username
                            }
                        />
                    </div>
                    <div>
                        <GlobalInput
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && formik.errors.email}
                        />
                    </div>
                    <div>
                        <GlobalInput
                            label="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            type="password"
                        />
                    </div>
                    <div>
                        <GlobalInput
                            label="Confirm Password"
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.confirmPassword &&
                                formik.errors.confirmPassword
                            }
                            type="password"
                        />
                    </div>
                    <div>
                        <GlobalInput
                            label="First Name"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.firstName &&
                                formik.errors.firstName
                            }
                        />
                    </div>
                    <div>
                        <GlobalInput
                            label="Last Name"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.lastName &&
                                formik.errors.lastName
                            }
                        />
                    </div>
                    <GlobalButton
                        text="Sign Up"
                        onClick={formik.handleSubmit}
                        loading={loading}
                    />
                    <div className="flex justify-center">
                        Already have an account?{" "}
                        <Link href="/login">
                            <span className="text-blue-500 ml-2">Sign in</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
