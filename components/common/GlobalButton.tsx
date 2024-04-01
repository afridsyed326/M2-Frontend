import React from "react";
import RingLoader from "react-spinners/RingLoader";

type Props = {
    text: string;
    onClick: () => void;
    loading?: boolean;
};

const GlobalButton = ({ text, onClick, loading }: Props) => {
    return (
        <div
            className="global-button cursor-pointer w-full flex justify-start text-center"
            onClick={onClick}
        >
            {loading ? (
                <div className="flex justify-center">
                    <RingLoader color="white" loading={loading} size={25} />
                </div>
            ) : (
                text
            )}
        </div>
    );
};

export default GlobalButton;
