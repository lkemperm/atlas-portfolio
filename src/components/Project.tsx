import React, { useState, useEffect } from "react";
import { Hexagon } from 'react-hexgrid';

const Project = (props:
    {
        selectedIndex: unknown;
        projectIndex: any;
        qIndex: any,
        rIndex: any,
        sIndex: any,
        name: string,
        id: string,
        links: any,
        setSelectedIndex: (arg0: any) => any
    }) => {
    const [selected, setSelected] = useState(false);

    const styles = {
        strokeWidth: selected ? "5" : "0.1",
    };

    useEffect(() => {
        if (props.selectedIndex === props.projectIndex) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props.selectedIndex]);


    useEffect(() => {
        if (props.selectedIndex === props.projectIndex) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [props.selectedIndex]);

    return (
        <Hexagon style={styles} q={props.qIndex} r={props.rIndex} s={props.sIndex} fill={props.id}
            onClick={() => props.setSelectedIndex(props.projectIndex)}
        />
    );
};

export default Project;