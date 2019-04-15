import React, { Component } from 'react';

class Javascript extends Component {
  state = {
    x:1
  };
  // for
  // for = () => {
  //   for (let i = 0; i >= 10; i++) 
    
  //   console.log(`for loop number:${i}`);

  // };
  //array
  typeoff = () => {
    const rating = [0, 1, 4.5];
    rating.push('ysf');
    console.log(typeof rating);
    console.log(rating.indexOf(0));
    rating[0] = 'zero';
    return rating;
  };

  push = () => {
    const arr1 = ['two', 'three'];
    const arr2 = ['one', ...arr1, 'four', 'five'].toString();
    return arr2.toUpperCase();
  };
  //string
  split = () => {
    const s = 'hhh , split, kkk';

    return s.split(',');
  };
  toLowerCase = () => {
    let g = 'g.toLowerCase()';
    console.log(typeof g);
    return (g = g
      .toLowerCase()
      .toLocaleUpperCase()
      .slice(1, 4));
  };

  render() {
    //string , Numbers , Boolean , null , undefined
    const age = 30;
    const name = `youssef age :`;
    console.log('`youssef age :`', typeof `youssef age :`);
    const rating = 4.5;
    const x = null;
    // const y = undifined;
    let z;
    console.log(typeof rating);
    return (
      <div className="container">
        {`${name} ${age}`}
        {/* <div>{this.for()}</div> */}
        <div>{this.typeoff()}</div>

        <div>{this.toLowerCase()}</div>
        <div>{this.split()}</div>
        <div>{this.push()}</div>
      </div>
    );
  }
}

export default Javascript;
