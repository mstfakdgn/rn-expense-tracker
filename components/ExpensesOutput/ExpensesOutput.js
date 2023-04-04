import { View,StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';


import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';



function ExpensesOutput({expensesPeriod}) {


    if (expensesPeriod==="Last 7 Days") {
        const expensesRdx = useSelector((state) => state.expenses.expenses).filter((item) => {
            const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
            
            return (new Date(item.date)-Date.now()) / (1000*60*60*24)>-7
        });

        return (
            <View style={styles.container}>
                <ExpensesSummary expenses={expensesRdx} periodName={expensesPeriod}/>
                <ExpensesList expenses={expensesRdx}/>
            </View>
        );
    }else {
       const expensesRdx = useSelector((state) => state.expenses.expenses);

       return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expensesRdx} periodName={expensesPeriod}/>
            <ExpensesList expenses={expensesRdx}/>
        </View>
    );
    }
    
    
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;