const initialState = { messages: [] };

export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
}
