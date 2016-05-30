import React,{Component} from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component{

  render(){
    return(
      <div>{this.props.selectedBook}</div>
    )
  }
}


function mapStateToProps(state){
  console.log(state)
    return{
      selectedBook:state.selectedBook
    }
}

export default  connect(mapStateToProps)(BookDetails)
