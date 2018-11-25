import React from "react"
import "./bill_list.scss"
import { compose } from "recompose"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

// const handleMarkPaid = bill => ({ ...bill, paid: !bill.paid })

const Expense = ({ expense }) => (
  <TableRow>
    <TableCell>
      <Checkbox checked={expense.paid} />
    </TableCell>
    <TableCell component="th" scope="row">{expense.name}</TableCell>
    <TableCell numeric>{expense.amount}</TableCell>
    <TableCell numeric>{expense.due}</TableCell>
  </TableRow>
)

const billList = ({ expenses }) => (
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
        {!expenses ? (<TableRow><TableCell>Not loaded</TableCell></TableRow>) : expenses.map(expense => (<Expense expense={expense} key={expense} />))}
      </TableBody>
    </Table>
  </Paper>
)

const mapStateToProps = ({ firestore }) => ({
  expenses: firestore.ordered.expenses,
})

const mapDispatchToProps = {}

export const BillList = compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => ([
    {
      collection: 'expenses',
    },
  ]))
)(billList)
