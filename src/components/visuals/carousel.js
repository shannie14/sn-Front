import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Pitch1 from "../../img/Pitch1.png"
import Pitch2 from "../../img/Pitch2.png"
import Pitch3 from "../../img/Pitch3.png"


var Carousel = require('react-responsive-carousel').Carousel;


const Pitch = () => {
    const onChange = () => { };
    const onClickItem = () => { };
    const onClickThumb = () => { };

    return (
        <Carousel
            showArrows={true}
            labels={true}
            showThumbs={false}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}>
            <div>
                <img src={Pitch1} alt="Qualify the lead" />
            </div>
            <div>
                <img src={Pitch2} alt="Qualify the lead" />
            </div>
            <div>
                <img src={Pitch3} alt="Qualify the lead" />
            </div>

        </Carousel>
    );
};
export default Pitch;