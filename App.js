// App.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  const [showButtons, setShowButtons] = useState(false);

  const toggleButtons = () => {
    setShowButtons(prevState => !prevState);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.shareCardButton} onPress={toggleButtons}>
        <AntDesign name="down" size={18} color={'white'} />
        <Text style={styles.shareCardButtonText}>Share my card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.qrContainer}>
        <QRCode
          value="https://www.example.com"
          size={200}
          logo={{uri: 'https://www.example.com/logo.png'}}
          logoSize={50}
          logoBackgroundColor="transparent"
        />
        <Text style={styles.qrText}>NexaLink</Text>
      </TouchableOpacity>
      {showButtons && (
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="down" size={18} color={'black'} />
            <Text style={styles.buttonText}>Share my card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="wallet" size={18} color={'black'} />
            <Text style={styles.buttonText}>Add card to wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="home" size={18} color={'black'} />
            <Text style={styles.buttonText}>Add card to homescreen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="mail" size={18} color={'black'} />
            <Text style={styles.buttonText}>Create Email signature</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="picture" size={18} color={'black'} />
            <Text style={styles.buttonText}>Create virtual background</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.airdropButton}>
        <Image
          source={require('./Assets/airdrop.png')}
          style={styles.airdropIcon}
        />
        <Text style={styles.airdropButtonText}>Share with AirDrop</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  shareCardButton: {
    backgroundColor: '#ff6f00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  shareCardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrText: {
    position: 'absolute',
    color: '#ff6f00',
    fontWeight: 'bold',
    top: 70,
    backgroundColor: '#fff',
    padding: 20,
  },
  buttonBox: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#000',
    marginLeft: 10,
  },
  airdropButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff6f00',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  airdropButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  airdropIcon: {
    marginLeft: 0,
    width: 30,
    height: 30,
  },
});
