import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
import CommonInput from 'components/inputText/CommonInput';
import { colors } from 'constants/Colors';
import styles from './styles';

interface Props {}

const Email: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        style={[
          styles.topContainer,
          styles.contents,
          { justifyContent: 'flex-start' },
        ]}
        colors={[colors.lightPink, colors.lightOrange]}
        start={[0, 0]}
        end={[0, 1]}
      >
        <Image
          source={require('assets/icons/lepaks_logo.png')}
          style={styles.imgLogo}
        />
        <Text style={styles.title}>Welcome to Lepaks</Text>
        <Text style={styles.description}>Organise your trip better</Text>
        <Text style={styles.pageText}>Now, lets Sign you Up</Text>
        <CommonInput placeholder='Email' hasIcon={false} />
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Next'
          onButtonPress={() => navigation.navigate('Username')}
          buttonBackgroundType='solid'
        />
        <CommonButton
          title='Switch to Login'
          onButtonPress={() => {}}
          buttonBackgroundType='bordered'
          container={{ paddingTop: 15 }}
        />
        <Text style={styles.underline} onPress={() => {}}>
          Forgot Password
        </Text>
      </View>
    </View>
  );
};

export default Email;
