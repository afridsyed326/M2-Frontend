import { Pagination, Stack } from "@mui/material";
type PaginationButtonsProps = {
    count: any;
    totalPage?: number; // Add this line
    onChange: any;
    paginationPosition?: "center" | "right";
};

export default function PaginationButtons({
    onChange,
    totalPage,
    paginationPosition = "center",
}: PaginationButtonsProps): JSX.Element {
    const position =
        paginationPosition === "center" ? "justify-center" : "flex justify-end";

    return (
        <div className={`flex ${position}`}>
            <div className="flex justify-center p-1 space-x-1 rounded-lg">
                {totalPage !== 1 && (
                    <Pagination
                        count={totalPage}
                        shape="rounded"
                        onChange={(e, page: number) => onChange(page)}
                        sx={{
                            ".Mui-selected": {
                                backgroundColor: "rgba(38, 165, 255, 0.16)",
                                color: "#26A5FF",
                            },
                            ".Mui-selected:hover": {
                                backgroundColor: "rgba(38, 165, 255, 0.8)",
                                color: "#fff",
                            },
                        }}
                    />
                )}
            </div>
        </div>
    );
}
