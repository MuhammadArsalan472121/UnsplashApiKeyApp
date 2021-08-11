import React, {useState, useEffect} from 'react';

import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

function App({navigation}) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await fetch('https://hst-construction.herokuapp.com/user/getAllTheProduct')
      .then(res => res.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);
  
  const pressHandler = () => {
    navigation.navigate('HstDetails');
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      numColumns={1}
      key={1}
      renderItem={({item}) => {
        return (
          <View>
            <TouchableOpacity onPress={pressHandler}>
              <Card style={Styles.cardStyle}>
                <Card.Title style={Styles.cardTitleStyle}>
                  {item.title}
                </Card.Title>
                <Card.Divider />
                <Card.Image
                  source={{uri: item.selectedFile}}
                  style={Styles.cardImageStyle}
                />
                <Text style={Styles.cardTextStyle}>Rs {item.price}</Text>
              </Card>
            </TouchableOpacity>
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
  cardStyle: {height: 100, width: 500},
  cardTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImageStyle: {
    height: 200,
    width: 'auto',
    padding: 20,
  },
  cardTextStyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default App;
