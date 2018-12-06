import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong, selectMovie } from '../actions';

class AdditionalList extends Component {
  renderList() {
    return this.props.movies.map(movie => {
      return (
        <div className="item">
          <div className="content"> {movie.name} </div>
        </div>
      );
    });    
  }

  render() {
      return <div>{this.renderList()}</div>;
  }
}


const mapStateToProps = state => {
  return { movies: state.movies };
};

export default connect(
  mapStateToProps,
  { selectMovie }
)(AdditionalList);