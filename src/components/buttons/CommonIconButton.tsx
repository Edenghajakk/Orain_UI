import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { colors } from 'constants/Colors';
import styles from './styles';

interface Props {
  icon: string;
  onButtonPress: () => void;
  background: 'orange' | 'white';
}

const CommonIconButton: React.FC<Props> = (props) => {
  const [bgColor, setBgColor] = useState<object>({
    backgroundColor: colors.orange,
  });

  useEffect(() => {
    if (props.background === 'orange') {
      setBgColor({ backgroundColor: colors.orange });
    } else {
      setBgColor({ backgroundColor: colors.white });
    }
  }, [props.background]);

  return (
    <TouchableOpacity
      style={[styles.buttonIconContainer, bgColor]}
      onPress={props.onButtonPress}
    >
      <Image source={props.icon} style={styles.iconStyle} />
    </TouchableOpacity>
  );
};

export default CommonIconButton;
