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
        <Text style={styles.pageText}>Lets Login</Text>
        <CommonInput placeholder='Email' hasIcon={false} />
        <CommonInput placeholder='Password' hasIcon={false} />
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Proceed to Home'
          onButtonPress={() => {}}
          buttonBackgroundType='solid'
        />
        <CommonButton
          title='Switch to Sign Up'
          onButtonPress={() => navigation.navigate('SignUp')}
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
