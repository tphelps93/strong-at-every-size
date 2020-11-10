import React, { Component } from 'react';


export default class StoreItem extends Component {
    render() {
        return (
            <div className='store-item'>
                <img className='store-item-image' src='https://www.rollingstone.com/wp-content/uploads/2020/05/Screen-Shot-2020-05-21-at-13.02.55.png'/>
                <h4> SAES Tee </h4>
                <p> $50 </p>
            </div>
        )
    }

}