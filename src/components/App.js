import React, {  
  Component,
} from 'react';

// App.js
export class App extends Component {

  render() {
    return (
      <div>

        <h1>{this.props.counter.count}</h1>

          <button onClick={() => this.props.incrementCounter({ count: this.props.counter.count })}>
            Click Me!
          </button>
       
      </div>
    );
  }

}

export default App;