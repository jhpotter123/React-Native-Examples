export const initialState = { loading: false, selectedPet: "", petData: null }

export function petsReducer(state, action) {
	switch (action.type) {
		case "PET_SELECTED": {
			return {
				...state,
				selectedPet: action.payload
			};
		}
		case "FETCH_PET": {
			return {
				...state,
				loading: true,
				petData: null
			};
		}
		case "FETCH_PET_SUCCESS": {
			return {
				...state,
				loading: false,
				petData: action.payload
			};
		}

		case "RESET": {
			return initialState;
		}

		default:
			throw new Error(`Not supported action ${action.type}`);
	}
}
