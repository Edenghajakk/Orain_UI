import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import globalStyles from 'utils/styles';
import styles from './styles';

interface Props {
  onButtonPress: () => void;
  title: string;
  buttonBackgroundType?: 'solid' | 'bordered';
  container?: object;
}

const CommonButton: React.FC<Props> = (props) => {
  const { buttonBackgroundType } = props;
  return (
    <View
      style={[{ width: '100%' }, props.container, globalStyles.boxElevation]}
    >
      <TouchableOpacity
        style={
          buttonBackgroundType === 'solid'
            ? styles.buttonContainer
            : styles.buttonContainer2
        }
        onPress={props.onButtonPress}
      >
        <View style={styles.buttonTextWrap}>
          <Text
            style={
              buttonBackgroundType === 'solid'
                ? styles.buttonText
                : styles.buttonText2
            }
          >
            {props.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CommonButton;
