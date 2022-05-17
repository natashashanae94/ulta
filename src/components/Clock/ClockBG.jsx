import React from 'react';

const ClockBG = ({bg}) => { 

    let url = "";
    return(
        <>
            <div className="projects__panel projects__panel__left"></div>
            <div className="projects__panel projects__panel__right"></div>
            <div className="projects">

                {bg.map((hour, index) => (
                        
                    <React.Fragment key={index}>
                        <article className={"project w-xs-100 h-xs-100 clearfix " + hour.name}>
                            <div className="project__panel project__content w-xs-50 h-xs-100 color-white" style={{ backgroundColor: `${hour.bgColor}` }}>
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
                            <div className="project__panel project__thumbnail w-xs-50 h-xs-100 overflow-hidden">
                                <a href={url}>
                                    <div className="project__thumbnail__image w-xs-100 h-xs-100 background-cover lazypreload lazyloaded" style={{ backgroundImage: `url("${process.env.PUBLIC_URL}${hour.bg}")`}}></div>
                                </a>
                            </div>
                        </article>
                    </React.Fragment>
           
                ))}

            </div>
        </>
    );
}


export default ClockBG;