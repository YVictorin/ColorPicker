import PropTypes from "prop-types"
import { useState } from "react"

import ColorDisplay from "./ColorDisplay";

export default function ColorPicker() {
    const [color, setColor] = useState("#D3D3D3");

    function handleColorChange(e) {
        setColor(e.target.value);
    }

    return (
            <div className="container">
                <p className="title">Pick Your Color</p>
                <ColorDisplay color={color}/>
                    <input 
                        className="color-inputs" 
                        type="color" 
                        onChange={handleColorChange}
                    />
            </div>
    )
}

ColorPicker.propTypes = {
    amount: PropTypes.number
}