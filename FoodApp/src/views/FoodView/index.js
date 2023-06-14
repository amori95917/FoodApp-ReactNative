import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft, faCheck} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

export const FoodView = ({navigation}) => {
  return (
    <SafeAreaView className="bg-black h-full p-2 flex flex-col space-y-4">
      <View className="flex flex-row justify-between items-center p-2">
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.5}>
          <FontAwesomeIcon size={20} icon={faChevronLeft} color={'#FFFFFFCC'} />
        </TouchableOpacity>
        <Text
          className="text-[#FFFFFFCC] text-base"
          style={styles.fontMavenProMedium}>
          Baked ribs
        </Text>
        <FontAwesomeIcon size={20} icon={faHeart} color={'#FFFFFFCC'} />
      </View>
      <ScrollView>
        <View className="flex flex-row justify-center py-4">
          <Image
            className="rounded-full w-60 h-60"
            source={require('../../assets/imgs/avatar.png')}
          />
        </View>
        <View className="flex flex-row justify-between border-2 border-[#DDDDDD44] rounded-3xl px-12 py-3 mx-2 my-8">
          <View>
            <Text
              className="text-[#FFE598CC] text-lg text-center"
              style={styles.fontMavenProMedium}>
              799
            </Text>
            <Text
              className="text-[#DDDDDD88] text-center"
              style={styles.fontMavenProMedium}>
              kcal
            </Text>
          </View>
          <View>
            <Text
              className="text-[#FFE598CC] text-lg text-center"
              style={styles.fontMavenProMedium}>
              270
            </Text>
            <Text
              className="text-[#DDDDDD88] text-center"
              style={styles.fontMavenProMedium}>
              grams
            </Text>
          </View>
          <View>
            <Text
              className="text-[#FFE598CC] text-lg text-center"
              style={styles.fontMavenProMedium}>
              25
            </Text>
            <Text
              className="text-[#DDDDDD88] text-center"
              style={styles.fontMavenProMedium}>
              min
            </Text>
          </View>
          <View>
            <Text
              className="text-[#FFE598CC] text-lg text-center"
              style={styles.fontMavenProMedium}>
              1
            </Text>
            <Text
              className="text-[#DDDDDD88] text-center"
              style={styles.fontMavenProMedium}>
              serve
            </Text>
          </View>
        </View>
        <View className="bg-[#11151E] rounded-3xl">
          <View className="border-b-4 border-[#DDDDDD44] w-10 self-center mb-8 mt-3" />
          <View className="flex flex-row space-x-2 justify-center items-center">
            <View className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
              <Image
                className="rounded-full w-9 h-9"
                source={require('../../assets/imgs/avatar.png')}
              />
            </View>
            <View className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
              <Image
                className="rounded-full w-9 h-9"
                source={require('../../assets/imgs/avatar.png')}
              />
            </View>
            <View className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
              <Image
                className="rounded-full w-9 h-9"
                source={require('../../assets/imgs/avatar.png')}
              />
            </View>
            <View className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
              <Image
                className="rounded-full w-9 h-9"
                source={require('../../assets/imgs/avatar.png')}
              />
            </View>
            <View className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
              <Image
                className="rounded-full w-9 h-9"
                source={require('../../assets/imgs/avatar.png')}
              />
            </View>
          </View>
          <View className="px-8 py-6">
            <View className="flex flex-row space-x-6 items-center">
              <View className="bg-[#D6FC51] rounded-full p-2">
                <FontAwesomeIcon size={12} icon={faCheck} color={'#11151E'} />
              </View>
              <Text
                className="text-white text-lg"
                style={styles.fontMavenProMedium}>
                Step 1
              </Text>
            </View>
            <View className="border-l-[1.5px] border-[#D6FC51] ml-[14px] pl-10 pt-2 pb-8 max-w-[300px]">
              <Text className="text-[#DDDDDD88]" style={styles.fontMavenProMedium}>
                To begin with, marinate the ribs. Prepare water, vinegar, black
                pepper, salt. Mix everything, leave for half an hour.
              </Text>
            </View>
            <View className="flex flex-row space-x-6 items-center">
              <View className="border border-[#D6FC5188] rounded-full p-2">
                <FontAwesomeIcon size={12} icon={faCheck} color={'#11151E'} />
              </View>
              <Text
                className="text-white text-lg"
                style={styles.fontMavenProMedium}>
                Step 2
              </Text>
            </View>
            <View className="border-dashed border-l-[1.5px] border-[#D6FC5188] ml-[14px] pl-10 pt-2 pb-8 max-w-[300px]">
              <Text className="text-[#DDDDDD88]" style={styles.fontMavenProMedium}>
                To begin with, marinate the ribs. Prepare water, vinegar, black
                pepper, salt. Mix everything, leave for half an hour.
              </Text>
            </View>
          </View>
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
