/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'Dutu2.db' ,createFromLocation : 1});
 
export default class Plus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
    };
  }
 
  register_user = () => {
    var that = this;
    const { name } = this.state;
    const { date } = this.state;
    //alert(user_name, user_contact, user_address);
    if (name) {
      if (date) {
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO table_user (name, date) VALUES (?,?)',
              [name, date],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert(' Failed');
                }
              }
            );
          });
      } else {
        alert('Please fill Date');
      }
    } else {
      alert('Please fill Name');
    }
  };
 
  render() {
    return (
      <View style={{ backgroundColor: '#B0E0E6', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={name => this.setState({ name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter /dd/mm/yyyy"
              onChangeText={date => this.setState({ date })}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10 }}
            />
            <Mybutton
              title="Submit"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}