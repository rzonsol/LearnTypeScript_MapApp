//Instruction to every other class on how they can be an argument to addMarker
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class GoogleMap {
	private map: google.maps.Map;

	constructor(divId: string) {
		this.map = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(mappable: Mappable): void {
		new google.maps.Marker({
			map: this.map,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng
			}
		});
	}
}
