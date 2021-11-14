import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    centre: {
        location: '',
        vo: '',
        vocount: 1,
        date: '09/11/2021',
        bags: {
            green: 0,
            blue: 0
        },
        dxlabel: '',
        dxseal: '',
        lip: 0,
        apdirect: 0,
        resubs: 0,
        details: ''
    },
    booths: {}
}

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function updateCentre(info) {
        dispatch({
            type: 'UPDATE_CENTRE',
            payload: info
        });
    }

    function updateVo(vo) {
        dispatch({
            type: 'UPDATE_VO',
            payload: vo
        });
    }

    return (
    <GlobalContext.Provider value={{
        centre: state.centre,
        booths: state.booths,
        updateCentre,
        updateVo
    }}>
        {children}
    </GlobalContext.Provider>
    );
}