import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

export const AuthContext=createContext();

const intstate={
    isAuth:false,
    token:null
}

const authReducer=(state,action)=>{
    switch(action.type){
        case "LoginSuccess":{
            return {
                ...state,
                isAuth:true,
                token:action.payload
            }
        }
        case "LoginFail":{
            return {
                ...state,
                isAuth:false,
                token:null
            }
        }
        default :{
            return state;
        }
    }
}

const AuthContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(authReducer,intstate)
  return (
    <div>
      <AuthContext.Provider value={[state,dispatch]}>
          {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
