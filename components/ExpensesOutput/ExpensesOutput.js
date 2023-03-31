import { View,StyleSheet } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';
import IconButton from '../UI/IconButton';

const DUMMY_EXPENSES = [
    {
        id:'e1',
        description:'A pair of shoes',
        amount:59.99,
        date : new Date('2022-01-05')
    },
    {
        id:'e2',
        description:'A pair of trousers',
        amount:89.29,
        date : new Date('2021-12-01')
    },
    {
        id:'e3',
        description:'Some Bananas',
        amount:5.99,
        date : new Date('2022-02-19')
    },
    {
        id:'e4',
        description:'A book',
        amount:14.99,
        date : new Date('2022-03-08')
    },
    {
        id:'e5',
        description:'Another book',
        amount:18.59,
        date : new Date('2022-03-18')
    },
    {
        id:'e6',
        description:'Another book',
        amount:18.59,
        date : new Date('2022-03-18')
    },
    {
        id:'e7',
        description:'Another book',
        amount:18.59,
        date : new Date('2022-03-18')
    },
    {
        id:'e8',
        description:'Another book',
        amount:18.59,
        date : new Date('2023-03-27')
    },
    {
        id:'e9',
        description:'Another book',
        amount:18.59,
        date : new Date('2023-03-28')
    },
    {
        id:'e10',
        description:'Another book',
        amount:18.59,
        date : new Date('2023-03-29')
    }
];

function ExpensesOutput({expenses, expensesPeriod}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:24,
        backgroundColor: GlobalStyles.colors.primary700
    }
});

export default ExpensesOutput;