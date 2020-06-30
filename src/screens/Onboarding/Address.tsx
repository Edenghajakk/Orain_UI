import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
import CommonInput from 'components/inputText/CommonInput';
import { colors } from 'constants/Colors';
import styles from './styles';
// Icons
import locate from 'assets/icons/cloudy.png';
import more from 'assets/icons/more.png';

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
        <Text style={styles.pageText}>Now, lets add your address</Text>
        <CommonInput placeholder='Address' hasIcon={true} icon={locate} />
        <View style={styles.rowContainer}>
          <CommonInput
            placeholder='Postal'
            hasIcon={false}
            container={{ width: '40%', marginRight: 15 }}
            keyboard='numeric'
          />
          <CommonInput
            placeholder='State'
            hasIcon={true}
            icon={more}
            container={{ width: '56%' }}
          />
        </View>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Next'
          onButtonPress={() => navigation.navigate('ProfilePicture')}
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
