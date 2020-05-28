import React from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native';
import films from '../Helpers/FilmData'
import FilmItem from './FilmItem'

class Search extends React.Component{
  render(){
    return(
      <View style={styles.main_container}>
      <TextInput style={styles.textInput} placeholder = "Titre du film"/>
      <Button title = "Rechercher" onPress = {() =>{}}/>
      <FlatList
        data={films}
        renderItem={({ item }) => <FilmItem film={item}/>}
        keyExtractor={(item) => item.id.toString()}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container :{
    marginTop: 20,
    flex: 1
  },
  textInput :{
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 5
  }
})

export default Search
