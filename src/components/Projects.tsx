import '../App.css';
import './block.css'
import './card.css'
import Timeline from '@mui/lab/Timeline';

import ProjectList from './ProjectList';
import React from "react";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import projectList from '../projectList.json';


export default function Projects() {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', boxSizing: 'border-box', flexWrap: 'wrap' }}>
            <div style={{ alignSelf: 'center' }}>
                <Timeline id='timeline'
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                    }}
                >
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Graduated from University of Rochester</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            2018
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Started Healthcare + Tech Career</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{ fontFamily: 'Josefin Sans !important' }}>Journey into Civic Tech</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>Started Graduate School @ CU Boulder</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <ProjectList projects={projectList}></ProjectList>
        </div >
    );
}