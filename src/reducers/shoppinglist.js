export const counter = (state = { timer: 2.0, status: "STOPPED"}, action) => {
  // console.log(state, " IN REDUCER")
  switch (action.type) {
    case "START_TIMER":
      return { ...state, status: "STARTED" }
    case "STOP_TIMER":
      return { ...state, status: "STOPPED" }
    case "RESET_TIMER":
      return { ...state, status: "STOPPED", timer: 0 }
    case "TICK":
      return { ...state, timer: state.timer + 0.1 }
    default:
      return state
  }
}

export default counter