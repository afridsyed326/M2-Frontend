"use client";
import React, { useEffect, useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import { logo } from "@/images";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/user/userSlice";

type Props = {
    drawerExpanded: boolean;
    toggleExpanded: () => void;
};

const Navbar = ({ drawerExpanded, toggleExpanded }: Props) => {
    const user = useSelector(selectUser);

    const [forceClient, setForceClient] = useState(true);

    useEffect(() => {
        setForceClient(false);
    }, []);

    if (forceClient) return <></>;

    return (
        <div
            className={`flex h-[80px] bg-gradient-to-br from-bgPrimary to-accent md:to-accent/30 border-b border-accent relative shadow-lg justify-between transition-all items-center text-3xl font-bold ${
                drawerExpanded && "sm:ml-60"
            }`}
        >
            <div className={`md:hidden px-4`}>
                <Image src={logo} alt={""} width={90} height={30} />
            </div>
            <span className="mx-4">Hi {user.firstName}!</span>
            <div className="mx-4 text-2xl" onClick={toggleExpanded}>
                <CgMenuLeftAlt />
            </div>
        </div>
    );
};

export default Navbar;
