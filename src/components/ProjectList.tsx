import React, { useState } from "react";
import Project from "./Project";
import { Box } from '@mui/system';
import { HexGrid, Layout, Pattern } from 'react-hexgrid';


const ProjectList = (props: { projects: any; }) => {
    const [selectedIndex, setSelectedIndex] = useState({});

    let getSelectedProject = function (): any {
        const { projects } = props;
        const index = parseInt(JSON.stringify(selectedIndex));
        if (index >= 0) {
            let project = projects[index];
            return <HexGrid viewBox="-45 -40 55 55" width={"100%"} className='svg-container'>
                <Layout size={{ x: 10, y: 11 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
                    <Project
                        rIndex={0}
                        sIndex={1}
                        name={project.name}
                        qIndex={-2}
                        selectedIndex={selectedIndex}
                        projectIndex={-2}
                        setSelectedIndex={setSelectedIndex}
                    />
                </Layout>

            </HexGrid>
        }

    }

    let getSelectedProjectDetails = function (): any {
        const { projects } = props;
        const index = parseInt(JSON.stringify(selectedIndex));
        if (index >= 0) {
            return <div>
                <h1>{projects[index].name}</h1>
                {projects[index].description}
            </div>
        } else {
            return <p>Click on a project icon to learn more!</p>
        }
    }

    const createProjects = () => {
        const { projects } = props;
        return <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', alignItems: 'center', padding: '2.5rem' }}>
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
                            <Pattern id={project.name} link={project.image}></Pattern>
                        ))}
                    </HexGrid>
                }</div>
            }

            <div>
                <Box component="section" sx={{
                    backgroundColor: '#cab99d',
                    p: 2, border: '1px dashed grey', width: 600, height: 600, textOverflow: 'wrap', overflow: 'wrap', textAlign: 'center', fontSize: '1rem'
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