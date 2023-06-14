import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const categories = ['🔥 Popular', '🥗 Salad', '🍞 Breakfast'];

export const HomeView = ({navigation}) => {
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <SafeAreaView className="bg-black h-full p-2 flex flex-col space-y-4">
      <ScrollView>
        <View className="flex flex-row justify-between items-center p-2">
          <View>
            <Text
              className="text-white text-2xl"
              style={styles.fontMavenProSemiBold}>
              Hello,
            </Text>
            <Text
              className="text-white text-2xl"
              style={styles.fontMavenProSemiBold}>
              Kristin 👋
            </Text>
          </View>
          <View>
            <Image
              className="rounded-full w-20 h-20"
              source={require('../../assets/imgs/avatar.png')}
            />
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} className="flex flex-row space-x-2 p-2">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={'category' + index}
                onPress={() => setCurrentCategory(index)}
                className={
                  'flex flex-row space-x-2 items-center px-3 rounded-3xl border h-10 ' +
                  (index === currentCategory
                    ? 'border-[#FFE598CC]'
                    : 'border-[#DDDDDDAA]')
                }
                activeOpacity={0.5}>
                <Text
                  className={
                    'text-base ' +
                    (index === currentCategory
                      ? 'text-[#FFE598CC]'
                      : 'text-[#DDDDDDAA]')
                  }
                  style={styles.fontMavenProMedium}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View className="flex flex-row justify-between items-center p-2 mb-4">
          <View>
            <Text
              className="text-white text-xl"
              style={styles.fontMavenProMedium}>
              3903 Popular
            </Text>
          </View>
        </View>
        <View className="flex flex-col space-y-4">
          {categories.map((_, index) => (
            <TouchableOpacity
              key={'card' + index}
              onPress={() => navigation.navigate('Food', {id: index})}
              activeOpacity={0.5}>
              <View className="flex flex-row justify-around items-center bg-[#11151E] rounded-3xl">
                <View className="py-7">
                  <Image
                    className="rounded-full w-32 h-32"
                    source={require('../../assets/imgs/avatar.png')}
                  />
                </View>
                <View>
                  <View className="flex flex-row space-x-4">
                    <Text
                      className="text-[#FFE59888]"
                      style={styles.fontMavenProMedium}>
                      650g
                    </Text>
                    <Text
                      className="text-[#FFE59888]"
                      style={styles.fontMavenProMedium}>
                      799 cal
                    </Text>
                  </View>
                  <Text
                    className="text-xl mt-1 text-[#FFFFFFCC]"
                    style={styles.fontMavenProMedium}>
                    Slicing with fruit
                  </Text>
                  <Text
                    className="mt-3 text-[#FFFFFF66] max-w-[150px]"
                    style={styles.fontMavenProMedium}>
                    Easy-to-make slicing with fruit and meat
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontMavenProMedium: {
    fontFamily: 'MavenPro-Medium',
  },
  fontMavenProRegular: {
    fontFamily: 'MavenPro-Regular',
  },
  fontMavenProSemiBold: {
    fontFamily: 'MavenPro-SemiBold',
  },
});
