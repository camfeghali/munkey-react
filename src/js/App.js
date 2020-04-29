/** @jsx MunkeyReact.createElement */

import { MunkeyReact } from "./dom";
import munkeyLogo from "../img/munkey-logo.png";

const root = document.getElementById("root");

export const App = () => {

  let greetingMessage = "Welcome to MunkeyReact, a ReactJS clone"

  MunkeyReact.render(<AncestorComponent greetingMessage={greetingMessage}/>, root)
};

class AncestorComponent extends MunkeyReact.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }


  render() {

    return(
      <div className="ancestor-wrapper">
        <div></div>
        <div className="content-wrapper">
          <h2 className="headline">{this.props.greetingMessage}</h2>
          <MunkeyLogo file="App.js"/>
        </div>
        <div></div>
      </div>
    );
  }
}

function MunkeyLogo (props) {
  const style = {color: 'rgba(213, 147, 88)'}
  return(
    <div className="content-column">
      <img src={munkeyLogo} className="munkey-logo"></img>
      <h2 style="color:rgba(60,164,157,1)"> Implements Functional and Stateful component rendering</h2>
      <h2 className="css-style"> {`You can start by editing the contents of the ${props.file} file`}</h2>
      <h2 style={style}>Happy coding!</h2>
    </div>
  );
}