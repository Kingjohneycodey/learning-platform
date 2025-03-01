import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isStreaming: false,
  viewers: 0,
  messages: [],
};

const streamSlice = createSlice({
  name: 'stream',
  initialState,
  reducers: {
    startStream: (state) => { state.isStreaming = true; },
    stopStream: (state) => { state.isStreaming = false; },
    addViewer: (state) => { state.viewers += 1; },
    removeViewer: (state) => { state.viewers -= 1; },
    addMessage: (state, action) => { state.messages.push(action.payload); },
  },
});

export const { startStream, stopStream, addViewer, removeViewer, addMessage } = streamSlice.actions;
export default streamSlice.reducer;
