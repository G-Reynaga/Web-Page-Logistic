import React from 'react';

interface ErrorMessageProps {
    field: string;
    error: (field: string) => string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ field, error }) => {
    const errorMessage = error(field);

    if (!errorMessage) return null;

    return (
        <div aria-live="polite" aria-atomic="true">
            <p className="text-sm text-red-500">
                {errorMessage}
            </p>
        </div>
    );
};

export default ErrorMessage;
