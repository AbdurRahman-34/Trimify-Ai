import { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {

    const [sliderPosition, setSliderPostion] = useState(50)

    const handelSliderChange = (e) => {
        setSliderPostion(e.target.value)
    }

    return (
        <div>
           <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">Remove Background With Heigh<br /> Quality And Accuracy</h2>
         
          <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
            {/* Original image */}
            <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />

            {/* Foreground Image */}
            <img className="absolute top-0 left-0 w-full h-full " src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${sliderPosition}%)`}} alt="" />

            {/* Slider */}
            <input type="range" min={0} max={100} value={sliderPosition} onChange={handelSliderChange}/>
          </div>
        </div>
    );
};

export default BgSlider;