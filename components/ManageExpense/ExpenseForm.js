import { View,StyleSheet,Text,Alert } from "react-native";
import { useEffect, useState } from "react";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputs, setInputs] = useState({
        amount: { 
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value:defaultValues ? defaultValues.date.slice(0,10) : '', 
            isValid: true
        },
        description:{
            value: defaultValues ? defaultValues.description.toString() : '',
            isValid: true
        } 
    });

    function inputChangedHandler(inputIdentifier,enteredValue) {
        setInputs((currentInputs) => {
            return {
                ...currentInputs,
                [inputIdentifier]: { value: enteredValue, isValid:true }
            }
        });
    }

    function submitHandler () {

        const amountIsValid = !isNaN(inputs.amount.value) && inputs.amount.value>0;
        const dateIsValid = inputs.date.value == "" ? false : new Date(inputs.date.value).toISOString() !== "Invalid Date" ? true : false;
        const descriptionIsValid = inputs.description.value.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) { 
            //Alert.alert("Invalid input", "Please check your input values");
            setInputs((cur) => {
                return {
                    amount: { value: cur.amount.value, isValid: amountIsValid},
                    date: { value: cur.date.value, isValid: dateIsValid},
                    description: { value: cur.description.value, isValid: descriptionIsValid},
                }
            })
            return;
        }

        const expenseData = {
            id:"k1",
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value).toISOString(),
            description: inputs.description.value
        };

        onSubmit(expenseData);
    }
    
    const isvalid = inputs.amount.isValid && inputs.date.isValid && inputs.description.isValid;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Expense</Text>
            <View style={styles.innerContainer}>
                <Input label="Amount" textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value:inputs.amount.value,
                    isValid: inputs.amount.isValid
                }} style={styles.rowInput}/>
                <Input label="Date" textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength:10,
                    onChangeText:inputChangedHandler.bind(this, 'date'),
                    value:inputs.date.value,
                    isValid: inputs.date.isValid
                }} style={styles.rowInput}/>
            </View>
            <Input label="Description" textInputConfig={{
                multiline:true,
                onChangeText:inputChangedHandler.bind(this, 'description'),
                value:inputs.description.value,
                isValid: inputs.description.isValid
                //autoCorrect: false // default is true
                // autoCapitalize:'none'
            }}/>
            {!isvalid && <Text style={styles.errorText}>Invalida input values</Text>}
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:40
    },
    innerContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
     },
    rowInput: {
        flex:1,
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center'
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button: {
        minWidth:120,
        marginHorizontal:8
    },
    errorText: {
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8
    }
});

export default ExpenseForm;