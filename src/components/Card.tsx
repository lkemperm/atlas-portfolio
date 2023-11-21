import React from 'react';
import './card.css'
import Projects from './Projects'


const Card = () => {


    return (
        <div className='card'>
            <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', flexWrap: 'wrap'
            }}>
                <div>
                    <Projects />
                </div>
            </div>
        </div >
    )
}
export default Card;