import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15611.007656526188!2d-77.0707801!3d-11.9916606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2b50f7978c91081!2sMunicipalidad+Distrital+de+Los+Olivos!5e0!3m2!1ses!2spe!4v1535513030505"
                width="100%"
                height="500px"
                frameBorder="0"
                style={{border:"0"}}
                allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;