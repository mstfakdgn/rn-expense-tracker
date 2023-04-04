import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name:'expenses',
    initialState: {
        expenses:[{
            id:'e1',
            description:'A pair of shoes',
            amount:59.99,
            date : new Date('2022-01-05').toDateString()
        },
        {
            id:'e2',
            description:'A pair of trousers',
            amount:89.29,
            date : new Date('2021-12-01').toDateString()
        },
        {
            id:'e3',
            description:'Some Bananas',
            amount:5.99,
            date : new Date('2022-02-19').toDateString()
        },
        {
            id:'e4',
            description:'A book',
            amount:14.99,
            date : new Date('2022-03-08').toDateString()
        },
        {
            id:'e5',
            description:'Another book',
            amount:18.59,
            date : new Date('2022-03-18').toDateString()
        },
        {
            id:'e6',
            description:'Another book',
            amount:18.59,
            date : new Date('2022-03-18').toDateString()
        },
        {
            id:'e7',
            description:'Another book',
            amount:18.59,
            date : new Date('2022-03-18').toDateString()
        },
        {
            id:'e8',
            description:'Another book',
            amount:18.59,
            date : new Date('2023-03-27').toDateString()
        },
        {
            id:'e9',
            description:'Another book',
            amount:18.59,
            date : new Date('2023-03-28').toDateString()
        },
        {
            id:'e10',
            description:'Another book',
            amount:18.59,
            date : new Date('2023-03-29').toDateString()
        }]
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        updateExpense: (state, action) => {
            //update
            const expenseIndex = state.expenses.findIndex((item => item.id == action.payload.id));

            state.expenses[expenseIndex].date= action.payload.date;
            state.expenses[expenseIndex].description = action.payload.description;
            state.expenses[expenseIndex].amount = action.payload.amount;
        },
        removeExpense: (state, action) => {
            state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id);
            // state.expenses.splice(state.expenses.indexOf(action.payload.id),1);
        } 
    }
});

export const addExpense = expensesSlice.actions.addExpense;
export const updateExpense = expensesSlice.actions.updateExpense;
export const removeExpense = expensesSlice.actions.removeExpense;
export default expensesSlice.reducer;
