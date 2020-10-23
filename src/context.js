import React from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [title, setTitle] = React.useState("");
  const [notiz, setNotiz] = React.useState("");
  const [list, setList] = React.useState([]);
  const [isEditing, setEditing] = React.useState(false);
  const [editID, setEditId] = React.useState(null);
  const [warnung, setWarnung] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        title,
        notiz,
        warnung,
        setTitle,
        setNotiz,
        list,
        setList
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
};
