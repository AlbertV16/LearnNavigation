import { FlatList } from "react-native";
import CategoryCard from "../components/CategoryCard";

import { CATEGORIES } from "../data/dummy-data";

function CategoryScreen({ navigation }) {
    function renderCategoryItem(itemData){
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }
    
        return (
            <CategoryCard 
                title={itemData.item.title} 
                color={itemData.item.color} 
                onPress={pressHandler} 
            />
        );
    }

    return (
        <FlatList 
            data={CATEGORIES} 
            keyExtractor={(item) => item.id} 
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}  

export default CategoryScreen;