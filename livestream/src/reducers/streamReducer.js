const initialState = { isStreaming: false, viewers: 0 };

export default function streamReducer(state = initialState, action) {
  switch (action.type) {
    case "STREAM_START":
      return { ...state, isStreaming: true };
    case "STREAM_STOP":
      return { ...state, isStreaming: false };
    case "ADD_VIEWER":
      return { ...state, viewers: state.viewers + 1 };
    case "REMOVE_VIEWER":
      return { ...state, viewers: Math.max(0, state.viewers - 1) };
    default:
      return state;
  }
}