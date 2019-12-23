import immer from "immer"
import ms from "ms.macro"
import {combineReducers} from "redux"

import {socketMiddleware} from "lib/socketMiddleware"

function addToast(state, itemType, itemPayload) {
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
  if (action.type === "queueItemDone") {
    return immer(state, draft => {
      draft.queueItem = null
    })
  }
  if (action.type === "nextQueueItem") {
    return immer(state, draft => {
      if (state.queueItem === null && state.queueItems.length > 0) {
        draft.queueItem = draft.queueItems[0]
        draft.queueItems = draft.queueItems.slice(1)
      }
    })
  }
  if (action.type === "@@socket/connected") {
    return immer(state, draft => {
      addToast(draft, "hello")
    })
  }
  if (action.type === "@@socket/received/updateChatters") {
    return immer(state, draft => {
      draft.chatters = action.payload
    })
  }
  if (action.type === "@@socket/received/whois") {
    return immer(state, draft => {
      addToast(draft, "whois", {
        toastProps: action.payload,
        duration: ms`10 seconds`,
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