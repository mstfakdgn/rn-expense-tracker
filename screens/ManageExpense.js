import { useLayoutEffect } from "react";
import { Text,StyleSheet } from "react-native";

function ManageExpense ({route, navigation}) {
    const editedExpenseId = route.params?.expenseId;
    const isEdited = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdited ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEdited])


    return (
        <Text>ManageExpense Screen</Text>
    );
}

const styles = StyleSheet.create({

});

export default ManageExpense;