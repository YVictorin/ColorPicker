import PropTypes from "prop-types"

export default function ColorPicker({ listOfColors, setColor, currentColor }) {

    const handleSelectedColor = (selectedColor) => {
        setColor(selectedColor);
    };

    const handleReset = () => {
        setColor('#E5E4E2');
    }
    
    return (
        <>        
            <div className="clr-elem-container">
         
                {listOfColors.map((eachColor, idx) => (
                    <div key={idx} className="clr-elem" style={{ backgroundColor: eachColor }} onClick={() => handleSelectedColor(eachColor)}></div>
                ))}
                <button className="reset-btn" onClick={handleReset}>Reset</button>
            </div>
            {/* this changes the color on the entire app */}
            <div className="color-display" style={{backgroundColor: currentColor}}></div>
        </>
    );
}


ColorPicker.propTypes = {
    listOfColors: PropTypes.array.isRequired
}