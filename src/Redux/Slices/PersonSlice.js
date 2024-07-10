import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    infos: JSON.parse(localStorage.getItem('infos')) || [],
    showAdd: true,
};


const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setShowAdd(state) {
            state.showAdd = !state.showAdd;
        },
        addEmptyInfo(state) {
            state.infos.push({
                name: "",
                dob: "",
                aadharNumber: "",
                mobileNumber: "",
                age: "",
            });
        },
        updateInfo(state, action) {
            const { index, field, value } = action.payload;
            state.infos[index][field] = value;
        },
        deleteInfo(state, action) {
            const index = action.payload;
            state.infos.splice(index, 1);
        },
    },
});

export const { setShowAdd, addEmptyInfo, updateInfo, deleteInfo } = personSlice.actions;
export default personSlice.reducer;
