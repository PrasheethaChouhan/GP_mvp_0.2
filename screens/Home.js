import React from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';


const { width } = Dimensions.get('screen');

import { Header, Icon, Badge } from 'react-native-elements';
export default class Home extends React.Component {
  render() {
    return (
      <View style={{ 
        flex: 1,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B2E0F',
        marginTop: -30, 
        }}>
        <Header
          centerComponent={{
            text: 'GreenPin',
            style: { color: '#90A5A9', fontSize: 20, fontWeight: 'bold' },
          }}
          rightComponent={
            <Icon
              name="paw"
              type="font-awesome"
              color="#696969"
              onPress={() => {
                this.props.navigation.navigate('NotificationScreen');
              }}
            />
          }
          backgroundColor="#eaf8fe"
        />

        <Text style={{color:'white', marginTop:10, marginLeft:'-53%', fontSize:22}}>
          Upcoming Events
        </Text>

        <ScrollView>
          <TouchableOpacity
          onPress={()=>{
            this.props.navigation.navigate('NotificationScreen');
          }}>
              <Image
                style={{ fontSize: 20, color: 'red', marginTop: 25, width:410, height:260}}
                source={require('../assets/plant.jpg')}
              >
              </Image>
          </TouchableOpacity>

        <Text style={{color:'white', marginTop:20, fontSize:22}}>
          Recent Plantations
        </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              height: 300,
              padding: 10,
              marginTop: 10,
              backgroundColor: '#1B2E0F',
              color: '#82152b',
            }}>
              
            <ScrollView horizontal={true}>
              <Image
                style={{ width: 300, height:300, padding: 10 }}
                source={require('../assets/images1.jpeg')}
              />
              <Image
                style={{ width: 300, height: 300 }}
                source={require('../assets/images2.jpeg')}
              />
              <Image
                style={{ width: 600, height: 280 }}
                source={require('../assets/images3.jpeg')}
              />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300',
  },
  divider: {
    borderRightWidth: 0.3,
  },
  products: {
    width: width - 50 * 2,
    paddingVertical: 50 * 2,
  },

  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: 50,
  },
  imageStyles: {
    width: 200,
    height: 200,
  },
  shadow: {
    shadowColor: '#415136',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  imageContainer: {
    elevation: 1,
  },
});
