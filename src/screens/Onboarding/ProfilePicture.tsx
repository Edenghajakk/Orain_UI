import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
import CommonIconButton from 'components/buttons/CommonIconButton';
import { colors } from 'constants/Colors';
import styles from './styles';
// Icons
import camera from 'assets/icons/camera.png';
import folder from 'assets/icons/folder.png';

interface Props {}

const Username: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.topContainer, styles.contents]}
        colors={[colors.lightPink, colors.lightOrange]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <Text style={styles.pageText}>Great, lets set an image</Text>
        <View style={styles.pictureContainer}>
          <Image
            style={styles.picture}
            source={require('assets/icons/man.png')}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <CommonIconButton
            icon={camera}
            onButtonPress={() => {}}
            background='orange'
          />
          <CommonIconButton
            icon={folder}
            onButtonPress={() => {}}
            background='white'
          />
        </View>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Next'
          onButtonPress={() => {}}
          buttonBackgroundType='solid'
        />
        <CommonButton
          title='Previous'
          onButtonPress={() => navigation.goBack()}
          buttonBackgroundType='bordered'
          container={{ paddingTop: 15 }}
        />
      </View>
    </View>
  );
};

export default Username;
