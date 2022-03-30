import React, { useEffect, useState, useRef } from 'react';

//stylesheets
import '../../assets/css/_circlebar.scss';

const ClockBG = (bg) => { 
    return(
        <>
            <div class="projects__panel projects__panel__left"></div>
            <div class="projects__panel projects__panel__right"></div>

            {bg.map((hour, index) => ( 
                <React.Fragment key={index}>
                    <article data-bgset={hour.bg}></article>
                </React.Fragment>
            ))}
        </>
    );
}


export default ClockBG;