import autodux from 'autodux'

export const { actions, initial, reducer } = autodux({
  slice: 'bills',
  initial: {
    loading: false,
    loaded: false,
    data: [],
  },
  actions: {
    setBills: () => ({
      loading: true,
    }),
    setBillsSuccess: (state, payload) => ({
      ...initial,
      loaded: true,
      data: payload,
    }),
  },
})
