import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    // Syntax: const [ stateName, saveStateFunction ] = importedHook<requiredDataType>(value passed in);
    const [ carData, setData ] = useState<[]>([]);

    // This is a function that will get the data
    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    //This is the actual call of the functio handleDataFetch, where the data is actually aquired
    useEffect( () => {
        handleDataFetch();
    }, [])
    // We return the data that we've saved
        return { carData, getData:handleDataFetch}
}
