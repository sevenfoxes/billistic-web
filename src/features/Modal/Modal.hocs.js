import { compose, withStateHandlers } from "recompose"

export const withModalState = compose(
  withStateHandlers(() => ({ showModal: false }), {
    openModal: () => () => ({ showModal: true }),
    closeModal: () => () => ({ showModal: false }),
  })

)
