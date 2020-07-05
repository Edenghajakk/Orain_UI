import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
import CommonIconButton from 'components/buttons/CommonIconButton';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { colors } from 'constants/Colors';
import styles from './styles';
// Icons
import camera from 'assets/icons/camera.png';
import folder from 'assets/icons/folder.png';
import man from 'assets/icons/man.png';

interface Props {}

const ProfilePicture: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    getPermissionAsync();
  });

  const getPermissionAsync = async () => {
    // @ts-ignore
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

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
            style={[styles.picture, { borderRadius: 10 }]}
            source={image === '' ? man : { uri: image }}
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
            onButtonPress={() => _pickImage()}
            background='white'
          />
        </View>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Next'
          onButtonPress={() => navigation.navigate('Success')}
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

export default ProfilePicture;
