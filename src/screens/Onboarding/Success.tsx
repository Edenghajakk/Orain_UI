import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import CommonButton from 'components/buttons/CommonButton';
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
          source={require('assets/icons/like.png')}
          style={[
            styles.imgLogo,
            { marginVertical: 50, transform: [{ rotate: '315deg' }] },
          ]}
        />
        <Text style={styles.pageText}>Looks like all are done</Text>
        <Text style={styles.title}>Lets proceed</Text>
      </LinearGradient>
      <View style={styles.bottomContainer}>
        <CommonButton
          title='Proceed to Home'
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

export default Email;
