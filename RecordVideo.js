// import Video from 'react-native-video';
// import React, { Component } from "react";
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default class RecordVideo extends Component {
//   render() {
//     return (
//       <Video source={{ uri: "background" }}   // Can be a URL or a local file.
//         ref={(ref) => {
//           this.player = ref
//         }}                                      // Store reference
//         onBuffer={this.onBuffer}                // Callback when remote video is buffering
//         onError={this.videoError}               // Callback when video cannot be loaded
//         style={styles.backgroundVideo} />
//     )
//   }
// }
// // Later on in your styles..
// var styles = StyleSheet.create({
//   backgroundVideo: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
// });








// "use strict";
// import React, { Component } from "react";
// import {
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from "react-native";
// // import { RNCamera } from "react-native-camera";
// // import { ENDPOINT } from "./Config";

// export default class RecordVideo extends Component {
//   constructor() {
//     super();

//     this.state = {
//       recording: false,
//       processing: false
//     };
//   }
//   render() {
//     const { recording, processing } = this.state;

//     let button = (
//       <TouchableOpacity
//         onPress={this.startRecording.bind(this)}
//         style={styles.capture}
//       >
//         <Text style={{ fontSize: 14 }}> RECORD </Text>
//       </TouchableOpacity>
//     );

//     if (recording) {
//       button = (
//         <TouchableOpacity
//           onPress={this.stopRecording.bind(this)}
//           style={styles.capture}
//         >
//           <Text style={{ fontSize: 14 }}> STOP </Text>
//         </TouchableOpacity>
//       );
//     }

//     if (processing) {
//       button = (
//         <View style={styles.capture}>
//           <ActivityIndicator animating size={18} />
//         </View>
//       );
//     }

//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           permissionDialogTitle={"Permission to use camera"}
//           permissionDialogMessage={
//             "We need your permission to use your camera phone"
//           }
//         />
//         <View
//           style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
//         >
//           {button}
//         </View>
//       </View>
//     );
//   }

//   async startRecording() {
//     this.setState({ recording: true });
//     // default to mp4 for android as codec is not set
//     const { uri, codec = "mp4" } = await this.camera.recordAsync();
//     this.setState({ recording: false, processing: true });
//     const type = `video/${codec}`;

//     const data = new FormData();
//     data.append("video", {
//       name: "mobile-video-upload",
//       type,
//       uri
//     });

//     try {
//       const res = await fetch(ENDPOINT, {
//         method: "post",
//         body: data
//       });
//     } catch (e) {
//       console.error(e);
//     }

//     this.setState({ processing: false });
//   }

//   stopRecording() {
//     this.camera.stopRecording();
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     backgroundColor: "black"
//   },
//   preview: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center"
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: "center",
//     margin: 20
//   }
// });
