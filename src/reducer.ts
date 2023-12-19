const initialState = {value: 0};

export const reducer = (state = initialState, action: any) => {
  if (action.type === 'INCREMENT') {
    return {value: state.value + 1}
  }
  return state;
}

