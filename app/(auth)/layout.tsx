import { authBg, logo } from "@/images";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

import React from "react";
import AuthRedirect from "@/components/common/AuthRedirect";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <AuthRedirect>
            <div className="w-full h-screen flex items-center">
                <ToastContainer
                    autoClose={1000}
                    hideProgressBar={true}
                    theme="dark"
                />
                <div
                    className="hidden relative lg:flex flex-col h-full bg-cover bg-center w-[50vw]"
                    style={{ backgroundImage: `url(${authBg})` }}
                >
                    <div className="flex h-full items-center px-28 xl:px-32 lg:px-28 md:px-16 py-10 pb-16 2xl:pb-28 flex-col justify-between">
                        <div className="">
                            <div className="text-[48px] leading-[3.4rem]">
                                <div className="pt-28">
                                    <Image
                                        src={logo}
                                        alt={""}
                                        width={180}
                                        height={45}
                                    />
                                </div>
                                <h2 className="font-extralight">
                                    <span className="font-rajdhani">
                                        Token{" "}
                                    </span>
                                    <span className="font-medium">
                                        exchance
                                    </span>
                                </h2>
                            </div>
                            <div className="mt-3  text-lg ">
                                Discover the world&apos;s best community of
                                influencers tutorials and videos
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex-1 flex items-center justify-center h-full overflow-auto bg-cover bg-center bg-bgPrimary">
                    <div className="flex justify-center items-center flex-col w-full">
                        {children}
                    </div>
                </div>
            </div>
        </AuthRedirect>
    );
}
