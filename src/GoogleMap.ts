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
}
