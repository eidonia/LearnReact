import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native'

class List  extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      textItem: []
    }
    this.addText
    this.textInput = React.create();
  }


  render(){
    return(
      <View style={styles.main_container}>
        <Text style={styles.text_begin}>
        Entrez un mot ou une phrasephrase
        </Text>
        <TextInput ref={this.textInput} onChangeText={(text) => this._addTextItem(text) style={styles.textInput} placeholder="Entrez votre texte"}/>
        <View style={styles.butt_view}
          <Button color="green" onPress={() => this._additemList()}/>
        </View>
        <FlatList
          data = {this.state.textItem}

    )
  }


}
