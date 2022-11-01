import { View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import MySearchBar from '../components/MySearchBar'
import screenNames from '../screenNames'
import { useState } from 'react';
import { GetFavoriteRestaurants } from '../../networking';
import { RestaurantFlatListUser } from '../components/RestaurantFlatListUser';
import { useSelector } from 'react-redux';
import toggleRestaurantFavorite from '../../networking/toggleRestaurantFavorite';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { Text } from 'react-native';
import { CONSTANTS } from '../../config';

function UserFavoritesRestaurantsScreen({navigation , props}) {
  
  const [restaurants, setRestaurants] = useState([]);
  const [triggerSearch, setTrigggerSearch] = useState(false);
  const isFocused = useIsFocused();

  const userId = useSelector(state => state.session.userId);

  const fillFavoriteRestaurantList = async () => {
    const restos = await GetFavoriteRestaurants(userId);
    setRestaurants(restos);
  }

  useFocusEffect(
    useCallback(() => {

      if (isFocused || triggerSearch)
        fillFavoriteRestaurantList();

        return () => {
          setTrigggerSearch(false);
          setRestaurants([]);
      }
    }, [triggerSearch, isFocused])
  );

  const onFavoriteIconPress = async (restaurantId) => {
    const result = await toggleRestaurantFavorite(userId, restaurantId);
    setTrigggerSearch(true);
  }

  const onRestaurantNameTouched = (event) => {
    navigation.navigate(screenNames.RESTAURANT_VIEW_USER);
  }

  return (
    <View>
      <MySearchBar></MySearchBar>
      <View>
        {restaurants.length === 0 && 
          <Text
          h1
          h4Style={{textAlign:'center'}}
          style={{marginBottom : 10, alignSelf : 'center'}}
          >
          {CONSTANTS.SCREEN_TEXTS.NOT_FAVORITES}
          </Text>
        }
        {
          restaurants.length !== 0 && 
          <RestaurantFlatListUser 
            restaurants={restaurants}
            onFavoriteTouched={onFavoriteIconPress}>
          </RestaurantFlatListUser>
        }
      </View>
    </View>
  )
}

export default UserFavoritesRestaurantsScreen;