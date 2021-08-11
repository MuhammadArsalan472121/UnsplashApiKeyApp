import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  TextInput,
  Image,
  View,
  Text,
  FlatList,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=60y7KfzPksD1L0oxbPzkpEsSO-46Y8q7ZGlet9UQsTY',
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(data.id);
  }, []);


  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={1}
      key={1}
      renderItem={({item}) => {
        return (
          <View>
            <Card style={Styles.cardStyle}>
              <Card.Title style={Styles.cardTitleStyle}>{item.user.name}</Card.Title>
              <Card.Divider />
                <Card.Image source={require('../assets/Logo.png')} style={Styles.cardImageStyle}/>
                <Text style={Styles.cardTextStyle}>{item.user.username}</Text>
            </Card>


          </View>
        );
      }}
    />
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle:{height:100, width :500},
  cardTitleStyle:{
      fontSize:20,
      fontWeight:'bold',
  },
  cardImageStyle:{
      height:200,
      width:'auto',
      padding:20
  },
  cardTextStyle:{
      textAlign:'center',
    fontSize:18,
  }
});

export default App;
