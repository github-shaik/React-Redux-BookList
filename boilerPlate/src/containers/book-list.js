import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/selectBook'
import {bindActionCreators} from 'redux';



class BookList extends Component{

  handleMouseover(){
    console.log('TST');

  }

  renderList(){
    return this.props.books.map((book)=>{
        return(
          <li
          className='list-group-item'
          onClick={()=>this.props.selectBook(book.title)}
          onMouseEnter={this.handleMouseover()}
          key={book.title}>
          {book.title}
          </li>
        )
      })
  }

  render(){
        return(
          <div>
          <h1>Book List</h1>
          <ul className= 'list-group' >
          {this.renderList()}
          </ul>
          </div>
        )
    }
}


function mapStateToProps(state){
  return{
    books:state.book
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectBook:selectBook},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
