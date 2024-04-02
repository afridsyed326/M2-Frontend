import { Pagination, Skeleton, Tooltip } from "@mui/material";
import NoData from "./NoData";
// import PaginationButtons from './PaginationButtons';

type Props = {
    rows: any[];
    isLoading: boolean | undefined;
    headCells: {
        id: string;
        label: string;
        dataClass?: string;
        headCellClass?: string;
        rowDataClass?: string;
        showToolTip?: boolean;
    }[];
    totalPages?: number;
    handlePageChange?: (num: number) => void;
    tableTitle?: string;
    page?: number;
    paginate?: boolean;
};

const GlobalTable = ({
    rows = [],
    isLoading,
    headCells = [],
    handlePageChange,
    totalPages,
    page,
    paginate = true,
}: Props) => {
    return (
        <div className="main-card !rounded-md !bg-accent/20 backdrop-blur-md p-4">
            <div className="h-full">
                <div className="hidden lg:flex items-center gap-2 overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr
                                className={`${
                                    rows.length > 0
                                        ? "text-white"
                                        : "text-textSecondary"
                                } w-full text-left`}
                            >
                                {headCells.map((cell, index) => (
                                    <th
                                        key={index}
                                        className={`py-4 px-2 hidden md:table-cell font-semibold sm:text-xs xl:text-sm ${cell.dataClass} ${cell.headCellClass}`}
                                    >
                                        {cell.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {isLoading ? (
                            <tbody>
                                <tr className="font-medium text-sm w-full border-b border-secondary">
                                    {headCells.map((_, index) => (
                                        <td
                                            key={index}
                                            className="table-cell font-medium text-xs text-textSecondary w-1/5 py-3"
                                        >
                                            <Skeleton
                                                variant="rounded"
                                                width={"80%"}
                                                height={20}
                                                animation={"wave"}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        ) : (
                            <>
                                <tbody>
                                    {rows.map((row, index) => {
                                        return (
                                            <tr
                                                key={index}
                                                className="font-medium text-sm w-full border-b border-secondary"
                                            >
                                                {headCells.map(
                                                    (cell, index) => (
                                                        <td
                                                            key={index}
                                                            className={`table-cell font-medium text-xs text-textSecondary py-4 px-2 topup ${cell.rowDataClass} ${cell.dataClass}`}
                                                        >
                                                            {row[cell.id]}
                                                        </td>
                                                    )
                                                )}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </>
                        )}
                    </table>
                </div>

                <div className="flex lg:hidden flex-col gap-3">
                    <div className="flex flex-col gap-4 w-full text-white text-xs">
                        {isLoading &&
                            headCells.map((cell, index) => (
                                <div
                                    key={index}
                                    className="w-full flex items-center"
                                >
                                    <div className="w-1/3">{cell.label}:</div>
                                    <div className="w-2/3">
                                        <Skeleton
                                            variant="rounded"
                                            height={20}
                                            animation={"wave"}
                                        />
                                    </div>
                                </div>
                            ))}
                        {rows.map((row, index) => (
                            <div key={index}>
                                {headCells.map((cell, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex items-center mt-3"
                                    >
                                        <div className="w-1/3">
                                            {cell.label}:
                                        </div>
                                        <div className="w-2/3">
                                            {row[cell.id]}
                                        </div>
                                    </div>
                                ))}
                                <hr className="text-white my-3" />
                            </div>
                        ))}
                    </div>
                </div>
                <NoData visible={rows.length < 1 && !isLoading} />
            </div>
            <div className="mt-3 flex justify-center">
                {rows.length > 0 && paginate && (
                    <Pagination
                        shape="rounded"
                        count={totalPages}
                        page={page}
                        onChange={(_: any, value: any) => {
                            handlePageChange && handlePageChange(value);
                        }}
                        sx={{
                            ".Mui-selected": {
                                backgroundColor: "rgba(148, 38, 117, 0.4)",
                                border: "1px solid rgba(148, 38, 117, 1)",
                                color: "#FFF",
                            },
                            ".Mui-selected:hover": {
                                backgroundColor: "rgba(148, 38, 117, 0.8)",
                                color: "#fff",
                            },
                            ".MuiPaginationItem-previousNext": {
                                color: "#FFF",
                            },
                            ".MuiPaginationItem-page": {
                                color: "#FFF",
                            },
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default GlobalTable;
