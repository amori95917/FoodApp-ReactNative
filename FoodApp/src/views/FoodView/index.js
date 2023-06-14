import React, {useState, useEffect} from 'react';
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

import {API_ADDRESS} from '@env';
import Axios from '../../config/api';

export const FoodView = ({route, navigation}) => {
  const {id} = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    Axios.get(`/api/meals/${id}?populate=image,ingredients`)
      .then(res => {
        setData(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    data.attributes && (
      <SafeAreaView className="bg-black h-full p-2 flex flex-col space-y-4">
        <View className="flex flex-row justify-between items-center p-2">
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.5}>
            <FontAwesomeIcon
              size={20}
              icon={faChevronLeft}
              color={'#FFFFFFCC'}
            />
          </TouchableOpacity>
          <Text
            className="text-[#FFFFFFCC] text-base"
            style={styles.fontMavenProMedium}>
            {data.attributes.name}
          </Text>
          <FontAwesomeIcon size={20} icon={faHeart} color={'#FFFFFFCC'} />
        </View>
        <ScrollView>
          <View className="flex flex-row justify-center py-4">
            <Image
              className="rounded-full w-60 h-60"
              source={{
                uri: API_ADDRESS + data.attributes.image.data.attributes.url,
              }}
            />
          </View>
          <View className="flex flex-row justify-between border-2 border-[#DDDDDD44] rounded-3xl px-12 py-3 mx-2 my-8">
            <View>
              <Text
                className="text-[#FFE598CC] text-lg text-center"
                style={styles.fontMavenProMedium}>
                {data.attributes.kcal}
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
                {data.attributes.grams}
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
                {data.attributes.min}
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
                {data.attributes.serve}
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
              {data.attributes.ingredients.data.map(ingredient => (
                <View
                  key={'ingredient' + ingredient.id}
                  className="p-2 border-2 border-[#DDDDDD44] rounded-2xl">
                  <Image
                    className="rounded-full w-9 h-9"
                    source={{
                      uri: API_ADDRESS + ingredient.attributes.url,
                    }}
                  />
                </View>
              ))}
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
                <Text
                  className="text-[#DDDDDD88]"
                  style={styles.fontMavenProMedium}>
                  {data.attributes.step1}
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
                <Text
                  className="text-[#DDDDDD88]"
                  style={styles.fontMavenProMedium}>
                  {data.attributes.step2}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
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
