import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors } from 'constants/Colors';
import globalStyles from 'utils/styles';
import styles from './styles';

interface Props {
  placeholder: string;
  hasIcon: boolean;
  icon?: string | undefined;
  container?: object;
  onInputClick?: () => void;
  keyboard?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'visible-password'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search'
    | undefined;
}

const CommonInput: React.FC<Props> = (props) => {
  const [inputText, setInputText] = useState<string>('');

  return (
    <View
      style={[styles.inputText, props.container, globalStyles.boxElevation]}
    >
      <TextInput
        style={styles.input}
        onChangeText={(text) => setInputText(text)}
        value={inputText}
        placeholder={props.placeholder}
        placeholderTextColor={colors.orange}
        keyboardType={props.keyboard}
      />

      {props.hasIcon ? (
        <TouchableOpacity>
          <Image style={styles.eyeIcon} source={props.icon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default CommonInput;
