import React, {Component} from 'react';
class Keypad extends Component {


render(){

    return (
        <div className="button">
            <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
            <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
            <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


            <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

            <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


            <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
            <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button><br/>
        </div>
    );
}
}


export default Keypad;
    // return (
    //     <div className="container">
    //         <table class="table" >
    //             <tr>
    //                 <td input class="header"><h4>calculator</h4></td>
    //             </tr>
    //             <tr>
    //                 {/* <td colspan="4"> <input class="display-box" type="text" id="result" disabled /> </td> */}
    //                 <input className="display" type="text" id="result"></input>
    //                 <td> <input type="button" value="C" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //             </tr>
    //             <div input classname="Calculator">
    //                 <tr>
    //                     <td> <input type="button" value="1" onClick={e => this.props.onClick(e.target.name)}/> </td>
    //                     <td> <input type="button" value="2" onClick={e => this.props.onClick(e.target.name)} />  </td>
    //                     <td> <input type="button" value="3" onClick={e => this.props.onClick(e.target.name)} />  </td>
    //                     <td> <input type="button" value="/" onClick={e => this.props.onClick(e.target.name)} /> </td>
                        
    //                 </tr>
    //                 <tr>
    //                     <td> <input type="button" value="4" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="5" onClick={e => this.props.onClick(e.target.name)}/> </td>
    //                     <td> <input type="button" value="6" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="-" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                 </tr>
    //                 <tr>
    //                     <td> <input type="button" value="7" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="8" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="9" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="+" onClick={e => this.props.onClick(e.target.name)}/> </td>
    //                 </tr>
    //                 <tr>
    //                     <td> <input type="button" value="." onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="0"onClick={e => this.props.onClick(e.target.name)}/> </td>
    //                     <td> <input type="button" value="=" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                     <td> <input type="button" value="*" onClick={e => this.props.onClick(e.target.name)} /> </td>
    //                 </tr>
    //                 {/* <tr>
    //                     <td colspan="2"> <input type="button" value="RESET" onclick="clearScreen()" id="btn" /> </td>
    //                     <td colspan="2"> <input type="button" height="1000" value="=" onclick="calculate()" id="btn" /> </td>
    //                 </tr> */}
    //             </div>
    //         </table>
    //     </div>
    // );
// }
// }
// export default Keypad;