import './card.css'
import '../App.css';
import './block.css'

import ProjectList from './ProjectList';
import React from "react";
import projectList from '../projectList.json';


const Card = () => {


    return (
        <div className='card'>
            <div style={{ display: 'inline-block', flexDirection: 'row', alignItems: 'center', boxSizing: 'border-box', flexWrap: 'wrap' }}>
                {/* <PersonalTimeline timelineItems={timelineItems}></PersonalTimeline> */}
                <ProjectList projects={projectList}></ProjectList>
            </div >
        </div >
    )
}
export default Card;