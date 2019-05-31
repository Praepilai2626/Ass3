/*Home Screen With buttons to navigate to diffrent options*/
import React from 'react';
import { View , Image} from 'react-native';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Dutu2.db' ,createFromLocation : 1});
 
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), date INI(10))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View 

        style={{
          flex: 1,
          backgroundColor: '#B0E0E6',
          flexDirection: 'column',
        }}>
        <Image
          style={{width: 130, height: 200 ,marginLeft: 120,marginTop: 30, marginEnd:50}}
          source={{uri: 'https://uppic.cc/d/Ku79'}}
        />
        
      </View>
    );
  }
}