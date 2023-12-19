import { connect } from "react-redux";

import { set } from "./actions";
import Counter from "./Counter";

const mapStateToProps = (state) => {
  return { value: state.value }
}

const mapDispatchToProps = {
  onSubmit: (value) => (set(value))
}


export const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);