import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import Image from "next/image";
import { logo } from "@/images";

type Props = {
    drawerExpanded: boolean;
    toggleExpanded: () => void;
};

const Navbar = ({ drawerExpanded, toggleExpanded }: Props) => {
    return (
        <div
            className={`flex h-[80px] bg-bgSecondary border-b border-accent relative shadow-lg justify-between transition-all items-center text-3xl font-bold ${drawerExpanded && "sm:ml-60"
                }`}
        >
            <div className={`md:hidden px-4`}>
                <Image
                    src={logo}
                    alt={""}
                    width={90}
                    height={30}
                />
            </div>
            <div
                className="left-0 mx-2 text-4xl md:hidden"
                onClick={toggleExpanded}
            >
                <CgMenuLeftAlt />
            </div>
        </div>
    );
};

export default Navbar;
