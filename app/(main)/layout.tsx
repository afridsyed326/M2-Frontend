"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import SideMenu from "@/components/Sidebar/SideMenu";
import Navbar from "@/components/navbar/Navbar";
import { BeatLoader, PuffLoader, RingLoader } from "react-spinners";
import { Page, pages } from "@/components/Sidebar/appRoutes";
import AuthRedirect from "@/components/common/AuthRedirect";
import { logo } from "@/images";
import GlobalButton from "@/components/common/GlobalButton";
import { removeAccessTokenCookie } from "@/utils/storage";
export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    const router = useRouter();

    const [currentPage, setCurrentPage] = useState<any>("dashboard");
    const [subPageActive, setSubPageActive] = useState("");
    const [drawerExpanded, setDrawerExpanded] = useState(true);
    const mainMenuClickHandler = (page: Page) => {
        if (!page.subPages) {
            setCurrentPage(page.key);
            setSubPageActive("");
            router.push(page.path);
        } else {
            setCurrentPage(page.key);
            if (subPageActive !== page.key) setSubPageActive(page.key);
            else setSubPageActive("");
        }
    };

    const subMenuClickHandler = (subPage: Page) => {
        setCurrentPage(subPage.key);
        router.push(subPage?.path);
    };

    const handleLogout = () => {
        removeAccessTokenCookie()
        router.push("/login");
    };
    const toggleExpanded = () => setDrawerExpanded((p) => !p);

    return (
        <AuthRedirect>
            <div>
                <div>
                    <div className="w-full h-screen flex">
                        <div
                            className={`absolute transition-all ease-in-out delay-150 top-0 left-0 w-64 z-50 sm:w-1/2  ${drawerExpanded ? "flex" : "hidden"
                                } md:w-60 h-full bg-gradient-to-br from-bgPrimary to-bgSecondary shadow sm:shadow-md md:shadow-lg lg:shadow-xl xl:shadow-2xl justify-between flex-col`}
                        >
                            <div>
                                <div
                                    className="flex justify-center m-4 relative h-16 items-center"
                                    onClick={() => {
                                        router.push("/");
                                    }}
                                >
                                    <div className="">
                                        <Image
                                            src={logo}
                                            alt={""}
                                            width={130}
                                            height={50}
                                        />
                                    </div>
                                </div>

                                <SideMenu
                                    pages={pages}
                                    currentPage={currentPage}
                                    subPageActive={subPageActive}
                                    mainMenuClickHandler={mainMenuClickHandler}
                                    subMenuClickHandler={subMenuClickHandler}
                                />
                            </div>
                            <div className="p-3">
                                <GlobalButton
                                    onClick={handleLogout}
                                    text="Logout"
                                />
                            </div>
                        </div>
                        <div className="w-full overflow-hidden">
                            <Navbar
                                drawerExpanded={drawerExpanded}
                                toggleExpanded={toggleExpanded}
                            />
                            <div
                                className={`bg-bgPrimary p-3 mt-[1px] h-[calc(100vh-80px)] overflow-auto ${drawerExpanded && "sm:ml-60"
                                    }`}
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthRedirect>
    );
}
