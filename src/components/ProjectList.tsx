import React, { useState } from "react";
import Project from "./Project";
import { Box } from '@mui/system';
import { HexGrid, Layout, Pattern } from 'react-hexgrid';
import ProjectCard from './ProjectCard';

const ProjectList = (props: { projects: any; }) => {
    const [selectedIndex, setSelectedIndex] = useState({});

    let getSelectedProjectDetails = function (): any {
        const { projects } = props;
        const index = parseInt(JSON.stringify(selectedIndex));
        if (index >= 0) {
            return <ProjectCard project={projects[index]}></ProjectCard>
        } else {
            return <p>Click on a project icon to learn more!</p>
        }
    }

    const createProjects = () => {
        const { projects } = props;
        return <div className='project-card'>
            {
                <div>{
                    <HexGrid viewBox="-45 -40 75 75" width={"100%"} className='svg-container'>{
                        <Layout size={{ x: 10, y: 11 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>{
                            projects.map(
                                (project: any, projectIndex: any) => {
                                    return (
                                        <Project
                                            rIndex={project.rIndex}
                                            sIndex={project.sIndex}
                                            name={project.name}
                                            id={project.id}
                                            links={project.links}
                                            qIndex={project.qIndex}
                                            selectedIndex={selectedIndex}
                                            projectIndex={projectIndex}
                                            setSelectedIndex={setSelectedIndex}
                                        />
                                    );
                                }
                            )
                        }
                        </Layout>
                    }
                        {projects.map((project: any) => (
                            <Pattern id={project.id} link={project.image}></Pattern>
                        ))}
                    </HexGrid>
                }</div>
            }

            <div style={{ width: '50%', height: '50%', alignSelf: 'center' }}>
                <Box component="section" sx={{
                    backgroundColor: '#cab99d',
                    p: 2, border: '1px dashed grey',
                    display: 'flex', textAlign: 'center', fontSize: '1rem'
                }}>
                    <div style={{ color: "rgba(17, 9, 2, 0.658)" }}>
                        {getSelectedProjectDetails()}
                    </div>
                </Box>
            </div>
        </div >;
    };
    return createProjects();
};

export default ProjectList;