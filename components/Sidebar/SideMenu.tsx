import React from "react";
import { Page } from "./appRoutes";

type Props = {
    pages: Page[];
    subPageActive: string;
    currentPage: string;
    mainMenuClickHandler: (page: Page) => void;
    subMenuClickHandler: (subPage: Page) => void;
};

const SideMenu = ({
    pages,
    subPageActive,
    currentPage,
    mainMenuClickHandler,
    subMenuClickHandler,
}: Props) => {
    return (
        <div className="text-white">
            {pages.map((page, index) => (
                <ul key={index}>
                    <li
                        className={`cursor-pointer border-b border-accent/50 p-1 relative rounded-sm mx-3 mb-2 hover:bg-accent/35 hover:text-gray-300 !justify-between flex items-center gap-6 ${
                            currentPage === page.key
                                ? "bg-primary before:content-[''] before:absolute before:h-[75%] before:bg-secondary before:w-[6px] before:left-0 before:rounded-e-md"
                                : "hover:bg-accent"
                        }`}
                        onClick={() => {
                            mainMenuClickHandler(page);
                        }}
                    >
                        <div className="h-11 flex items-center">
                            <i className="w-8 p-2 rounded-full mx-2">
                                {page.icon}
                            </i>
                            <span className="">{page.label}</span>
                        </div>
                        {page.subPages && (
                            <div className="text-lg">
                                {subPageActive === page.key ? "->" : "<-"}
                            </div>
                        )}
                    </li>
                    {page.subPages && (
                        <ul
                            className={`text-white text-sm mr-4 ml-10 border-l transition-all ease-in-out delay-150 rounded-sm border-accent/50 ${
                                subPageActive === page.key
                                    ? "transitioning-ul"
                                    : "hidden-ul"
                            }`}
                        >
                            {page.subPages.map((subPage, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer my-1 mb-2 py-3 rounded-lg relative text-xs hover:bg-accent/35 hover:text-gray-300 flex items-center gap-3 ${
                                        currentPage === subPage.key
                                            ? "bg-primary before:content-[''] before:absolute before:h-[65%] before:bg-secondary before:w-[4px] before:left-0 before:rounded-e-md"
                                            : "hover:bg-accent/35"
                                    }`}
                                    onClick={() => subMenuClickHandler(subPage)}
                                >
                                    <i className="w-8 p-2 rounded-full mx-2">
                                        {subPage.icon}
                                    </i>
                                    <span className="">{subPage.label}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </ul>
            ))}
        </div>
    );
};

export default SideMenu;
