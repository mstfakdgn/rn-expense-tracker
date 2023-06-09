import { Text, TextInput,View,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({label, style,textInputConfig}) {

    const inputStyles = [styles.input];

    console.log(textInputConfig.isValid);
    if (!textInputConfig.isValid) {
        inputStyles.push(styles.invalidStyle)
    }

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, !textInputConfig.isValid && styles.invalidLabel]}>{label}</Text>
            <TextInput {...textInputConfig} style={inputStyles}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical:8,
        marginHorizontal:4
    },
    label: {
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom:4
    },
    input: {
        backgroundColor:GlobalStyles.colors.primary100,
        color:GlobalStyles.colors.primary700,
        padding:6,
        borderRadius:6,
        fontSize:18
    },
    inputMultiline: {
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidStyle: {
        backgroundColor:GlobalStyles.colors.error50
    },
    invalidLabel: {
        color:GlobalStyles.colors.error500
    }
});

export default Input;