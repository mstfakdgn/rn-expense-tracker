import { useLayoutEffect } from "react";
import { Text,StyleSheet,View,TextInput } from "react-native";
import { GlobalStyles } from "../constants/styles";

import IconButton from "../components/UI/IconButton";
import { useSelector,useDispatch } from "react-redux";
import { removeExpense,addExpense, updateExpense } from "../store/expenses";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense ({route, navigation}) {
    const dispatch = useDispatch();

    const editedExpenseId = route.params?.expenseId;
    const isEdited = !!editedExpenseId;

    const fetchedExpenseData = useSelector((state) => state.expenses.expenses.find((item) => item.id === editedExpenseId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdited ? 'Edit Expense' : 'Add Expense'
        });
    },[navigation,isEdited])

    function deleteExpenseHandler(editedExpenseId) {
        dispatch(removeExpense({id:editedExpenseId}));
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        console.log(isEdited);
        isEdited 
            ? dispatch(updateExpense(expenseData))
            : dispatch(addExpense(expenseData));

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm submitButtonLabel={isEdited ? 'Update' : 'Add'} onCancel={cancelHandler} onSubmit={confirmHandler} defaultValues={fetchedExpenseData}/>
            {isEdited && (
                <View style={styles.deleteContainer}>
                    <IconButton name="trash" color={GlobalStyles.colors.error500} size={36} onPress={ () => deleteExpenseHandler(editedExpenseId)}/>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems:'center'
    }
    
});

export default ManageExpense;