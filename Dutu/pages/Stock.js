/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View, ScrollView, } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { Icon } from 'react-native-elements';
var db = openDatabase({ name: 'Dutu2.db' ,createFromLocation : 1});

 
export default class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };

    
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#B0E0E6' }} />
    );
  };
  render() {
    return (
      
      <View style={{ backgroundColor: '#B0E0E6', flex: 1 ,numColumns:2}}>
        
    <Icon
  raised
  title='Add'
  name='plus'
  type='font-awesome'
  color='#f50'
  
  onPress={() => this.props.navigation.navigate('Plus')}
   />
   <Icon
  raised
  name='trash'
  type='font-awesome'
  color='#f50'
  title='Delete'
  onPress={() => this.props.navigation.navigate('Del')} />

 <Icon
  raised
  name='pencil'
  type='font-awesome'
  color='#f50'
  title='Edit'
  onPress={() => this.props.navigation.navigate('Edit')} />


        <FlatList
          numColumns={2}
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.id} style={{ backgroundColor: '#B0E0E6', padding: 40 , }}>
              <Text>Id: {item.id}</Text>
              <Text>Name: {item.name}</Text>
              <Text>Date: {item.date}</Text>
            </View>
          )}
        />
    
      </View>
    );
  }
}