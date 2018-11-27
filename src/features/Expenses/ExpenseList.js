import React from "react"
import "./expense_list.scss"
import { compose } from "recompose"
import { withExpenseHandlers, withExpenseData } from './Expense.hocs'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

const Expenses = ({ expenses, togglePaid }) => expenses.map(expense => (
  <TableRow key={expense.id}>
    <TableCell>
      <Checkbox className="mark_paid" checked={expense.paid} onClick={() => togglePaid(expense.id, !expense.paid)} />
    </TableCell>
    <TableCell component="th" scope="row">{expense.name}</TableCell>
    <TableCell numeric>{expense.amount}</TableCell>
    <TableCell numeric>{expense.due}</TableCell>
  </TableRow>
))

export const billList = ({ expenses, togglePaid }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>paid</TableCell>
          <TableCell>Biller</TableCell>
          <TableCell numeric>Amount</TableCell>
          <TableCell numeric>Due</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {!expenses ? (<TableRow><TableCell>Not loaded</TableCell></TableRow>) : (<Expenses expenses={expenses} togglePaid={togglePaid} />)}
      </TableBody>
    </Table>
  </Paper>
)

export const BillList = compose(
  withExpenseData,
  withExpenseHandlers
)(billList)
