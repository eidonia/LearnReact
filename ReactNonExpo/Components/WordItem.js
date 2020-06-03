import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

class WordItem extends React.Component {
  render() {
    //console.log(this.props)
    const word = this.props.word
    return (
      <View>
        <Text>{word.word}</Text>
      </View>
    )
  }
}

export default WordItem
