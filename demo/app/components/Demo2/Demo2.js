import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component{
    // onPress(){
    //     console.log('Area pressed');
    // }
    // onPress2(){
    //     console.log('Area2 pressed');
    // }

  render(){
    return(
        <View>
            <View style={styles.myView}>
            <Text style={styles.myText}>Hello Tech</Text>
        </View>

        <View style={styles.container}>
            <TouchableHighlight style={styles.v1} onPress={this.onPress} underlayColor='blue'>
                <View>
                    <Text>View 1</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
                <View>
                    <Text>View 2</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.v3}>
                <Text style={styles.vText}>View 3</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'blue'
    },
    myText: {
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        height: 100
    },
    v1: {
        flex: 1,
        backgroundColor: 'red',
        padding: 10
    },
    v2: {
        flex: 2,
        backgroundColor: 'green',
        padding: 10
    },
    v3: {
        flex: 3,
        backgroundColor: 'black',
        padding: 10,
    },
    vText: {
        color: 'white'
    }
});

AppRegistry.registerComponent('Component2', () => Component2);