import PropTypes from "prop-types"

export default function ColorDisplay({ color }) {
    return (
        <div className="color-display" style={{ backgroundColor: color }}></div>
    )
}

ColorDisplay.PropTypes = {
    color: PropTypes.string
}