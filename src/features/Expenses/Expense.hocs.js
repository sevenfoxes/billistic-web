import { compose, withHandlers } from "recompose"
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'

export const withExpenseHandlers = withHandlers({
  togglePaid: ({ firestore }) => (id, paid = false) => firestore.update(`expenses/${id}`, { paid }),
})

export const withExpenseData = compose(
  firestoreConnect(() => (['expenses'])),
  connect(({ firestore }) => ({
    expenses: firestore.ordered.expenses,
  }))
)
