import { LuLayoutDashboard } from "react-icons/lu";
export interface Page {
    label?: string;
    icon?: JSX.Element;
    path: string;
    key: string;
    subPages?: Page[];
}

export const pages: Page[] = [
    {
        label: "Dashboard",
        icon: <LuLayoutDashboard />,
        path: "/",
        key: "dashboard",
    },
];
