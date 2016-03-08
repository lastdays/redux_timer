export const startTimer = () => (dispatch, getState) => {
  dispatch({type: "START_TIMER"});
  const intervalID = setInterval(() => {
    
    if (getState().counter.status == "STARTED") {
      dispatch({type: "TICK"})
    }
    else {
      clearInterval(intervalID)
    }
  }, 100);

}

export const stopTimer = () => {
  return {
    type: "STOP_TIMER"
  }
}
export const resetTimer = () => {
  return {
    type: "RESET_TIMER"
  }
}