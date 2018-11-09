import React from "react"
import "./bill_list.scss"
import { withState } from "recompose"

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

const enhance = withState('bill', 'pay', {
  name: 'someone',
  amount: "$1000.00",
  due: 17,
  paid: false,
})

const handleMarkPaid = bill => ({ ...bill, paid: !bill.paid })

export const BillList = enhance(({ bill, pay }) => {

  return (
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
              <Checkbox checked={bill.paid} onChange={() => pay(handleMarkPaid)} />
            </TableCell>
            <TableCell component="th" scope="row">{bill.name}</TableCell>
            <TableCell numeric>{bill.amount}</TableCell>
            <TableCell numeric>{bill.due}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
})
