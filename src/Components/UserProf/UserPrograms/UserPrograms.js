import React, { Component } from 'react';
import DataContext from '../../../DataContext';

export default class UserPrograms extends Component {
  static contextType = DataContext;
  render() {
    const { programs } = this.context;
    
    const userProgramList = programs.map(program => {
      return (
        <div key={program.program_id} className='user-program-listing'>
          <h2> {program.title} </h2>
          <p> Price: {program.price} </p>
        </div>
      );
    });
    return <div className='user-programs'>
      {userProgramList}
    </div>;
  }
}
