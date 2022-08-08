
import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        let {result} = this.props;
        return (
  
            <div className="result">
                <div>
                <h3>Calculator</h3>
                </div>
                <p>{result} </p>
            
            </div>
     
    )
        ;
    }
}


export default ResultComponent;