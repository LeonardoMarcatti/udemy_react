import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: null,
  onLogout: () => null
});

export default AuthContext;