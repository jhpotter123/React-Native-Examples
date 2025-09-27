export const GeoCoder = {
	geocode_address_and_parse: async function(API_KEY, language_code = null, address = null) {
		let res = false;

		if ( language_code === null || address === null ) {
			console.log('You have not called this method correcly.');
			return;
		}

		// google map geocode api url
		let url = `https://maps.google.com/maps/api/geocode/json?language=language_code&key=${API_KEY}&sensor=false&address=${address}`;
		
		// get the json response
		let response = await fetch(url);
		let responseJson = await response.json();
		
		// response status will be 'OK', if able to geocode given address
		if ( responseJson['status'] === 'OK' ) {
			// First get the formatted address from the response.
			if ( responseJson['results'].length > 0 ) {
				let resultsEntry = responseJson['results'][0];
				let formatted_address = resultsEntry.formatted_address;
				
				let sub_elems = [];
				
				sub_elems.push({
					formatted_address
				});
				
				let address_components = resultsEntry.address_components;				
				address_components.map((address_component) => {
					let types = address_component['types'];

					if ( types.length > 0 ) {
						//  Now extract out the cooresponding address commponets from the object.
						if ( types.includes('postal_town') ) {
							sub_elems.push({
								postal_town: address_component['long_name']
							});
						}
						else if ( types.includes('locality') ) {
							sub_elems.push({
								locality: address_component['long_name']
							});
						}
						else if ( types.includes('sublocality') ) {
							types.map((type) => {
								let found = type.includes("sublocality_level_"); 
								if ( found.length > 0 ) {
									sub_elems.push({
										type: address_component['long_name']
									});
								}
							});
						}
						// Street number
						else if ( types.includes('street_number') ) {
							sub_elems.push({
								street_number: address_component['long_name']
							});
						}
						// Street in some countries
						else if ( types.includes('route') ) {
							sub_elems.push({
								route: address_component['long_name']
							});
						}
						// State in some countries
						else if ( types.includes('administrative_area_level_1') ) {
							sub_elems.push({
								administrative_area_level_1: address_component['long_name']
							});
						}
						// postal code seems to be always present
						else if ( types.includes('postal_code') ) {
							sub_elems.push({
								postal_code: address_component['long_name']
							});
						}
						// country seems to be always present as well
						else if ( types.includes('country') ) {
							sub_elems.push({
								country: address_component['long_name']
							});
							sub_elems.push({
								country_code: address_component['short_name']
							});
						}
					}
				})

				res = sub_elems;
			}
			else {
				// No results...  oops do something here.
			}
		}

		return res;
	},

};
