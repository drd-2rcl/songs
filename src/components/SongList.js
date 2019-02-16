import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props)
    return (
      <div>
        SongList
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);