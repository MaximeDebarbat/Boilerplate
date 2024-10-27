
import { useUI } from '@/context/UIContext';


const AlertBase = ({ message, description, rightElement, iconPath, className, remainingTime }) => {

    const { hideAlert } = useUI();

    return (
        <div 
            role="alert" 
            className={`alert ${className} fixed top-0 left-0 right-0 
                       mt-4 max-w-md mx-auto shadow-lg mx-4
                       flex items-center space-x-2 p-4`} 
            style={{ zIndex: 1000 }}
            onClick={hideAlert}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={iconPath}
                ></path>
            </svg>
            <div className="flex-1">
                {description ? (
                    <>
                        <h3 className="font-bold">{message}</h3>
                        <div className="text-xs">{description}</div>
                    </>
                ) : (
                    <span>{message}</span>
                )}
            </div>
            {rightElement && <div onClick={(e)=>e.stopPropagation()}>{rightElement}</div>}
        </div>
    );
};


const alertTypes = {
    info: {
        className: "alert-info",
        iconPath: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    success: {
        className: "alert-success",
        iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    warning: {
        className: "alert-warning",
        iconPath: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    },
    error: {
        className: "alert-error",
        iconPath: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
    },
};

export const Alert = ({ type = "info", message, description, rightElement, remainingTime }) => {
    const { className, iconPath } = alertTypes[type] || alertTypes.info;

    return (
        <AlertBase
            message={message}
            description={description}
            rightElement={rightElement}
            className={className}
            iconPath={iconPath}
            remainingTime={remainingTime}
        />
    );
};
