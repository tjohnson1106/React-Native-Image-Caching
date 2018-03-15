import React, { Component } from "react";
import { Image } from "react-native";
import shorthash from "shorthash";

class CacheImage extends Component {
  state = {
    source: null
  };

  componentDidMount = () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
  };

  render() {
    return <Image style={this.props.style} source={this.state} />;
  }
}

export default CacheImage;
