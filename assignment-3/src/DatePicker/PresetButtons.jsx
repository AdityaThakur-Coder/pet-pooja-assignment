
import PropTypes from "prop-types";

const PresetButtons = ({ selectedPreset, onPresetClick, styles }) => {
    const presets = ["Today", "Yesterday", "This Month", "Last Month", "Custom Range"];

    return (
        <div style={{ display: "flex", gap: "8px" }}>
            {presets.map((preset) => (
                <button
                    key={preset}
                    onClick={() => onPresetClick(preset)}
                    style={{
                        ...styles.button,
                        backgroundColor:
                            selectedPreset === preset
                                ? styles.activeButton.bgColor
                                : styles.button.bgColor,
                        color:
                            selectedPreset === preset
                                ? styles.activeButton.color
                                : styles.button.color,
                    }}
                >
                    {preset}
                </button>
            ))}
        </div>
    );
};

// Define prop types for the component
PresetButtons.propTypes = {
    selectedPreset: PropTypes.string.isRequired,
    onPresetClick: PropTypes.func.isRequired,
    styles: PropTypes.shape({
        button: PropTypes.shape({
            bgColor: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired,
        activeButton: PropTypes.shape({
            bgColor: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PresetButtons;
