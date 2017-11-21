const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {

        const markerDomEl = document.createElement("div"); 
        markerDomEl.style.width = "32px";
        markerDomEl.style.height = "39px";
        markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
        return new mapboxgl.Marker(markerDomEl).setLngLat(coords)

};





// if (type === 'hotels') {
    
//     const hotelMarker = document.createElement("div"); 
//     hotelMarker.style.width = "32px";
//     hotelMarker.style.height = "39px";
//     hotelMarker.style.backgroundImage = iconURLs[hotels];
//     return new mapboxgl.Marker(hotelMarker).setLngLat(coords)
// } else if (type === 'restaurants') {

//     const restaurantMarker = document.createElement("div"); 
//     restaurantMarker.style.width = "32px";
//     restaurantMarker.style.height = "39px";
//     restaurantMarker.style.backgroundImage = iconURLs[restaurants];
//     return new mapboxgl.Marker(restaurantMarker).setLngLat(coords)
// } else if (type === 'activity') {

//     const activityMarker = document.createElement("div"); 
//       activityMarker.style.width = "32px";
//     activityMarker.style.height = "39px";
//     activityMarker.style.backgroundImage = iconURLs[restaurants];
//     return new mapboxgl.Marker(activityMarker).setLngLat(coords)

// }

module.exports = buildMarker;
