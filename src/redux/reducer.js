import immer from "immer"
import {combineReducers} from "redux"

import {socketMiddleware} from "lib/socketMiddleware"

function addQueueItemToState(state, itemType, itemPayload) {
  const item = {
    type: itemType,
    ...itemPayload,
  }
  if (state.queueItem === null) {
    state.queueItem = item
  } else {
    state.queueItems.push(item)
  }
}

const mainReducer = (state, action) => {
  if (action.type === "@@socket/connected") {
    return immer(state, draft => {
      addQueueItemToState(draft, "hello")
    })
  }
  if (action.type === "@@socket/received/updateChatters") {
    return immer(state, draft => {
      draft.chatters = action.payload
    })
  }
  if (action.type === "@@socket/received/whois") {
    return immer(state, draft => {
      addQueueItemToState(draft, "whois", {
        toastProps: action.payload,
      })
    })
  }
  if (!state) {
    return {
      queueItems: [],
      queueItem: null,
    }
  }
  return state
}

export default combineReducers({
  main: mainReducer,
  socket: socketMiddleware.reducer,
})