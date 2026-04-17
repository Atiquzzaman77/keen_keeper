'use client';

import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    
    const addEvent = (friendName, type) => {
        const newEvent = {
            id: Date.now(),
            friendName,
            type, 
            date: new Date().toLocaleString(),
        };
        setEvents((prev) => [newEvent, ...prev]);
    };

    return (
        <TimelineContext.Provider value={{ events, addEvent }}>
            {children}
        </TimelineContext.Provider>
    );
};
export const useTimeline = () => {
    const context = useContext(TimelineContext);
    if (!context) {
        throw new Error("useTimeline must be used within a TimelineProvider");
    }
    return context;
};