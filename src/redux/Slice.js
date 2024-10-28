// src/redux/Slice.js
import { createSlice } from '@reduxjs/toolkit';
import phones from '../data';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        phones: phones,
        filteredPhones: phones,
        selectedBrands: [],
        selectedColors: [],
        selectedStorage: [],
    },
    reducers: {
        setBrands: (state, action) => {
            state.selectedBrands = action.payload;
        },
        setColors: (state, action) => {
            state.selectedColors = action.payload;
        },
        setStorage: (state, action) => {
            state.selectedStorage = action.payload;
        },
        applyFilters: (state) => {
            let filteredData = state.phones;

            if (state.selectedBrands.length) {
                filteredData = filteredData.filter(phone =>
                    state.selectedBrands.includes(phone.brand)
                );
            }
            if (state.selectedColors.length) {
                filteredData = filteredData.filter(phone =>
                    state.selectedColors.includes(phone.color)
                );
            }
            if (state.selectedStorage.length) {
                filteredData = filteredData.filter(phone =>
                    state.selectedStorage.includes(phone.storage)
                );
            }

            state.filteredPhones = filteredData;
        },
        resetFilters: (state) => {
            state.selectedBrands = [];
            state.selectedColors = [];
            state.selectedStorage = [];
            state.filteredPhones = state.phones;
        }
    }
});

export const { setBrands, setColors, setStorage, applyFilters, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
