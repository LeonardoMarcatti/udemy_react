import React, { useReducer } from "react";

const DataLabel = React.createContext({
  htmlFor: '',
  labelClass: '',
  className: '',
  txt: '',
  type: '',
  name: '',
  id: ''
});

export default DataLabel;