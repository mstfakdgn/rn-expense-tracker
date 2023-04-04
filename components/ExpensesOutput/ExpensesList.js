import { FlatList,StyleSheet,View,Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({expenses}) {
    if(expenses.length === 0) {
        return <View style={styles.container}><Text style={styles.infoText}>There is no expense</Text></View>;
    }

    return <FlatList 
        data={expenses} 
        renderItem={renderExpenseItem} 
        keyExtractor={(item) => item.id}
    />
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0,
        backgroundColor: GlobalStyles.colors.primary700
    },
    infoText: {
        color:'white',
        fontSize:16,
        textAlign:'center',
        marginTop:32
    }
});

export default ExpensesList;