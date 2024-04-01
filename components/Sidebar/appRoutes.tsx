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
        // icon: <DashboardIcon />,
        path: "/",
        key: "dashboard",
    },
    {
        label: "Transaction",
        // icon: <SettingsIcon />,
        path: "/transaction",
        key: "transaction",
        subPages: [
            {
                label: "Transfer",
                // icon: <SupportAgentIcon fontSize="small" />,
                path: "/transfer",
                key: "transfer",
            },
            {
                label: "History",
                // icon: <SupportAgentIcon fontSize="small" />,
                path: "/history",
                key: "history",
            },
        ],
    },
];
