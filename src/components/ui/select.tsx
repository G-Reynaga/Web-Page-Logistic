import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface Option {
    value: string;
    label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className, options, ...props }, ref) => {

        return (
            <div className="relative">
                <select
                    ref={ref}
                    className={cn(
                        "appearance-none flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-gray-600 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    defaultValue=""
                    {...props}
                >
                    <option value="" hidden>
                        Seleccione una opción
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    className={cn(
                        "absolute top-1/2 transform -translate-y-1/2 right-3 pointer-events-none transition-transform duration-300",
                    )}
                />
            </div>
        );
    }
);

Select.displayName = "Select";

export { Select };
