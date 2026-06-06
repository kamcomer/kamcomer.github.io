import React from 'react';
import { personalInfo } from '../config/personal';

const About = () => {
    return (<h1>
        Hey, I'm {personalInfo.name.split(' ')[0]}
    </h1>)
}

export default About;