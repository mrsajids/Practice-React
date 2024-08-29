import { useState } from "react";
import "./style.css"
const TabSlider = () => {
    const [activelink, setActiveLink] = useState(1);

    const leave_slider_data = [
        {
            label: 'Leave Details',
            //   icon: svg1//,
            value: 0
        },
        {
            label: 'Add Leave',
            //  icon: svg2,
            value: 1
        }
    ];

    function handleLinkClick(key) {
        setActiveLink(key);
    }
    return (
        <>
        <div className="row">
            <div className="col-md-6">
        <div className={`tabs active-glide-${activelink + 1}`}>
            {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
                <div
                    key={index}
                    className={`tab ${activelink === index ? "active" : ""}`}
                    onClick={() => handleLinkClick(index)}
                >
                    {tab}
                </div>
            ))}
            <div className="glider"></div>
        </div>
                
            </div>
        </div>
        </>
    )
}
export default TabSlider