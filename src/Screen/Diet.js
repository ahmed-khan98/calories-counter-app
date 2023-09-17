import { View,  StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeHeader from '../Component/HomeHeader';
import DietDish from '../Component/DietDish';

export default function DietHistory({ navigation }) {


  return (
    <ScrollView shhowsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <HomeHeader
          navigation={navigation}
          name='Diet History'
          icon={<Icon name="arrow-back" size={26} color="#fff" />}
        
        />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
        <DietDish />
      </View>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9f9",
  },

});
