import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput , Button , FlatList } from 'react-native';

export default function App() {

  const [enteredTodoText , setEnteredTodoText] = useState('');
  const [todoList , settodoList] = useState([]);


   function enterTodoText(enteredText){
      setEnteredTodoText(enteredText);
   }

   

   function addTodoText(){
    if(enteredTodoText !=""){
      settodoList([...todoList,enteredTodoText]);
      setEnteredTodoText('');

    }
   }

   function DeleteHandler(){
    var newList = todoList;
    newList.splice(index,1);
    settodoList([...newList]);
   }



  return (
    <View style={styles.container}>
      <View style={styles.flexfortodo}>
        <TextInput style={styles.textInput} onChangeText={enterTodoText} value={enteredTodoText} placeholder='Enter Your Todo'/>
        <Button  style={styles.btn} color="#841584" onPress={addTodoText}    title='Add '/>
      </View>
      <FlatList style={styles.todos} data={todoList} renderItem={(todoItem,index) => {
        return (

          <Text style={styles.todo} onPress={DeleteHandler} index={index}>{todoItem.item}</Text>
        );
      }}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal:10
    
  },
  flexfortodo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:1,
    borderBottomcolor: '#ccccc',
    paddingBottom: 20,
    marginBottom:20,
    
  },
  textInput: {
    borderWidth:1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight:5,
    padding: 10
  },
  btn: {
    backgroundColor: 'blue',
  },
  todos: {
    height: '85%',
  },
  todo: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginVertical:5,
    padding: 10,
    fontSize: 24,
    textAlign:'center',
    backgroundColor: '#FF0079FF',
    color:'white',
    borderRadius:'50%',
    fontSize:20


  }
});
