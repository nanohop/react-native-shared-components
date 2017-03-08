import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SmartScroll extends Component {
  render() {
    return (
      <KeyboardAwareScrollView keyboardShouldPersistTaps='handled'>
        <View style={{flex: 1, marginBottom: 60}}>
          {this.props.children}
        </View>
      </KeyboardAwareScrollView>
    )
  }
}
