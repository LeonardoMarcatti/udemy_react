import React from "react";

const cardContext = React.createContext({
  onShow: () => false,
  itens: [],
  total: 0,
  addItem: item => {},
  removeItem: id => {}
});

export default cardContext;