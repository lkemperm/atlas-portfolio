import './card.css'
import '../App.css';
import './block.css'
import PersonalTimeline from './PersonalTimeline';

import ProjectList from './ProjectList';
import React from "react";
import projectList from '../projectList.json';
import timelineItems from '../timelineItems.json';


const Card = () => {


    return (
        <div className='card'>
            <div style={{ display: 'inline-block', flexDirection: 'row', alignItems: 'flex-start', boxSizing: 'border-box', flexWrap: 'wrap' }}>
                <PersonalTimeline timelineItems={timelineItems}></PersonalTimeline>
                <ProjectList projects={projectList}></ProjectList>
            </div >
        </div >
    )
}
export default Card;