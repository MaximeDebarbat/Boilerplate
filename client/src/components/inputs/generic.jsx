
import React from "react";

/**
 * TextInput component
 *
 * @param {string} label - Main label above input
 * @param {string} topRightLabel - Top right label
 * @param {string} bottomLeftLabel - Bottom left label
 * @param {string} bottomRightLabel - Bottom right label
 * @param {string} [borderColor=""] - Border color (e.g., "input-primary", "input-secondary")
 * @param {boolean} [error=false] - Error state to toggle error styling
 * @param {string} [infoMessage=""] - Message below input, can be error/info text
 * @param {React.ReactNode} elementLeft - Element (icon, etc.) on the left side
 * @param {React.ReactNode} elementRight - Element (icon, etc.) on the right side
 * @param {string} [className=""] - Additional classes for the input
 * @param {object} children - Other input props
 * @param {object} props - Other input props
 *
 * @returns {JSX.Element} The rendered TextInput component
 */

const Generic = ({
    label,              // Main label above input
    topRightLabel,      // Top right label
    bottomLeftLabel,    // Bottom left label
    bottomRightLabel,   // Bottom right label
    borderColor = "",   // Border color (e.g., "input-primary", "input-secondary")
    error = false,      // Error state to toggle error styling
    infoMessage = "",   // Message below input, can be error/info text
    elementLeft,        // Element (icon, etc.) on the left side
    elementRight,       // Element (icon, etc.) on the right side
    children,           // Children
}) => {
    return (
        <div className="form-control w-full max-w-xs">
            {/* Top label section */}
            {label && (
                <div className="label">
                    <span className="label-text">{label}</span>
                    {topRightLabel && <span className="label-text-alt">{topRightLabel}</span>}
                </div>
            )}

            {children}

            {/* Bottom label section */}
            {(bottomLeftLabel || bottomRightLabel) && (
                <div className="label">
                    {bottomLeftLabel && <span className="label-text-alt">{bottomLeftLabel}</span>}
                    {bottomRightLabel && <span className="label-text-alt">{bottomRightLabel}</span>}
                </div>
            )}

            {/* Info or error message below input */}
            {infoMessage && (
                <div className={`text-sm mt-1 ${error ? "text-error" : "text-info"}`}>
                    {infoMessage}
                </div>
            )}
        </div>
    );
};

export default Generic;