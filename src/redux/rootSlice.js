import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
	name: "root",
	initialState: {
		userName: localStorage.getItem("userName") ?? "",
		email: localStorage.getItem("email") ?? "",
		address: localStorage.getItem("address") ?? "",
		floor: localStorage.getItem("floor") ?? "",
		amenity: localStorage.getItem("amenity") ?? "",
		hasParking: localStorage.getItem("hasParking") ?? "",
		parkingType: localStorage.getItem("parkingType") ?? "",
		price: localStorage.getItem("price") ?? "",
		image: localStorage.getItem("image") ?? "",
		hasElevator: localStorage.getItem("hasElevator") ?? "",
	},
	reducers: {
		enterName: (state, action) => {
			state.userName = action.payload;
		},
		enterEmail: (state, action) => {
			state.email = action.payload;
		},
		enterAddress: (state, action) => {
			state.address = action.payload;
		},
		enterFloor: (state, action) => {
			state.floor = action.payload;
		},
		selectAmenity: (state, action) => {
			state.amenity = action.payload;
		},
		enterParking: (state, action) => {
			state.hasParking = action.payload;
		},
		selectParkingType: (state, action) => {
			state.parkingType = action.payload;
		},
		enterPrice: (state, action) => {
			state.price = action.payload;
		},
		uploadImage: (state, action) => {
			state.image = action.payload;
		},
		enterElevator: (state, action) => {
			state.hasElevator = action.payload;
		},
	},
});

export const reducer = rootSlice.reducer;

export const {
	enterName,
	enterEmail,
	enterAddress,
	enterFloor,
	selectAmenity,
	enterParking,
	selectParkingType,
	enterPrice,
	uploadImage,
	enterElevator,
} = rootSlice.actions;
