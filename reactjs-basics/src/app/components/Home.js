import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{

  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status:0
    };
    console.log("Constructor");
  }

  componentWillMount(){
    console.log("Component will Mount");
  }
  componentDidMount(){
    console.log("Component did Mount");
  }
  componentWillReceiveProps(nextProps){
    console.log("Component will Receive props",nextProps);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Should Component update",nextProps,nextState);
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log("Component will update",nextProps,nextState);
  }
  componentDidUpdate(prevProps,prevState){
      console.log("Component did update",prevProps,prevState);
  }
  componentWillUnmount(){
    console.log("Component will unmount");
  }


  onMakeOlder(){
    this.setState({
      age : this.state.age + 3
    });
  }
  render(){

    return(
      <div>
          <p>In a New Components</p>
          <p>Your Name is {this.props.name} , your age is {this.state.age}</p>
          <p>Status : {this.state.status}</p>
          <hr/>
          <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet : PropTypes.func
};
