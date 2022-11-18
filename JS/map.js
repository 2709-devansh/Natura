var map = new maplibregl.Map({
  container: "map",
  style: "https://demotiles.maplibre.org/style.json", // stylesheet location
  center: [-74.006, 40.7128], // starting position [lng, lat]
  zoom: 3, // starting zoom
});

map.on("load", function () {
  //inserting custom marker
  map.loadImage(
    "https://maplibre.org/maplibre-gl-js-docs/assets/custom_marker.png",
    function (error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
    }
  );

  //adding places
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            description: "<p> Barcelona </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [2.168568, 41.387397],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Berlin </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [13.405, 52.52],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Dubai </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [55.2708, 25.2048],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> London </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-0.1276, 51.5072],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Mumbai </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [72.8777, 19.076],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Singapore </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [103.8198, 1.3521],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Moscow </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [37.6173, 55.7558],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Paris </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [2.3522, 48.8566],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Rome </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [12.4964, 41.9028],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Sydney </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [151.2093, -33.8688],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Bern </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [7.4474, 46.948],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Bangkok </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [100.5018, 13.7563],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> New York </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-74.006, 40.7128],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Washington DC </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-77.0369, 38.9072],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Los Angeles </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-118.2437, 34.0522],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Las Vegas </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-115.1391, 36.1716],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> San Francisco </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-122.4194, 37.7749],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Boston </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-71.0589, 42.3601],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Denver </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-104.9903, 39.7392],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Atlanta </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-84.388, 33.749],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Nashville </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-86.7816, 36.1627],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Houston </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-95.3698, 29.7604],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Dallas </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-96.797, 32.7767],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Indianapolis </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-86.1581, 39.7684],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Miami </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [-80.1918, 25.76174],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Delhi </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [77.1025, 28.7041],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Kolkata </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [88.3639, 22.5726],
          },
        },

        {
          type: "Feature",
          properties: {
            description: "<p> Chennai </p>",
          },
          geometry: {
            type: "Point",
            coordinates: [80.2707, 13.0827],
          },
        },
      ],
    },
  });

  //layers
  map.addLayer({
    id: "places",
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "custom-marker",
      "icon-overlap": "always",
    },
  });

  // Create a popup, but don't add it to the map yet.
  var popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on("mouseenter", "places", function (e) {
    map.getCanvas().style.cursor = "pointer";

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseleave", "places", function () {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});
