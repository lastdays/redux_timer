import { connect } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from '../actions'
import CounterCanvas from '../components/CounterCanvas'

const doubly = (value) => {
  if (value < 10){
    return "0" + value.toString()
  }
  return value.toString()
}

const formatString = (value) => {
  let decimal = (value - Math.floor(value)).toFixed(1).toString().replace(/^\d+\./, "");
  var big = 0;
  if (value > 59) {
    big = Math.floor(value / 60).toString() + ":" + doubly((Math.floor(value) % 60))
  }
  else{
    big = doubly(Math.floor(value))
  }
  return {
    bigText: big,
    smallText: decimal
  }
}

const mapStateToProps = (state) => {
  return {
            ...formatString(state.counter.timer),
            isRunning: ((state) => {return state.counter.status == "STARTED"})(state) }
}

const mapDispatchToProps = (dispatch) => {
  return {  
    startTimer: () => {
      dispatch(startTimer())
    },
    stopTimer: () => {
      dispatch(stopTimer())
    },
    resetTimer: () => {
      dispatch(resetTimer())
    }
  }
}

const CounterComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterCanvas)

export default CounterComponent