import React from "react"
import "./bill_list.scss"
import { compose, withState } from "recompose"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

// const handleMarkPaid = bill => ({ ...bill, paid: !bill.paid })

const billList = ({ expenses, togglePaid }) => (
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
        <TableRow>
          <TableCell>
            <Checkbox checked={expenses.paid} onChange={togglePaid} />
          </TableCell>
          <TableCell component="th" scope="row">{expenses.name}</TableCell>
          <TableCell numeric>{expenses.amount}</TableCell>
          <TableCell numeric>{expenses.due}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
)

export const BillList = compose(
  withState('expenses', 'pay', {
    name: 'someone',
    amount: "$1000.00",
    due: 17,
    paid: false,
  }),
  // withHandlers({
  //   togglePaid: ({ firebase, expense, id }) => () =>
  //     firebase.update(`expense/${id}`, { paid: !expense.paid }),
  //   deleteExpense: ({ firebase, expenses, id }) => () =>
  //     firebase.remove(`expense/${id}`),
  // })
)(billList)
