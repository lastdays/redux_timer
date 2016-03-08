import React, { PropTypes } from 'react';


export const CounterCanvas = ({smallText, bigText, startTimer, stopTimer, resetTimer, isRunning}) => (
  <div>
    <div className={((isRunning) => { return isRunning ? " timer running" : " timer stopped"})(isRunning)}>
      <span className={"big"}>{bigText}</span>
      <span className={"small"}>.{smallText}</span>
    </div>
    <div className={"buttons-block"}>
      <button onClick = {startTimer}> 
        {"Старт"} 
      </button>
      <button onClick = {stopTimer}> 
        {"Стоп"} 
      </button>
      <button onClick = {resetTimer}> 
        {"Сбросить"} 
      </button>
    </div>
  </div>
)

CounterCanvas.propTypes = {
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
  bigText: PropTypes.string.isRequired,
  bigText: PropTypes.string.isRequired,
  isRunning: PropTypes.bool.isRequired
}

export default CounterCanvas