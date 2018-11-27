import React from "react"
import "./bill_list.scss"
import { compose } from "recompose"

import { withExpenseHandlers, withExpenseData } from './Bill.hocs'

import Paper from '@material-ui/core/Paper'
// import Checkbox from '@material-ui/core/Checkbox'

export const AddBill = () => (
  <Paper>
  </Paper>
)

export default compose(
  withExpenseData,
  withExpenseHandlers
)(AddBill)
