import React from "react";
const AppContext = React.createContext();

const Lowest = () => (
  <div>
    <AppContext.Consumer>{context => context.name}</AppContext.Consumer>
  </div>
);

export default Lowest;
