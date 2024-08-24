import { Alert } from 'react-native';

const CustomAlert = (title: string, message: string) => {
  Alert.alert(title, message);
};

export default CustomAlert;
