import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import CacheImage from "./CacheImage";

class ProfileImage extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <CacheImage
          style={styles.image}
          uri="https://www.pexels.com/photo/astronomy-beautiful-clouds-constellation-355465/"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 200,
    width: 200
  }
});

export default ProfileImage;
