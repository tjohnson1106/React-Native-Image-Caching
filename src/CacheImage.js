import React, { Component } from "react";
import { Image } from "react-native";
import shorthash from "shorthash";
import { FileSystem } from "expo";

class CacheImage extends Component {
  state = {
    source: null
  };

  componentDidMount = () => {
    const { uri } = this.props;
    const name = shorthash.unique(uri);
    const path = `${FileSystem.cacheDirectory}${name}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
        console.log("Read image from cache");
        this.setState({
            source: {
                uri: image.uri
            }
        })
        return;
    }

    console.log("downloading image to cache");
    const newImage = await FileSystem.downloadAsync(uri, path);
    this.setState({
        source: {
            uri: newImage.uri
        }
    })
  };

  render() {
    return <Image style={this.props.style} source={this.state} />;
  }
}

export default CacheImage;
