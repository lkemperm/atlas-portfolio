
import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const PersonalTimeline = (props: { timelineItems: any; }) => {
    const createTimeline = () => {
        const { timelineItems } = props;
        return <Timeline id='timeline'
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}
        >
            {timelineItems.map((timelineItem: any) => (

                timelineItem.addConnector === false ? (<TimelineItem>
                    <TimelineOppositeContent color="textSecondary">
                        {timelineItem.year}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot></TimelineDot>


                    </TimelineSeparator>
                    <TimelineContent>{timelineItem.contents}</TimelineContent>
                </TimelineItem>) : (
                    <TimelineItem>
                        <TimelineOppositeContent color="textSecondary">
                            {timelineItem.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot></TimelineDot>
                            <TimelineConnector></TimelineConnector>


                        </TimelineSeparator>
                        <TimelineContent>{timelineItem.contents}</TimelineContent>
                    </TimelineItem>


                )


            ))}
        </Timeline>
    }
    return createTimeline();
}

export default PersonalTimeline;