// import React from 'react';
// import ReactDOM from 'react-dom';

// class HelloWorld extends React.Component {
//     render() {
//       return (
//         <div>hello world</div>
//       );
//     }
//   }

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {

    return (
        <div>
            <div id="root">
                
            </div>
        </div>
    );

}

const element = <h1>Hello world </h1>;

ReactDOM.render(element, document.getElementById('root'));

export default Hello;
  