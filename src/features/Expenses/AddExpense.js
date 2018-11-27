import React from "react"
import "./expense_list.scss"
import { compose } from "recompose"

import { withExpenseHandlers, withExpenseData } from './Expense.hocs'

import Paper from '@material-ui/core/Paper'
// import Checkbox from '@material-ui/core/Checkbox'

export const AddExpense = () => (
  <Paper>
  </Paper>
)

export default compose(
  withExpenseData,
  withExpenseHandlers
)(AddExpense)
