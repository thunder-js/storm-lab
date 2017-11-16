import Feather from 'react-native-vector-icons/Feather'

export const prepareIcons = async () => {
  const icons = await Promise.all([
    Feather.getImageSource('award', 30),
    Feather.getImageSource('user', 30),
    Feather.getImageSource('camera', 30),
  ]);
  const [award, user, camera] = icons;
  return { award, user, camera };
}
