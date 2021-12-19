import React from "react";

const withContext = (Context, use) => ({children}) => {
  const [state, dispatch] = use();

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
};

export default withContext;