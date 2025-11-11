import * as Icons from "lucide-react";

// Create a mapping of icon names to their components
const iconMap = {};

// Dynamically populate the iconMap with all available icons from lucide-react
Object.keys(Icons).forEach((key) => {
    if (typeof Icons[key] === "function" && key[0] === key[0].toUpperCase()) {
        iconMap[key] = Icons[key];
    }
});

/**
 * Get icon component by name
 * @param {string} iconName - The name of the icon (e.g., "Bell", "Clock")
 * @returns {React.Component|null} - The icon component or null if not found
 */
export function getIconComponent(iconName) {
    return iconMap[iconName] || null;
}

export default iconMap;
