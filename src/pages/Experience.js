import React, { useState, useEffect }from 'react';
import { getExperience } from '../services/cvService';

export const Experience = () => {

    const lang = 'es';

    const [experiencias, setExperiencias] = useState([]);

    useEffect( () => {
        setExperiencias(getExperience(lang));
    }, [])

    return (
        <div>
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    {
                        experiencias.map( (exp, index) => {
                            return (
                            <div className="d-flex flex-column flex-md-row justify-content-between mb-5" key={exp.id}>
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{exp.title}</h3>
                                    <div className="subheading mb-3">{exp.company}</div>
                                    <p>{exp.description}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-primary"> { exp.since + ' - ' + exp.to}</span></div>
                            </div>)
                        })
                    }
                </div>
            </section>
        </div>
    )
}

{/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
<div className="flex-grow-1">
    <h3 className="mb-0">Web Developer</h3>
    <div className="subheading mb-3">Intelitec Solutions</div>
    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
</div>
<div className="flex-shrink-0"><span className="text-primary">December 2011 - March 2013</span></div>
</div>
<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
<div className="flex-grow-1">
    <h3 className="mb-0">Junior Web Designer</h3>
    <div className="subheading mb-3">Shout! Media Productions</div>
    <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
</div>
<div className="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
</div>
<div className="d-flex flex-column flex-md-row justify-content-between">
<div className="flex-grow-1">
    <h3 className="mb-0">Web Design Intern</h3>
    <div className="subheading mb-3">Shout! Media Productions</div>
    <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
</div>
<div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
</div> */}

