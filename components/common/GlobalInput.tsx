import React from "react";
import { FieldProps } from "formik";

type Props = {
    label?: string;
    error?: any;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
};

const GlobalInput = ({
    label,
    error,
    name,
    value,
    onChange,
    type = "text",
}: Props) => {
    return (
        <div className="w-full">
            <div className="group relative">
                <label className="block w-full pb-1 text-sm font-medium text-white transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
                    {label}
                </label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`peer h-10 w-full border rounded-md bg-bgPrimary px-4 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:shadow-md ${error ? "border-red-500" : "focus:shadow-blue-400"
                        }`}
                />
                {error && <div className="text-red-500">{error}</div>}
            </div>
        </div>
    );
};

export default GlobalInput;
