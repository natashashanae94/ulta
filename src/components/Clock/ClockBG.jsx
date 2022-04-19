import React from 'react';

//stylesheets
import '../../assets/css/_circlebar.scss';

const ClockBG = ({bg}) => { 

    let url = "";
    return(
        <>
            <div class="projects__panel projects__panel__left"></div>
            <div class="projects__panel projects__panel__right"></div>

            {bg.map((hour, index) => ( 
                <React.Fragment key={index}>
                    <article className="project w-xs-100 h-xs-100 clearfix" style={{ backgroundImage: `url("${hour.bg}")`}}>
                        <div className="project__panel project__content w-xs-50 h-xs-100 background--maison-grimaud color-white">
                            <div className="project__content__container display-xs-table w-xs-200 w-sm-100 h-xs-100">
                                <div className="display-xs-table-cell h-xs-100 valign-xs-middle valign-sm-bottom">
                                    <div className="project__content__inner display-md-inline-block text-xs-center text-sm-left">
                                        <div className="clock text-xs-center color-white project__clock visible-xs-block">
                                            <time className="clock__display">
                                                <div className="clock__display__hours"></div>
                                                <div className="clock__display__separator">h</div>
                                                <div className="clock__display__minutes"></div>
                                            </time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href={url}>
                            <div className="project__panel project__thumbnail" style={{ backgroundImage: `url("${hour.bg}")`}}></div>
                        </a>
                    </article>
                </React.Fragment>
            ))}
        </>
    );
}


export default ClockBG;