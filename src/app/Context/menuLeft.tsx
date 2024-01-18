"use client";



import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  toggleMenu: boolean;
};

type ActionType = 
| {type: 'OPEN' }
| {type: 'CLOSE'}


const initialState: StateType = {
  toggleMenu: false,
};

console.log('ACAAAAAA', initialState)

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, toggleMenu: true };
    case 'CLOSE':
        return { ...state, toggleMenu: false}
    default:
      return state;
  }
};

export const LeftMenuContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const LeftMenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LeftMenuContext.Provider value={{ state, dispatch }}>
      {children}
    </LeftMenuContext.Provider>
  );
};
