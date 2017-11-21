const mapbox = require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
    if (type === 'hotel') {
        
        const hotelMarker = document.createElement("div"); // Create a new, detached DIV
        hotelMarker.style.width = "32px";
        hotelMarker.style.height = "39px";
        hotelMarker.style.backgroundImage = iconURLs[hotels];
        new mapbox.Marker(hotelMarker).setLngLat([coords]).addTo(map);
        return hotelMarker;
    } else if (type === 'restaurant') {

        const restaurantMarker = document.createElement("div"); // Create a new, detached DIV
        restaurantMarker.style.width = "32px";
        restaurantMarker.style.height = "39px";
        restaurantMarker.style.backgroundImage = iconURLs[restaurants];
        new mapbox.Marker(restaurantMarker).setLngLat([coords]).addTo(map);
        return restaurantMarker;
    } else if (type === 'activitiy') {

        const activityMarker = document.createElement("div"); // Create a new, detached DIV
      	activityMarker.style.width = "32px";
        activityMarker.style.height = "39px";
        activityMarker.style.backgroundImage = iconURLs[restaurants];
        new mapbox.Marker(activityMarker).setLngLat([coords]).addTo(map);
        return activitityMarker;

    }



};

module.exports = buildMarker;