import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={{ width: 200, height: 200 }}></Image>
            <Text style={styles.titleText}>Spacetorium</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCraft')}>
            <Text style={styles.routeText}>Spacecrafts</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pic</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D11583',
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeImage: {
    position: 'absolute',
    top: -20,
    right: -25,
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
