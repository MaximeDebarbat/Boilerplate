
import Generic from "@components/inputs/generic";

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
 * @param {object} props - Other input props
 *
 * @returns {JSX.Element} The rendered TextInput component
 */

const TextInput = ({
    label,              // Main label above input
    topRightLabel,      // Top right label
    bottomLeftLabel,    // Bottom left label
    bottomRightLabel,   // Bottom right label
    borderColor = "",   // Border color (e.g., "input-primary", "input-secondary")
    error = false,      // Error state to toggle error styling
    infoMessage = "",   // Message below input, can be error/info text
    elementLeft,        // Element (icon, etc.) on the left side
    elementRight,       // Element (icon, etc.) on the right side
    className = "",     // Additional classes for the input
    ...props            // Other input props
}) => {
    return(
        <Generic
            label={label}
            topRightLabel={topRightLabel}
            bottomLeftLabel={bottomLeftLabel}
            bottomRightLabel={bottomRightLabel}
            borderColor={borderColor}
            error={error}
            infoMessage={infoMessage}
            elementLeft={elementLeft}
            elementRight={elementRight}
            className={className}
            {...props}
        >

            <label
                className={`input ${error ? "input-error" : borderColor} input-bordered flex items-center gap-2`}
            >
                {elementLeft && <span>{elementLeft}</span>}
                <input
                    type="text"
                    className={`grow ${className}`}
                    {...props}
                />
                {elementRight && <span>{elementRight}</span>}
            </label>
        </Generic>
    )
}

export default TextInput;