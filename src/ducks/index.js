import autodux from 'autodux'

const {
  reducer,
  actions: {
    setUsername,
    setEmail,
  },
  selectors: {
    getUsername,
    getEmail,
  },
} = autodux({
  initial: {
    username: 'Anonymous',
    email: 'anonymous@example.com',
  },
})

export default reducer

export { setUsername, setEmail, getUsername, getEmail }
