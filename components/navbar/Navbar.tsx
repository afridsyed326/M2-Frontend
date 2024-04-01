import React from "react";

type Props = {
    drawerExpanded: boolean;
    toggleExpanded: () => void;
};

const Navbar = ({ drawerExpanded, toggleExpanded }: Props) => {
    return (
        <div
            className={`flex h-[80px] bg-bgSecondary border-b border-accent relative shadow-lg justify-end transition-all items-center text-3xl font-bold ${
                drawerExpanded && "sm:ml-60"
            }`}
        >
            <div
                className="absolute left-0 ml-2 text-4xl md:hidden"
                onClick={toggleExpanded}
            >
                M
            </div>
        </div>
    );
};

export default Navbar;
