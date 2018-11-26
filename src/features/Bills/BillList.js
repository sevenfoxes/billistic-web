import React from "react"
import "./bill_list.scss"
import { compose, withHandlers, withState } from "recompose"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

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

export const withExpenseHandlers = withHandlers({
  togglePaid: ({ firestore }) => (id, paid = false) => firestore.update(`expenses/${id}`, { paid }),
})

export const withExpenseData = compose(
  firestoreConnect(() => (['expenses'])),
  connect(({ firestore }) => ({
    expenses: firestore.ordered.expenses,
  }))
)

export const BillList = compose(
  withExpenseData,
  withExpenseHandlers
)(billList)
