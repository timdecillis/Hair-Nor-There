import { connect } from "react-redux";
import Counter from "./Counter";

const mapStateToProps = (state) => {
  return {value: state.value}
}

export const CounterContainer = connect(mapStateToProps)(Counter);