import React from 'react';
import {StyleSheet, View, Button, TextInput, Text, FlatList} from 'react-native'
import WordItem from './WordItem'

class Word{
  constructor(id, word){
    this.id=id,
    this.word=word
  }
}

class Search extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      listWord: [],
      searchedText: '',
      outputText: ''
    }
    this.textInput = React.createRef();
    this.text = "Entrez votre texte"
  }

  _searchTextInputChanged(text){
    this.setState({ searchedText: text})
  }

  _setOutputText(){
    var joined = this.state.listWord.concat(new Word( (this.state.listWord.length +1), this.state.searchedText))
    this.setState({
      outputText: this.state.searchedText,
      listWord: joined
    })
    this.textInput.current.clear();
  }

  _resetText(){
    this.setState({
      searchedText: '',
      outputText: ''
    })
    this.textInput.current.clear();

  }


  render(){
    return(
      <View style={styles.main_container}>
        <TextInput ref={this.textInput} onChangeText ={(text) => this._searchTextInputChanged(text)} style={styles.textInput} placeholder = {this.text}/>
        <View style={styles.container_butt}>
          <Button color="#3FFF33" style={styles.butt_write} title="Ecrire" onPress={() => this._setOutputText()}/>
        </View>
        <Text style={styles.text}>{this.state.outputText}</Text>
        <View style={styles.container_butt}>
          <Button color="red" style={styles.butt_reset} title="Reset" onPress={() => this._resetText()}/>
        </View>
        <Text style={styles.text}>{this.state.listWord.length}</Text>
        <FlatList
          data={this.state.listWord}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <WordItem word={item}/>}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  main_container :{
    marginTop: 45
  },
  textInput :{
    marginLeft: 5,
    marginRight: 5,
    height: 75,
    paddingLeft: 5
  },
  text :{
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  container_butt :{
    justifyContent: 'center',
    marginRight: 60,
    marginLeft: 60
  },
  butt_write :{
    color: '#3FFF33'
  }


})

export default Search
