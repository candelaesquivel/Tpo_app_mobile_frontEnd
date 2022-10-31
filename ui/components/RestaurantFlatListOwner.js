import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native";
import RestaurantCardOwner from "./RestaurantCardOwner";

export function RestaurantFlatListOwner({restaurants = [], onMenuPressed = {}, onPhotoPress={}, props}){
  const renderItem = ({ item }) => {
    return (
      <View >
      <RestaurantCardOwner 
        name ={item.name}
        address = {item.address}
        score = {item.score}
        restaurantId = {item.restaurantId}
        >
        </RestaurantCardOwner>
      </View>
    )
  };
  return (
    <FlatList
      data={restaurants}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  )
}