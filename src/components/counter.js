import React, { Component } from "react";
export default class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconde: 0,
      click: false,
      onOf:true,
      
    };
    setInterval(() => {
      if (this.state.click) this.setState({ seconde: this.state.seconde + 1 });
    }, 1000);
  }

  time = sec => {
    var x = Math.floor(sec / 3600);
    var y = Math.floor((sec % 3600) / 60);
    var z = sec % 60;
    // if (x < 10) {
    //   x = "0" + x;
    // }
    // if (y < 10) {
    //   y = "0" + y;
    // }
    // if (z < 10) {
    //   z = "0" + z;
    // }
    return String(x).padStart(2,'0') + ":" + String(y).padStart(2,'0') + ":" + String(z).padStart(2,'0');
  };

  debut = () => {
    this.setState({
      click: !this.state.click,
      onOf:!this.state.onOf
    });
  };
  minus = () => {
    this.setState({ seconde: 0, click: false,onOf:true });
  };

  render() {
    return (
      <div className="timer">
        <h1>{this.time(this.state.seconde)}</h1>
       <div className='def'>
        <p>Hour</p>
        <p>Minute</p>
        <p>Second</p>
        </div>
        <button onClick={this.debut}>{this.state.onOf?"start":"stop"}</button>
        <button onClick={this.minus}>Reset</button>
        
      </div>
    );
  }
}





// import React, { Component } from "react";

// export default class counter extends Component {
//   state = {
//     seconde: 0,
//     click: false
//   };

//   time = sec => {
//     var x = Math.floor(sec / 3600);
//     var y = Math.floor((sec % 3600) / 60);
//     var z = sec % 60;
//     if (x < 10) {
//       x = "0" + x;
//     }
//     if (y < 10) {
//       y = "0" + y;
//     }
//     if (z < 10) {
//       z = "0" + z;
//     }
//     return x + ":" + y + ":" + z;
//   };

//   debut = () => {
//     setInterval(() => {
//       if (this.state.click) this.setState({ seconde: this.state.seconde + 1 });
//     }, 1000);
//     this.setState({
//       click: !this.state.click
//     });
//   };
//   minus = () => {
//     this.setState({ seconde: 0, click: false });
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.time(this.state.seconde)}</h1>
//         <button onClick={this.debut}>Start</button>
//         <button onClick={this.minus}>Reset</button>
//       </div>
//     );
//   }
// }
