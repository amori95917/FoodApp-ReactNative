import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {API_ADDRESS} from '@env';
import Axios from '../../config/api';

const categories = ['🔥 Popular', '🥗 Salad', '🍞 Breakfast'];
const categoryNames = ['Popular', 'Salad', 'Breakfast'];

export const HomeView = ({navigation}) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    Axios.get(`/api/meals?populate=image,ingredients`)
      .then(res => {
        setAllData([...res.data.data]);
        setData(
          res.data.data.filter(
            item => item.attributes.foodtype === categoryNames[currentCategory],
          ),
        );
        setTotal(res.data.meta.pagination.total);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setData(
      allData.filter(
        item => item.attributes.foodtype === categoryNames[currentCategory],
      ),
    );
  }, [currentCategory]);

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
              {data.length} {categoryNames[currentCategory]}
            </Text>
          </View>
        </View>
        <View className="flex flex-col space-y-4">
          {data &&
            data.length &&
            data.map(item => (
              <TouchableOpacity
                key={'card' + item.id}
                onPress={() => navigation.navigate('Food', {id: item.id})}
                activeOpacity={0.5}>
                <View className="flex flex-row items-center bg-[#11151E] rounded-3xl">
                  <View className="py-7 px-6">
                    <Image
                      className="rounded-full w-32 h-32"
                      source={{
                        uri:
                          API_ADDRESS +
                          item.attributes.image.data.attributes.url,
                      }}
                    />
                  </View>
                  <View>
                    <View className="flex flex-row space-x-4">
                      <Text
                        className="text-[#FFE59888]"
                        style={styles.fontMavenProMedium}>
                        {item.attributes.grams}g
                      </Text>
                      <Text
                        className="text-[#FFE59888]"
                        style={styles.fontMavenProMedium}>
                        {item.attributes.kcal} cal
                      </Text>
                    </View>
                    <Text
                      className="text-xl mt-1 text-[#FFFFFFCC]"
                      style={styles.fontMavenProMedium}>
                      {item.attributes.name}
                    </Text>
                    <Text
                      className="mt-3 text-[#FFFFFF66] max-w-[150px]"
                      style={styles.fontMavenProMedium}>
                      {item.attributes.description}
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
