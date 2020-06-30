import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
import CommonInput from 'components/inputText/CommonInput';
import { colors } from 'constants/Colors';
import styles from './styles';
// Icons
import eye from 'assets/icons/eye.png';

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
        <Text style={styles.pageText}>Great, lets proceed with</Text>
        <CommonInput placeholder='Username' hasIcon={false} />
        <CommonInput placeholder='Password' hasIcon={true} icon={eye} />
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Next'
          onButtonPress={() => navigation.navigate('Address')}
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
