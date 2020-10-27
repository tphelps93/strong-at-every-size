import React, { Component } from 'react';


export default class Home extends Component {
    

    render() {
        return (
            <div className='home'>
                <div className='slideshow'>
                    <h3> Slide Show </h3>
                </div>
            <div className='group-2'>
                <div className='promos'>
                    <h3> Promos </h3>
                </div>

                <div className='updates'>
                    <h3> Updates </h3>
                </div>
            </div>
            </div>
        )
    }

}