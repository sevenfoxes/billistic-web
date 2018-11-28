import React from "react"
import "./expense_list.scss"
import { compose } from "recompose"

import { withExpenseHandlers, withExpenseData } from './Expense.hocs'

import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
// import Checkbox from '@material-ui/core/Checkbox'


export const AddExpense = ({ open }) => (
  <div>
    <Button>Open Modal</Button>
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div>
        testing 123
      </div>
    </Modal>
  </div>
)

export default compose(
  withExpenseData,
  withExpenseHandlers
)(AddExpense)
