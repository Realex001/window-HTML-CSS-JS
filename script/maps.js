initMap();

async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const map = new YMap(document.querySelector(".home-page-map"), {
    location: {
      center: [60.606589, 56.852831],
      zoom: 15,
    },
    showScaleInCopyrights: true,
  });

  const layer = new YMapDefaultSchemeLayer({
    customization: [
      {
        tags: "country",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.8,
            zoom: 0,
          },
          {
            opacity: 0.8,
            zoom: 1,
          },
          {
            opacity: 0.8,
            zoom: 2,
          },
          {
            opacity: 0.8,
            zoom: 3,
          },
          {
            opacity: 0.8,
            zoom: 4,
          },
          {
            opacity: 1,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "country",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: [
          {
            hue: "#fed09f",
          },
        ],
      },
      {
        tags: "vegetation",
        elements: "geometry",
        stylers: [
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#feb76d",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.9,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.8,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "national_park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            zoom: 0,
          },
          {
            color: "#fed09f",
            zoom: 1,
          },
          {
            color: "#fed09f",
            zoom: 2,
          },
          {
            color: "#fed09f",
            zoom: 3,
          },
          {
            color: "#fed09f",
            zoom: 4,
          },
          {
            color: "#fed09f",
            zoom: 5,
          },
          {
            color: "#fed09f",
            zoom: 6,
          },
          {
            color: "#fed09f",
            zoom: 7,
          },
          {
            color: "#fed09f",
            zoom: 8,
          },
          {
            color: "#fed09f",
            zoom: 9,
          },
          {
            color: "#fed09f",
            zoom: 10,
          },
          {
            color: "#fed09f",
            zoom: 11,
          },
          {
            color: "#fed09f",
            zoom: 12,
          },
          {
            color: "#fed09f",
            zoom: 13,
          },
          {
            color: "#fed5a9",
            zoom: 14,
          },
          {
            color: "#fedab3",
            zoom: 15,
          },
          {
            color: "#fedab3",
            zoom: 16,
          },
          {
            color: "#fedab3",
            zoom: 17,
          },
          {
            color: "#fedab3",
            zoom: 18,
          },
          {
            color: "#fedab3",
            zoom: 19,
          },
          {
            color: "#fedab3",
            zoom: 20,
          },
          {
            color: "#fedab3",
            zoom: 21,
          },
        ],
      },
      {
        tags: "sports_ground",
        elements: "geometry",
        stylers: [
          {
            color: "#fec486",
            opacity: 0,
            zoom: 0,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 1,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 2,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 3,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 4,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 5,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 6,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 7,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 8,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 9,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 10,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 11,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 12,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 13,
          },
          {
            color: "#fec990",
            opacity: 0,
            zoom: 14,
          },
          {
            color: "#fece9a",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#fecf9c",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fed09d",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fed1a1",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fed2a2",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fed3a4",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "terrain",
        elements: "geometry",
        stylers: [
          {
            hue: "#fee7cd",
          },
          {
            opacity: 0.3,
            zoom: 0,
          },
          {
            opacity: 0.3,
            zoom: 1,
          },
          {
            opacity: 0.3,
            zoom: 2,
          },
          {
            opacity: 0.3,
            zoom: 3,
          },
          {
            opacity: 0.3,
            zoom: 4,
          },
          {
            opacity: 0.35,
            zoom: 5,
          },
          {
            opacity: 0.4,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.8,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "geographic_line",
        elements: "geometry",
        stylers: [
          {
            color: "#fa8805",
          },
        ],
      },
      {
        tags: "land",
        elements: "geometry",
        stylers: [
          {
            color: "#fde8ce",
            zoom: 0,
          },
          {
            color: "#fde8ce",
            zoom: 1,
          },
          {
            color: "#fde8ce",
            zoom: 2,
          },
          {
            color: "#fde8ce",
            zoom: 3,
          },
          {
            color: "#fde8ce",
            zoom: 4,
          },
          {
            color: "#fdead3",
            zoom: 5,
          },
          {
            color: "#fdecd7",
            zoom: 6,
          },
          {
            color: "#feefdc",
            zoom: 7,
          },
          {
            color: "#fef1e1",
            zoom: 8,
          },
          {
            color: "#fef1e1",
            zoom: 9,
          },
          {
            color: "#fef1e1",
            zoom: 10,
          },
          {
            color: "#fef1e1",
            zoom: 11,
          },
          {
            color: "#fef1e1",
            zoom: 12,
          },
          {
            color: "#fef1e1",
            zoom: 13,
          },
          {
            color: "#fef3e6",
            zoom: 14,
          },
          {
            color: "#fef6eb",
            zoom: 15,
          },
          {
            color: "#fef6ec",
            zoom: 16,
          },
          {
            color: "#fef7ed",
            zoom: 17,
          },
          {
            color: "#fef7ed",
            zoom: 18,
          },
          {
            color: "#fff7ee",
            zoom: 19,
          },
          {
            color: "#fff8ef",
            zoom: 20,
          },
          {
            color: "#fff8f0",
            zoom: 21,
          },
        ],
      },
      {
        tags: "residential",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fef1e1",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fef2e3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fef2e4",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fef3e6",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fff4e8",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fff4e9",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "structure",
          none: ["building", "fence"],
        },
        elements: "geometry",
        stylers: [
          {
            opacity: 0.9,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fedab4",
          },
          {
            opacity: 0.7,
            zoom: 0,
          },
          {
            opacity: 0.7,
            zoom: 1,
          },
          {
            opacity: 0.7,
            zoom: 2,
          },
          {
            opacity: 0.7,
            zoom: 3,
          },
          {
            opacity: 0.7,
            zoom: 4,
          },
          {
            opacity: 0.7,
            zoom: 5,
          },
          {
            opacity: 0.7,
            zoom: 6,
          },
          {
            opacity: 0.7,
            zoom: 7,
          },
          {
            opacity: 0.7,
            zoom: 8,
          },
          {
            opacity: 0.7,
            zoom: 9,
          },
          {
            opacity: 0.7,
            zoom: 10,
          },
          {
            opacity: 0.7,
            zoom: 11,
          },
          {
            opacity: 0.7,
            zoom: 12,
          },
          {
            opacity: 0.7,
            zoom: 13,
          },
          {
            opacity: 0.7,
            zoom: 14,
          },
          {
            opacity: 0.7,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 0.6,
            zoom: 17,
          },
          {
            opacity: 0.6,
            zoom: 18,
          },
          {
            opacity: 0.6,
            zoom: 19,
          },
          {
            opacity: 0.6,
            zoom: 20,
          },
          {
            opacity: 0.6,
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fec68b",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 0.5,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.5,
            zoom: 8,
          },
          {
            opacity: 0.5,
            zoom: 9,
          },
          {
            opacity: 0.5,
            zoom: 10,
          },
          {
            opacity: 0.5,
            zoom: 11,
          },
          {
            opacity: 0.5,
            zoom: 12,
          },
          {
            opacity: 0.5,
            zoom: 13,
          },
          {
            opacity: 0.5,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.5,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 4,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 5,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fee4c5",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feead2",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feefde",
            opacity: 0.67,
            zoom: 16,
          },
          {
            color: "#fff5eb",
            opacity: 0.33,
            zoom: 17,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 18,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 19,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "park",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.icon",
        types: "point",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "entrance",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            hue: "#f17e04",
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.fill",
        stylers: [
          {
            opacity: 0.8,
          },
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
            zoom: 0,
          },
          {
            color: "#974f02",
            zoom: 1,
          },
          {
            color: "#974f02",
            zoom: 2,
          },
          {
            color: "#974f02",
            zoom: 3,
          },
          {
            color: "#974f02",
            zoom: 4,
          },
          {
            color: "#934d02",
            zoom: 5,
          },
          {
            color: "#8f4b02",
            zoom: 6,
          },
          {
            color: "#8b4902",
            zoom: 7,
          },
          {
            color: "#864602",
            zoom: 8,
          },
          {
            color: "#824402",
            zoom: 9,
          },
          {
            color: "#7e4202",
            zoom: 10,
          },
          {
            color: "#7e4202",
            zoom: 11,
          },
          {
            color: "#7e4202",
            zoom: 12,
          },
          {
            color: "#7e4202",
            zoom: 13,
          },
          {
            color: "#7e4202",
            zoom: 14,
          },
          {
            color: "#7e4202",
            zoom: 15,
          },
          {
            color: "#7e4202",
            zoom: 16,
          },
          {
            color: "#7e4202",
            zoom: 17,
          },
          {
            color: "#7e4202",
            zoom: 18,
          },
          {
            color: "#7e4202",
            zoom: 19,
          },
          {
            color: "#7e4202",
            zoom: 20,
          },
          {
            color: "#7e4202",
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "polyline",
        stylers: [
          {
            color: "#b05c03",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "geometry.fill.pattern",
        types: "polyline",
        stylers: [
          {
            scale: 1,
          },
          {
            color: "#fc901d",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.9,
            zoom: 0,
          },
          {
            opacity: 0.9,
            zoom: 1,
          },
          {
            opacity: 0.9,
            zoom: 2,
          },
          {
            opacity: 0.9,
            zoom: 3,
          },
          {
            opacity: 0.9,
            zoom: 4,
          },
          {
            opacity: 0.9,
            zoom: 5,
          },
          {
            opacity: 0.9,
            zoom: 6,
          },
          {
            opacity: 0.9,
            zoom: 7,
          },
          {
            opacity: 0.9,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 0.9,
            zoom: 10,
          },
          {
            opacity: 0.9,
            zoom: 11,
          },
          {
            opacity: 0.9,
            zoom: 12,
          },
          {
            opacity: 0.9,
            zoom: 13,
          },
          {
            opacity: 0.9,
            zoom: 14,
          },
          {
            opacity: 0.9,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 13,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 14,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 16,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 17,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 18,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 19,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 20,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 21,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 0,
            zoom: 13,
          },
          {
            opacity: 0,
            zoom: 14,
          },
          {
            opacity: 0,
            zoom: 15,
          },
          {
            opacity: 0,
            zoom: 16,
          },
          {
            opacity: 0,
            zoom: 17,
          },
          {
            opacity: 0,
            zoom: 18,
          },
          {
            opacity: 0,
            zoom: 19,
          },
          {
            opacity: 0,
            zoom: 20,
          },
          {
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c56702",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.2,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 2.51,
            zoom: 9,
          },
          {
            scale: 2.62,
            zoom: 10,
          },
          {
            scale: 1.68,
            zoom: 11,
          },
          {
            scale: 1.67,
            zoom: 12,
          },
          {
            scale: 1.38,
            zoom: 13,
          },
          {
            scale: 1.19,
            zoom: 14,
          },
          {
            scale: 1.08,
            zoom: 15,
          },
          {
            scale: 1.04,
            zoom: 16,
          },
          {
            scale: 0.91,
            zoom: 17,
          },
          {
            scale: 0.84,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.29,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 4.21,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 2.74,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 2.04,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 2.13,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.88,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.59,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.55,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.37,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.26,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 1.69,
            zoom: 10,
          },
          {
            scale: 1.26,
            zoom: 11,
          },
          {
            scale: 1.41,
            zoom: 12,
          },
          {
            scale: 1.19,
            zoom: 13,
          },
          {
            scale: 1.04,
            zoom: 14,
          },
          {
            scale: 0.97,
            zoom: 15,
          },
          {
            scale: 1.15,
            zoom: 16,
          },
          {
            scale: 0.99,
            zoom: 17,
          },
          {
            scale: 0.89,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.12,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 1.9,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 1.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.83,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.64,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.51,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.44,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.69,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.47,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.34,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.28,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.28,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 1.25,
            zoom: 12,
          },
          {
            scale: 0.95,
            zoom: 13,
          },
          {
            scale: 0.81,
            zoom: 14,
          },
          {
            scale: 0.95,
            zoom: 15,
          },
          {
            scale: 1.1,
            zoom: 16,
          },
          {
            scale: 0.93,
            zoom: 17,
          },
          {
            scale: 0.85,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.61,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.36,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.22,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.41,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.63,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.4,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.25,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 2.25,
            zoom: 13,
          },
          {
            scale: 1.27,
            zoom: 14,
          },
          {
            scale: 1.25,
            zoom: 15,
          },
          {
            scale: 1.31,
            zoom: 16,
          },
          {
            scale: 1.04,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.31,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.76,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.89,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.55,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.36,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.27,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.27,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0.9,
            zoom: 14,
          },
          {
            scale: 0.78,
            zoom: 15,
          },
          {
            scale: 0.88,
            zoom: 16,
          },
          {
            scale: 0.8,
            zoom: 17,
          },
          {
            scale: 0.78,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.31,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.19,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.31,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.21,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.17,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "is_tunnel",
          none: "path",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fee2c3",
            zoom: 0,
          },
          {
            color: "#fee2c3",
            zoom: 1,
          },
          {
            color: "#fee2c3",
            zoom: 2,
          },
          {
            color: "#fee2c3",
            zoom: 3,
          },
          {
            color: "#fee2c3",
            zoom: 4,
          },
          {
            color: "#fee2c3",
            zoom: 5,
          },
          {
            color: "#fee2c3",
            zoom: 6,
          },
          {
            color: "#fee2c3",
            zoom: 7,
          },
          {
            color: "#fee2c3",
            zoom: 8,
          },
          {
            color: "#fee2c3",
            zoom: 9,
          },
          {
            color: "#fee2c3",
            zoom: 10,
          },
          {
            color: "#fee2c3",
            zoom: 11,
          },
          {
            color: "#fee2c3",
            zoom: 12,
          },
          {
            color: "#fee2c3",
            zoom: 13,
          },
          {
            color: "#fee7cd",
            zoom: 14,
          },
          {
            color: "#feecd7",
            zoom: 15,
          },
          {
            color: "#feedd9",
            zoom: 16,
          },
          {
            color: "#feeeda",
            zoom: 17,
          },
          {
            color: "#feeedc",
            zoom: 18,
          },
          {
            color: "#feefde",
            zoom: 19,
          },
          {
            color: "#fef0df",
            zoom: 20,
          },
          {
            color: "#fef1e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca94f",
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0.7,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdc181",
            zoom: 0,
          },
          {
            color: "#fdc181",
            zoom: 1,
          },
          {
            color: "#fdc181",
            zoom: 2,
          },
          {
            color: "#fdc181",
            zoom: 3,
          },
          {
            color: "#fdc181",
            zoom: 4,
          },
          {
            color: "#fdc181",
            zoom: 5,
          },
          {
            color: "#fdc181",
            zoom: 6,
          },
          {
            color: "#fdc181",
            zoom: 7,
          },
          {
            color: "#fdc181",
            zoom: 8,
          },
          {
            color: "#fdc181",
            zoom: 9,
          },
          {
            color: "#fdc181",
            zoom: 10,
          },
          {
            color: "#fdc181",
            zoom: 11,
          },
          {
            color: "#fdc181",
            zoom: 12,
          },
          {
            color: "#fdc181",
            zoom: 13,
          },
          {
            color: "#fca94f",
            zoom: 14,
          },
          {
            color: "#fdc181",
            zoom: 15,
          },
          {
            color: "#fdc589",
            zoom: 16,
          },
          {
            color: "#fdc992",
            zoom: 17,
          },
          {
            color: "#fdcd9a",
            zoom: 18,
          },
          {
            color: "#fed2a3",
            zoom: 19,
          },
          {
            color: "#fed6ab",
            zoom: 20,
          },
          {
            color: "#fedab4",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "ferry",
        },
        stylers: [
          {
            color: "#fd9a30",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.icon",
        stylers: [
          {
            hue: "#f17e04",
          },
          {
            saturation: -0.03,
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
          {
            scale: 0.7,
          },
          {
            opacity: 0.6,
            zoom: 0,
          },
          {
            opacity: 0.6,
            zoom: 1,
          },
          {
            opacity: 0.6,
            zoom: 2,
          },
          {
            opacity: 0.6,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.6,
            zoom: 5,
          },
          {
            opacity: 0.6,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.6,
            zoom: 8,
          },
          {
            opacity: 0.6,
            zoom: 9,
          },
          {
            opacity: 0.6,
            zoom: 10,
          },
          {
            opacity: 0.6,
            zoom: 11,
          },
          {
            opacity: 0.6,
            zoom: 12,
          },
          {
            opacity: 0.6,
            zoom: 13,
          },
          {
            opacity: 0.6,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.4,
            zoom: 16,
          },
          {
            opacity: 0.4,
            zoom: 17,
          },
          {
            opacity: 0.4,
            zoom: 18,
          },
          {
            opacity: 0.4,
            zoom: 19,
          },
          {
            opacity: 0.4,
            zoom: 20,
          },
          {
            opacity: 0.4,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill.pattern",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            scale: 0.4,
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        stylers: [
          {
            color: "#fdb362",
            zoom: 0,
          },
          {
            color: "#fdb362",
            zoom: 1,
          },
          {
            color: "#fdb362",
            zoom: 2,
          },
          {
            color: "#fdb362",
            zoom: 3,
          },
          {
            color: "#fdb362",
            zoom: 4,
          },
          {
            color: "#fdb362",
            zoom: 5,
          },
          {
            color: "#fdb362",
            zoom: 6,
          },
          {
            color: "#fdb362",
            zoom: 7,
          },
          {
            color: "#fdb466",
            zoom: 8,
          },
          {
            color: "#feb669",
            zoom: 9,
          },
          {
            color: "#feb76d",
            zoom: 10,
          },
          {
            color: "#feb86f",
            zoom: 11,
          },
          {
            color: "#feb970",
            zoom: 12,
          },
          {
            color: "#feba72",
            zoom: 13,
          },
          {
            color: "#febb74",
            zoom: 14,
          },
          {
            color: "#febc77",
            zoom: 15,
          },
          {
            color: "#febe79",
            zoom: 16,
          },
          {
            color: "#febf7c",
            zoom: 17,
          },
          {
            color: "#fec07e",
            zoom: 18,
          },
          {
            color: "#fec181",
            zoom: 19,
          },
          {
            color: "#fec383",
            zoom: 20,
          },
          {
            color: "#fec486",
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        types: "polyline",
        stylers: [
          {
            opacity: 0.4,
            zoom: 0,
          },
          {
            opacity: 0.4,
            zoom: 1,
          },
          {
            opacity: 0.4,
            zoom: 2,
          },
          {
            opacity: 0.4,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.8,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "bathymetry",
        elements: "geometry",
        stylers: [
          {
            hue: "#fdb362",
          },
        ],
      },
      {
        tags: {
          any: ["industrial", "construction_site"],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "fence",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fed8ae",
          },
          {
            opacity: 0.75,
            zoom: 0,
          },
          {
            opacity: 0.75,
            zoom: 1,
          },
          {
            opacity: 0.75,
            zoom: 2,
          },
          {
            opacity: 0.75,
            zoom: 3,
          },
          {
            opacity: 0.75,
            zoom: 4,
          },
          {
            opacity: 0.75,
            zoom: 5,
          },
          {
            opacity: 0.75,
            zoom: 6,
          },
          {
            opacity: 0.75,
            zoom: 7,
          },
          {
            opacity: 0.75,
            zoom: 8,
          },
          {
            opacity: 0.75,
            zoom: 9,
          },
          {
            opacity: 0.75,
            zoom: 10,
          },
          {
            opacity: 0.75,
            zoom: 11,
          },
          {
            opacity: 0.75,
            zoom: 12,
          },
          {
            opacity: 0.75,
            zoom: 13,
          },
          {
            opacity: 0.75,
            zoom: 14,
          },
          {
            opacity: 0.75,
            zoom: 15,
          },
          {
            opacity: 0.75,
            zoom: 16,
          },
          {
            opacity: 0.45,
            zoom: 17,
          },
          {
            opacity: 0.45,
            zoom: 18,
          },
          {
            opacity: 0.45,
            zoom: 19,
          },
          {
            opacity: 0.45,
            zoom: 20,
          },
          {
            opacity: 0.45,
            zoom: 21,
          },
        ],
      },
      {
        tags: "medical",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "beach",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 0,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 1,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 2,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 3,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 4,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 5,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 6,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 8,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 9,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 10,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 11,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 12,
          },
          {
            color: "#fee1c3",
            opacity: 0.65,
            zoom: 13,
          },
          {
            color: "#fee6cd",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feebd7",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feecd9",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#feedda",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#feeddc",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ffeede",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ffefdf",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff0e1",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca445",
          },
          {
            opacity: 0.3,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fdb568",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0.1,
            zoom: 13,
          },
          {
            scale: 0.2,
            zoom: 14,
          },
          {
            scale: 0.3,
            zoom: 15,
          },
          {
            scale: 0.5,
            zoom: 16,
          },
          {
            scale: 0.6,
            zoom: 17,
          },
          {
            scale: 0.7,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.2,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.3,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 0.5,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 0.6,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 0.7,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: ["urban_area", "locality"],
        },
        elements: "geometry",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["terrain", "bathymetry", "landscape"],
          none: "land",
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["park", "cemetery"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["vegetation"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: [
            "industrial",
            "construction_site",
            "medical",
            "sports_ground",
            "beach",
          ],
        },
        types: "polygon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["outdoor", "park", "cemetery", "medical"],
        },
        elements: "label",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "poi",
          none: ["outdoor", "park", "cemetery", "medical"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "road",
        },
        types: "point",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["food_and_drink", "shopping", "commercial_services"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["traffic_light"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["entrance"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["road"],
          none: [
            "road_1",
            "road_2",
            "road_3",
            "road_4",
            "road_5",
            "road_6",
            "road_7",
          ],
        },
        elements: "label.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["transit"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: {
          visibility: "off",
        },
      },
    ],
  });

  map.addChild(layer);
  map.addChild(new YMapDefaultFeaturesLayer());

  coords = [
    [60.590192, 56.850894],
    [60.60674, 56.855663],
    [60.590192, 56.855663],
    [60.602467, 56.854132],
    [60.614748, 56.852534],
  ];

  coords.forEach((element) => {
    const customImage = document.createElement("img");
    customImage.src = "./../img/geolocation.png";

    map.addChild(
      new YMapMarker(
        {
          coordinates: element,
        },
        customImage
      )
    );
  });


  // Екатеринбург, Азина 20
  const mapEkbAzina42 = new YMap(document.querySelector(".ekb-azina42"), {
    location: {
      center: [60.602467, 56.854132],
      zoom: 17,
    },
  });
  const layer1 = new YMapDefaultSchemeLayer({
    customization: [
      {
        tags: "country",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.8,
            zoom: 0,
          },
          {
            opacity: 0.8,
            zoom: 1,
          },
          {
            opacity: 0.8,
            zoom: 2,
          },
          {
            opacity: 0.8,
            zoom: 3,
          },
          {
            opacity: 0.8,
            zoom: 4,
          },
          {
            opacity: 1,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "country",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: [
          {
            hue: "#fed09f",
          },
        ],
      },
      {
        tags: "vegetation",
        elements: "geometry",
        stylers: [
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#feb76d",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.9,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.8,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "national_park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            zoom: 0,
          },
          {
            color: "#fed09f",
            zoom: 1,
          },
          {
            color: "#fed09f",
            zoom: 2,
          },
          {
            color: "#fed09f",
            zoom: 3,
          },
          {
            color: "#fed09f",
            zoom: 4,
          },
          {
            color: "#fed09f",
            zoom: 5,
          },
          {
            color: "#fed09f",
            zoom: 6,
          },
          {
            color: "#fed09f",
            zoom: 7,
          },
          {
            color: "#fed09f",
            zoom: 8,
          },
          {
            color: "#fed09f",
            zoom: 9,
          },
          {
            color: "#fed09f",
            zoom: 10,
          },
          {
            color: "#fed09f",
            zoom: 11,
          },
          {
            color: "#fed09f",
            zoom: 12,
          },
          {
            color: "#fed09f",
            zoom: 13,
          },
          {
            color: "#fed5a9",
            zoom: 14,
          },
          {
            color: "#fedab3",
            zoom: 15,
          },
          {
            color: "#fedab3",
            zoom: 16,
          },
          {
            color: "#fedab3",
            zoom: 17,
          },
          {
            color: "#fedab3",
            zoom: 18,
          },
          {
            color: "#fedab3",
            zoom: 19,
          },
          {
            color: "#fedab3",
            zoom: 20,
          },
          {
            color: "#fedab3",
            zoom: 21,
          },
        ],
      },
      {
        tags: "sports_ground",
        elements: "geometry",
        stylers: [
          {
            color: "#fec486",
            opacity: 0,
            zoom: 0,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 1,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 2,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 3,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 4,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 5,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 6,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 7,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 8,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 9,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 10,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 11,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 12,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 13,
          },
          {
            color: "#fec990",
            opacity: 0,
            zoom: 14,
          },
          {
            color: "#fece9a",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#fecf9c",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fed09d",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fed1a1",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fed2a2",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fed3a4",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "terrain",
        elements: "geometry",
        stylers: [
          {
            hue: "#fee7cd",
          },
          {
            opacity: 0.3,
            zoom: 0,
          },
          {
            opacity: 0.3,
            zoom: 1,
          },
          {
            opacity: 0.3,
            zoom: 2,
          },
          {
            opacity: 0.3,
            zoom: 3,
          },
          {
            opacity: 0.3,
            zoom: 4,
          },
          {
            opacity: 0.35,
            zoom: 5,
          },
          {
            opacity: 0.4,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.8,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "geographic_line",
        elements: "geometry",
        stylers: [
          {
            color: "#fa8805",
          },
        ],
      },
      {
        tags: "land",
        elements: "geometry",
        stylers: [
          {
            color: "#fde8ce",
            zoom: 0,
          },
          {
            color: "#fde8ce",
            zoom: 1,
          },
          {
            color: "#fde8ce",
            zoom: 2,
          },
          {
            color: "#fde8ce",
            zoom: 3,
          },
          {
            color: "#fde8ce",
            zoom: 4,
          },
          {
            color: "#fdead3",
            zoom: 5,
          },
          {
            color: "#fdecd7",
            zoom: 6,
          },
          {
            color: "#feefdc",
            zoom: 7,
          },
          {
            color: "#fef1e1",
            zoom: 8,
          },
          {
            color: "#fef1e1",
            zoom: 9,
          },
          {
            color: "#fef1e1",
            zoom: 10,
          },
          {
            color: "#fef1e1",
            zoom: 11,
          },
          {
            color: "#fef1e1",
            zoom: 12,
          },
          {
            color: "#fef1e1",
            zoom: 13,
          },
          {
            color: "#fef3e6",
            zoom: 14,
          },
          {
            color: "#fef6eb",
            zoom: 15,
          },
          {
            color: "#fef6ec",
            zoom: 16,
          },
          {
            color: "#fef7ed",
            zoom: 17,
          },
          {
            color: "#fef7ed",
            zoom: 18,
          },
          {
            color: "#fff7ee",
            zoom: 19,
          },
          {
            color: "#fff8ef",
            zoom: 20,
          },
          {
            color: "#fff8f0",
            zoom: 21,
          },
        ],
      },
      {
        tags: "residential",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fef1e1",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fef2e3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fef2e4",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fef3e6",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fff4e8",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fff4e9",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "structure",
          none: ["building", "fence"],
        },
        elements: "geometry",
        stylers: [
          {
            opacity: 0.9,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fedab4",
          },
          {
            opacity: 0.7,
            zoom: 0,
          },
          {
            opacity: 0.7,
            zoom: 1,
          },
          {
            opacity: 0.7,
            zoom: 2,
          },
          {
            opacity: 0.7,
            zoom: 3,
          },
          {
            opacity: 0.7,
            zoom: 4,
          },
          {
            opacity: 0.7,
            zoom: 5,
          },
          {
            opacity: 0.7,
            zoom: 6,
          },
          {
            opacity: 0.7,
            zoom: 7,
          },
          {
            opacity: 0.7,
            zoom: 8,
          },
          {
            opacity: 0.7,
            zoom: 9,
          },
          {
            opacity: 0.7,
            zoom: 10,
          },
          {
            opacity: 0.7,
            zoom: 11,
          },
          {
            opacity: 0.7,
            zoom: 12,
          },
          {
            opacity: 0.7,
            zoom: 13,
          },
          {
            opacity: 0.7,
            zoom: 14,
          },
          {
            opacity: 0.7,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 0.6,
            zoom: 17,
          },
          {
            opacity: 0.6,
            zoom: 18,
          },
          {
            opacity: 0.6,
            zoom: 19,
          },
          {
            opacity: 0.6,
            zoom: 20,
          },
          {
            opacity: 0.6,
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fec68b",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 0.5,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.5,
            zoom: 8,
          },
          {
            opacity: 0.5,
            zoom: 9,
          },
          {
            opacity: 0.5,
            zoom: 10,
          },
          {
            opacity: 0.5,
            zoom: 11,
          },
          {
            opacity: 0.5,
            zoom: 12,
          },
          {
            opacity: 0.5,
            zoom: 13,
          },
          {
            opacity: 0.5,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.5,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 4,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 5,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fee4c5",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feead2",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feefde",
            opacity: 0.67,
            zoom: 16,
          },
          {
            color: "#fff5eb",
            opacity: 0.33,
            zoom: 17,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 18,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 19,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "park",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.icon",
        types: "point",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "entrance",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            hue: "#f17e04",
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.fill",
        stylers: [
          {
            opacity: 0.8,
          },
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
            zoom: 0,
          },
          {
            color: "#974f02",
            zoom: 1,
          },
          {
            color: "#974f02",
            zoom: 2,
          },
          {
            color: "#974f02",
            zoom: 3,
          },
          {
            color: "#974f02",
            zoom: 4,
          },
          {
            color: "#934d02",
            zoom: 5,
          },
          {
            color: "#8f4b02",
            zoom: 6,
          },
          {
            color: "#8b4902",
            zoom: 7,
          },
          {
            color: "#864602",
            zoom: 8,
          },
          {
            color: "#824402",
            zoom: 9,
          },
          {
            color: "#7e4202",
            zoom: 10,
          },
          {
            color: "#7e4202",
            zoom: 11,
          },
          {
            color: "#7e4202",
            zoom: 12,
          },
          {
            color: "#7e4202",
            zoom: 13,
          },
          {
            color: "#7e4202",
            zoom: 14,
          },
          {
            color: "#7e4202",
            zoom: 15,
          },
          {
            color: "#7e4202",
            zoom: 16,
          },
          {
            color: "#7e4202",
            zoom: 17,
          },
          {
            color: "#7e4202",
            zoom: 18,
          },
          {
            color: "#7e4202",
            zoom: 19,
          },
          {
            color: "#7e4202",
            zoom: 20,
          },
          {
            color: "#7e4202",
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "polyline",
        stylers: [
          {
            color: "#b05c03",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "geometry.fill.pattern",
        types: "polyline",
        stylers: [
          {
            scale: 1,
          },
          {
            color: "#fc901d",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.9,
            zoom: 0,
          },
          {
            opacity: 0.9,
            zoom: 1,
          },
          {
            opacity: 0.9,
            zoom: 2,
          },
          {
            opacity: 0.9,
            zoom: 3,
          },
          {
            opacity: 0.9,
            zoom: 4,
          },
          {
            opacity: 0.9,
            zoom: 5,
          },
          {
            opacity: 0.9,
            zoom: 6,
          },
          {
            opacity: 0.9,
            zoom: 7,
          },
          {
            opacity: 0.9,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 0.9,
            zoom: 10,
          },
          {
            opacity: 0.9,
            zoom: 11,
          },
          {
            opacity: 0.9,
            zoom: 12,
          },
          {
            opacity: 0.9,
            zoom: 13,
          },
          {
            opacity: 0.9,
            zoom: 14,
          },
          {
            opacity: 0.9,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 13,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 14,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 16,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 17,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 18,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 19,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 20,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 21,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 0,
            zoom: 13,
          },
          {
            opacity: 0,
            zoom: 14,
          },
          {
            opacity: 0,
            zoom: 15,
          },
          {
            opacity: 0,
            zoom: 16,
          },
          {
            opacity: 0,
            zoom: 17,
          },
          {
            opacity: 0,
            zoom: 18,
          },
          {
            opacity: 0,
            zoom: 19,
          },
          {
            opacity: 0,
            zoom: 20,
          },
          {
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c56702",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.2,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 2.51,
            zoom: 9,
          },
          {
            scale: 2.62,
            zoom: 10,
          },
          {
            scale: 1.68,
            zoom: 11,
          },
          {
            scale: 1.67,
            zoom: 12,
          },
          {
            scale: 1.38,
            zoom: 13,
          },
          {
            scale: 1.19,
            zoom: 14,
          },
          {
            scale: 1.08,
            zoom: 15,
          },
          {
            scale: 1.04,
            zoom: 16,
          },
          {
            scale: 0.91,
            zoom: 17,
          },
          {
            scale: 0.84,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.29,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 4.21,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 2.74,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 2.04,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 2.13,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.88,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.59,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.55,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.37,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.26,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 1.69,
            zoom: 10,
          },
          {
            scale: 1.26,
            zoom: 11,
          },
          {
            scale: 1.41,
            zoom: 12,
          },
          {
            scale: 1.19,
            zoom: 13,
          },
          {
            scale: 1.04,
            zoom: 14,
          },
          {
            scale: 0.97,
            zoom: 15,
          },
          {
            scale: 1.15,
            zoom: 16,
          },
          {
            scale: 0.99,
            zoom: 17,
          },
          {
            scale: 0.89,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.12,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 1.9,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 1.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.83,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.64,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.51,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.44,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.69,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.47,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.34,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.28,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.28,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 1.25,
            zoom: 12,
          },
          {
            scale: 0.95,
            zoom: 13,
          },
          {
            scale: 0.81,
            zoom: 14,
          },
          {
            scale: 0.95,
            zoom: 15,
          },
          {
            scale: 1.1,
            zoom: 16,
          },
          {
            scale: 0.93,
            zoom: 17,
          },
          {
            scale: 0.85,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.61,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.36,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.22,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.41,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.63,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.4,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.25,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 2.25,
            zoom: 13,
          },
          {
            scale: 1.27,
            zoom: 14,
          },
          {
            scale: 1.25,
            zoom: 15,
          },
          {
            scale: 1.31,
            zoom: 16,
          },
          {
            scale: 1.04,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.31,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.76,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.89,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.55,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.36,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.27,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.27,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0.9,
            zoom: 14,
          },
          {
            scale: 0.78,
            zoom: 15,
          },
          {
            scale: 0.88,
            zoom: 16,
          },
          {
            scale: 0.8,
            zoom: 17,
          },
          {
            scale: 0.78,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.31,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.19,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.31,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.21,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.17,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "is_tunnel",
          none: "path",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fee2c3",
            zoom: 0,
          },
          {
            color: "#fee2c3",
            zoom: 1,
          },
          {
            color: "#fee2c3",
            zoom: 2,
          },
          {
            color: "#fee2c3",
            zoom: 3,
          },
          {
            color: "#fee2c3",
            zoom: 4,
          },
          {
            color: "#fee2c3",
            zoom: 5,
          },
          {
            color: "#fee2c3",
            zoom: 6,
          },
          {
            color: "#fee2c3",
            zoom: 7,
          },
          {
            color: "#fee2c3",
            zoom: 8,
          },
          {
            color: "#fee2c3",
            zoom: 9,
          },
          {
            color: "#fee2c3",
            zoom: 10,
          },
          {
            color: "#fee2c3",
            zoom: 11,
          },
          {
            color: "#fee2c3",
            zoom: 12,
          },
          {
            color: "#fee2c3",
            zoom: 13,
          },
          {
            color: "#fee7cd",
            zoom: 14,
          },
          {
            color: "#feecd7",
            zoom: 15,
          },
          {
            color: "#feedd9",
            zoom: 16,
          },
          {
            color: "#feeeda",
            zoom: 17,
          },
          {
            color: "#feeedc",
            zoom: 18,
          },
          {
            color: "#feefde",
            zoom: 19,
          },
          {
            color: "#fef0df",
            zoom: 20,
          },
          {
            color: "#fef1e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca94f",
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0.7,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdc181",
            zoom: 0,
          },
          {
            color: "#fdc181",
            zoom: 1,
          },
          {
            color: "#fdc181",
            zoom: 2,
          },
          {
            color: "#fdc181",
            zoom: 3,
          },
          {
            color: "#fdc181",
            zoom: 4,
          },
          {
            color: "#fdc181",
            zoom: 5,
          },
          {
            color: "#fdc181",
            zoom: 6,
          },
          {
            color: "#fdc181",
            zoom: 7,
          },
          {
            color: "#fdc181",
            zoom: 8,
          },
          {
            color: "#fdc181",
            zoom: 9,
          },
          {
            color: "#fdc181",
            zoom: 10,
          },
          {
            color: "#fdc181",
            zoom: 11,
          },
          {
            color: "#fdc181",
            zoom: 12,
          },
          {
            color: "#fdc181",
            zoom: 13,
          },
          {
            color: "#fca94f",
            zoom: 14,
          },
          {
            color: "#fdc181",
            zoom: 15,
          },
          {
            color: "#fdc589",
            zoom: 16,
          },
          {
            color: "#fdc992",
            zoom: 17,
          },
          {
            color: "#fdcd9a",
            zoom: 18,
          },
          {
            color: "#fed2a3",
            zoom: 19,
          },
          {
            color: "#fed6ab",
            zoom: 20,
          },
          {
            color: "#fedab4",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "ferry",
        },
        stylers: [
          {
            color: "#fd9a30",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.icon",
        stylers: [
          {
            hue: "#f17e04",
          },
          {
            saturation: -0.03,
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
          {
            scale: 0.7,
          },
          {
            opacity: 0.6,
            zoom: 0,
          },
          {
            opacity: 0.6,
            zoom: 1,
          },
          {
            opacity: 0.6,
            zoom: 2,
          },
          {
            opacity: 0.6,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.6,
            zoom: 5,
          },
          {
            opacity: 0.6,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.6,
            zoom: 8,
          },
          {
            opacity: 0.6,
            zoom: 9,
          },
          {
            opacity: 0.6,
            zoom: 10,
          },
          {
            opacity: 0.6,
            zoom: 11,
          },
          {
            opacity: 0.6,
            zoom: 12,
          },
          {
            opacity: 0.6,
            zoom: 13,
          },
          {
            opacity: 0.6,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.4,
            zoom: 16,
          },
          {
            opacity: 0.4,
            zoom: 17,
          },
          {
            opacity: 0.4,
            zoom: 18,
          },
          {
            opacity: 0.4,
            zoom: 19,
          },
          {
            opacity: 0.4,
            zoom: 20,
          },
          {
            opacity: 0.4,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill.pattern",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            scale: 0.4,
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        stylers: [
          {
            color: "#fdb362",
            zoom: 0,
          },
          {
            color: "#fdb362",
            zoom: 1,
          },
          {
            color: "#fdb362",
            zoom: 2,
          },
          {
            color: "#fdb362",
            zoom: 3,
          },
          {
            color: "#fdb362",
            zoom: 4,
          },
          {
            color: "#fdb362",
            zoom: 5,
          },
          {
            color: "#fdb362",
            zoom: 6,
          },
          {
            color: "#fdb362",
            zoom: 7,
          },
          {
            color: "#fdb466",
            zoom: 8,
          },
          {
            color: "#feb669",
            zoom: 9,
          },
          {
            color: "#feb76d",
            zoom: 10,
          },
          {
            color: "#feb86f",
            zoom: 11,
          },
          {
            color: "#feb970",
            zoom: 12,
          },
          {
            color: "#feba72",
            zoom: 13,
          },
          {
            color: "#febb74",
            zoom: 14,
          },
          {
            color: "#febc77",
            zoom: 15,
          },
          {
            color: "#febe79",
            zoom: 16,
          },
          {
            color: "#febf7c",
            zoom: 17,
          },
          {
            color: "#fec07e",
            zoom: 18,
          },
          {
            color: "#fec181",
            zoom: 19,
          },
          {
            color: "#fec383",
            zoom: 20,
          },
          {
            color: "#fec486",
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        types: "polyline",
        stylers: [
          {
            opacity: 0.4,
            zoom: 0,
          },
          {
            opacity: 0.4,
            zoom: 1,
          },
          {
            opacity: 0.4,
            zoom: 2,
          },
          {
            opacity: 0.4,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.8,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "bathymetry",
        elements: "geometry",
        stylers: [
          {
            hue: "#fdb362",
          },
        ],
      },
      {
        tags: {
          any: ["industrial", "construction_site"],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "fence",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fed8ae",
          },
          {
            opacity: 0.75,
            zoom: 0,
          },
          {
            opacity: 0.75,
            zoom: 1,
          },
          {
            opacity: 0.75,
            zoom: 2,
          },
          {
            opacity: 0.75,
            zoom: 3,
          },
          {
            opacity: 0.75,
            zoom: 4,
          },
          {
            opacity: 0.75,
            zoom: 5,
          },
          {
            opacity: 0.75,
            zoom: 6,
          },
          {
            opacity: 0.75,
            zoom: 7,
          },
          {
            opacity: 0.75,
            zoom: 8,
          },
          {
            opacity: 0.75,
            zoom: 9,
          },
          {
            opacity: 0.75,
            zoom: 10,
          },
          {
            opacity: 0.75,
            zoom: 11,
          },
          {
            opacity: 0.75,
            zoom: 12,
          },
          {
            opacity: 0.75,
            zoom: 13,
          },
          {
            opacity: 0.75,
            zoom: 14,
          },
          {
            opacity: 0.75,
            zoom: 15,
          },
          {
            opacity: 0.75,
            zoom: 16,
          },
          {
            opacity: 0.45,
            zoom: 17,
          },
          {
            opacity: 0.45,
            zoom: 18,
          },
          {
            opacity: 0.45,
            zoom: 19,
          },
          {
            opacity: 0.45,
            zoom: 20,
          },
          {
            opacity: 0.45,
            zoom: 21,
          },
        ],
      },
      {
        tags: "medical",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "beach",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 0,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 1,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 2,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 3,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 4,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 5,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 6,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 8,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 9,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 10,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 11,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 12,
          },
          {
            color: "#fee1c3",
            opacity: 0.65,
            zoom: 13,
          },
          {
            color: "#fee6cd",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feebd7",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feecd9",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#feedda",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#feeddc",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ffeede",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ffefdf",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff0e1",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca445",
          },
          {
            opacity: 0.3,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fdb568",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0.1,
            zoom: 13,
          },
          {
            scale: 0.2,
            zoom: 14,
          },
          {
            scale: 0.3,
            zoom: 15,
          },
          {
            scale: 0.5,
            zoom: 16,
          },
          {
            scale: 0.6,
            zoom: 17,
          },
          {
            scale: 0.7,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.2,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.3,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 0.5,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 0.6,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 0.7,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: ["urban_area", "locality"],
        },
        elements: "geometry",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["terrain", "bathymetry", "landscape"],
          none: "land",
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["park", "cemetery"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["vegetation"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: [
            "industrial",
            "construction_site",
            "medical",
            "sports_ground",
            "beach",
          ],
        },
        types: "polygon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["outdoor", "park", "cemetery", "medical"],
        },
        elements: "label",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "poi",
          none: ["outdoor", "park", "cemetery", "medical"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "road",
        },
        types: "point",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["food_and_drink", "shopping", "commercial_services"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["traffic_light"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["entrance"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["road"],
          none: [
            "road_1",
            "road_2",
            "road_3",
            "road_4",
            "road_5",
            "road_6",
            "road_7",
          ],
        },
        elements: "label.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["transit"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: {
          visibility: "off",
        },
      },
    ],
  });

  mapEkbAzina42.addChild(layer1);
  mapEkbAzina42.addChild(new YMapDefaultFeaturesLayer());  // Слой для добавления маркеров

  const customImage = document.createElement("img");
  customImage.src = "./../img/geolocation.png";

  mapEkbAzina42.addChild(
    new YMapMarker(
      {
        coordinates: [60.602467, 56.854132],
      },
      customImage
    )
  );



  // Екатеринбург, Сhelyuskintsev31
  const mapEkbСhelyuskintsev31 = new YMap(document.querySelector(".ekb-сhelyuskintsev31"), {
    location: {
      center: [60.608641, 56.857199 ],
      zoom: 17,
    },
  });
  const layer2 = new YMapDefaultSchemeLayer({
    customization: [
      {
        tags: "country",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.8,
            zoom: 0,
          },
          {
            opacity: 0.8,
            zoom: 1,
          },
          {
            opacity: 0.8,
            zoom: 2,
          },
          {
            opacity: 0.8,
            zoom: 3,
          },
          {
            opacity: 0.8,
            zoom: 4,
          },
          {
            opacity: 1,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "country",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c2b3a3",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#c2b3a3",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#ad9a85",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "region",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ad9a85",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdce9b",
          },
          {
            opacity: 0.15,
            zoom: 0,
          },
          {
            opacity: 0.15,
            zoom: 1,
          },
          {
            opacity: 0.15,
            zoom: 2,
          },
          {
            opacity: 0.15,
            zoom: 3,
          },
          {
            opacity: 0.15,
            zoom: 4,
          },
          {
            opacity: 0.15,
            zoom: 5,
          },
          {
            opacity: 0.25,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.47,
            zoom: 8,
          },
          {
            opacity: 0.44,
            zoom: 9,
          },
          {
            opacity: 0.41,
            zoom: 10,
          },
          {
            opacity: 0.38,
            zoom: 11,
          },
          {
            opacity: 0.35,
            zoom: 12,
          },
          {
            opacity: 0.33,
            zoom: 13,
          },
          {
            opacity: 0.3,
            zoom: 14,
          },
          {
            opacity: 0.28,
            zoom: 15,
          },
          {
            opacity: 0.25,
            zoom: 16,
          },
          {
            opacity: 0.25,
            zoom: 17,
          },
          {
            opacity: 0.25,
            zoom: 18,
          },
          {
            opacity: 0.25,
            zoom: 19,
          },
          {
            opacity: 0.25,
            zoom: 20,
          },
          {
            opacity: 0.25,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: [
          {
            hue: "#fed09f",
          },
        ],
      },
      {
        tags: "vegetation",
        elements: "geometry",
        stylers: [
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#feb76d",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#feb76d",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.9,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.8,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "national_park",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 0,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 1,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 2,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 3,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 4,
          },
          {
            color: "#fed09f",
            opacity: 0.1,
            zoom: 5,
          },
          {
            color: "#fed09f",
            opacity: 0.2,
            zoom: 6,
          },
          {
            color: "#fed09f",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fed09f",
            opacity: 0.4,
            zoom: 8,
          },
          {
            color: "#fed09f",
            opacity: 0.6,
            zoom: 9,
          },
          {
            color: "#fed09f",
            opacity: 0.8,
            zoom: 10,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fed5a9",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fedab3",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 16,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 17,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 18,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 19,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 20,
          },
          {
            color: "#fedab3",
            opacity: 0.7,
            zoom: 21,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "geometry",
        stylers: [
          {
            color: "#fed09f",
            zoom: 0,
          },
          {
            color: "#fed09f",
            zoom: 1,
          },
          {
            color: "#fed09f",
            zoom: 2,
          },
          {
            color: "#fed09f",
            zoom: 3,
          },
          {
            color: "#fed09f",
            zoom: 4,
          },
          {
            color: "#fed09f",
            zoom: 5,
          },
          {
            color: "#fed09f",
            zoom: 6,
          },
          {
            color: "#fed09f",
            zoom: 7,
          },
          {
            color: "#fed09f",
            zoom: 8,
          },
          {
            color: "#fed09f",
            zoom: 9,
          },
          {
            color: "#fed09f",
            zoom: 10,
          },
          {
            color: "#fed09f",
            zoom: 11,
          },
          {
            color: "#fed09f",
            zoom: 12,
          },
          {
            color: "#fed09f",
            zoom: 13,
          },
          {
            color: "#fed5a9",
            zoom: 14,
          },
          {
            color: "#fedab3",
            zoom: 15,
          },
          {
            color: "#fedab3",
            zoom: 16,
          },
          {
            color: "#fedab3",
            zoom: 17,
          },
          {
            color: "#fedab3",
            zoom: 18,
          },
          {
            color: "#fedab3",
            zoom: 19,
          },
          {
            color: "#fedab3",
            zoom: 20,
          },
          {
            color: "#fedab3",
            zoom: 21,
          },
        ],
      },
      {
        tags: "sports_ground",
        elements: "geometry",
        stylers: [
          {
            color: "#fec486",
            opacity: 0,
            zoom: 0,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 1,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 2,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 3,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 4,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 5,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 6,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 7,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 8,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 9,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 10,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 11,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 12,
          },
          {
            color: "#fec486",
            opacity: 0,
            zoom: 13,
          },
          {
            color: "#fec990",
            opacity: 0,
            zoom: 14,
          },
          {
            color: "#fece9a",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#fecf9c",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fed09d",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fed09f",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fed1a1",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fed2a2",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fed3a4",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "terrain",
        elements: "geometry",
        stylers: [
          {
            hue: "#fee7cd",
          },
          {
            opacity: 0.3,
            zoom: 0,
          },
          {
            opacity: 0.3,
            zoom: 1,
          },
          {
            opacity: 0.3,
            zoom: 2,
          },
          {
            opacity: 0.3,
            zoom: 3,
          },
          {
            opacity: 0.3,
            zoom: 4,
          },
          {
            opacity: 0.35,
            zoom: 5,
          },
          {
            opacity: 0.4,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.8,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "geographic_line",
        elements: "geometry",
        stylers: [
          {
            color: "#fa8805",
          },
        ],
      },
      {
        tags: "land",
        elements: "geometry",
        stylers: [
          {
            color: "#fde8ce",
            zoom: 0,
          },
          {
            color: "#fde8ce",
            zoom: 1,
          },
          {
            color: "#fde8ce",
            zoom: 2,
          },
          {
            color: "#fde8ce",
            zoom: 3,
          },
          {
            color: "#fde8ce",
            zoom: 4,
          },
          {
            color: "#fdead3",
            zoom: 5,
          },
          {
            color: "#fdecd7",
            zoom: 6,
          },
          {
            color: "#feefdc",
            zoom: 7,
          },
          {
            color: "#fef1e1",
            zoom: 8,
          },
          {
            color: "#fef1e1",
            zoom: 9,
          },
          {
            color: "#fef1e1",
            zoom: 10,
          },
          {
            color: "#fef1e1",
            zoom: 11,
          },
          {
            color: "#fef1e1",
            zoom: 12,
          },
          {
            color: "#fef1e1",
            zoom: 13,
          },
          {
            color: "#fef3e6",
            zoom: 14,
          },
          {
            color: "#fef6eb",
            zoom: 15,
          },
          {
            color: "#fef6ec",
            zoom: 16,
          },
          {
            color: "#fef7ed",
            zoom: 17,
          },
          {
            color: "#fef7ed",
            zoom: 18,
          },
          {
            color: "#fff7ee",
            zoom: 19,
          },
          {
            color: "#fff8ef",
            zoom: 20,
          },
          {
            color: "#fff8f0",
            zoom: 21,
          },
        ],
      },
      {
        tags: "residential",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 0,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 1,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 2,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 3,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#fef1e1",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#fef2e3",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#fef2e4",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#fef3e6",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#fff4e8",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#fff4e9",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "geometry",
        stylers: [
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "structure",
          none: ["building", "fence"],
        },
        elements: "geometry",
        stylers: [
          {
            opacity: 0.9,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fedab4",
          },
          {
            opacity: 0.7,
            zoom: 0,
          },
          {
            opacity: 0.7,
            zoom: 1,
          },
          {
            opacity: 0.7,
            zoom: 2,
          },
          {
            opacity: 0.7,
            zoom: 3,
          },
          {
            opacity: 0.7,
            zoom: 4,
          },
          {
            opacity: 0.7,
            zoom: 5,
          },
          {
            opacity: 0.7,
            zoom: 6,
          },
          {
            opacity: 0.7,
            zoom: 7,
          },
          {
            opacity: 0.7,
            zoom: 8,
          },
          {
            opacity: 0.7,
            zoom: 9,
          },
          {
            opacity: 0.7,
            zoom: 10,
          },
          {
            opacity: 0.7,
            zoom: 11,
          },
          {
            opacity: 0.7,
            zoom: 12,
          },
          {
            opacity: 0.7,
            zoom: 13,
          },
          {
            opacity: 0.7,
            zoom: 14,
          },
          {
            opacity: 0.7,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 0.6,
            zoom: 17,
          },
          {
            opacity: 0.6,
            zoom: 18,
          },
          {
            opacity: 0.6,
            zoom: 19,
          },
          {
            opacity: 0.6,
            zoom: 20,
          },
          {
            opacity: 0.6,
            zoom: 21,
          },
        ],
      },
      {
        tags: "building",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fec68b",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0.5,
            zoom: 4,
          },
          {
            opacity: 0.5,
            zoom: 5,
          },
          {
            opacity: 0.5,
            zoom: 6,
          },
          {
            opacity: 0.5,
            zoom: 7,
          },
          {
            opacity: 0.5,
            zoom: 8,
          },
          {
            opacity: 0.5,
            zoom: 9,
          },
          {
            opacity: 0.5,
            zoom: 10,
          },
          {
            opacity: 0.5,
            zoom: 11,
          },
          {
            opacity: 0.5,
            zoom: 12,
          },
          {
            opacity: 0.5,
            zoom: 13,
          },
          {
            opacity: 0.5,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.5,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 4,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 5,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 6,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 7,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 8,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 9,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 10,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 11,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 12,
          },
          {
            color: "#fedeb9",
            opacity: 1,
            zoom: 13,
          },
          {
            color: "#fee4c5",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feead2",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feefde",
            opacity: 0.67,
            zoom: 16,
          },
          {
            color: "#fff5eb",
            opacity: 0.33,
            zoom: 17,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 18,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 19,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "poi",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "outdoor",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "park",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "park",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "cemetery",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "beach",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "medical",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "shopping",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "commercial_services",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
          },
        ],
      },
      {
        tags: "food_and_drink",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.icon",
        types: "point",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            "tertiary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "entrance",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
          {
            hue: "#f17e04",
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.icon",
        stylers: [
          {
            color: "#f17e04",
          },
          {
            "secondary-color": "#ffffff",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.fill",
        stylers: [
          {
            opacity: 0.8,
          },
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: "country",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "region",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "district",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
          },
        ],
      },
      {
        tags: {
          any: "admin",
          none: ["country", "region", "locality", "district", "address"],
        },
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#974f02",
            zoom: 0,
          },
          {
            color: "#974f02",
            zoom: 1,
          },
          {
            color: "#974f02",
            zoom: 2,
          },
          {
            color: "#974f02",
            zoom: 3,
          },
          {
            color: "#974f02",
            zoom: 4,
          },
          {
            color: "#934d02",
            zoom: 5,
          },
          {
            color: "#8f4b02",
            zoom: 6,
          },
          {
            color: "#8b4902",
            zoom: 7,
          },
          {
            color: "#864602",
            zoom: 8,
          },
          {
            color: "#824402",
            zoom: 9,
          },
          {
            color: "#7e4202",
            zoom: 10,
          },
          {
            color: "#7e4202",
            zoom: 11,
          },
          {
            color: "#7e4202",
            zoom: 12,
          },
          {
            color: "#7e4202",
            zoom: 13,
          },
          {
            color: "#7e4202",
            zoom: 14,
          },
          {
            color: "#7e4202",
            zoom: 15,
          },
          {
            color: "#7e4202",
            zoom: 16,
          },
          {
            color: "#7e4202",
            zoom: 17,
          },
          {
            color: "#7e4202",
            zoom: 18,
          },
          {
            color: "#7e4202",
            zoom: 19,
          },
          {
            color: "#7e4202",
            zoom: 20,
          },
          {
            color: "#7e4202",
            zoom: 21,
          },
        ],
      },
      {
        tags: "locality",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "polyline",
        stylers: [
          {
            color: "#b05c03",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "road",
        elements: "geometry.fill.pattern",
        types: "polyline",
        stylers: [
          {
            scale: 1,
          },
          {
            color: "#fc901d",
          },
        ],
      },
      {
        tags: "road",
        elements: "label.text.fill",
        types: "point",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "structure",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c86d04",
          },
          {
            opacity: 0.9,
            zoom: 0,
          },
          {
            opacity: 0.9,
            zoom: 1,
          },
          {
            opacity: 0.9,
            zoom: 2,
          },
          {
            opacity: 0.9,
            zoom: 3,
          },
          {
            opacity: 0.9,
            zoom: 4,
          },
          {
            opacity: 0.9,
            zoom: 5,
          },
          {
            opacity: 0.9,
            zoom: 6,
          },
          {
            opacity: 0.9,
            zoom: 7,
          },
          {
            opacity: 0.9,
            zoom: 8,
          },
          {
            opacity: 0.9,
            zoom: 9,
          },
          {
            opacity: 0.9,
            zoom: 10,
          },
          {
            opacity: 0.9,
            zoom: 11,
          },
          {
            opacity: 0.9,
            zoom: 12,
          },
          {
            opacity: 0.9,
            zoom: 13,
          },
          {
            opacity: 0.9,
            zoom: 14,
          },
          {
            opacity: 0.9,
            zoom: 15,
          },
          {
            opacity: 0.9,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "address",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#e27603",
            opacity: 1,
            zoom: 0,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 1,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 2,
          },
          {
            color: "#e27603",
            opacity: 1,
            zoom: 3,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 4,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 5,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 6,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 7,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 8,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 9,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 10,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 11,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 12,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 13,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 14,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 15,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 16,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 17,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 18,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 19,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 20,
          },
          {
            color: "#c86d04",
            opacity: 0.5,
            zoom: 21,
          },
        ],
      },
      {
        tags: "landscape",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.5,
            zoom: 0,
          },
          {
            opacity: 0.5,
            zoom: 1,
          },
          {
            opacity: 0.5,
            zoom: 2,
          },
          {
            opacity: 0.5,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 0,
            zoom: 13,
          },
          {
            opacity: 0,
            zoom: 14,
          },
          {
            opacity: 0,
            zoom: 15,
          },
          {
            opacity: 0,
            zoom: 16,
          },
          {
            opacity: 0,
            zoom: 17,
          },
          {
            opacity: 0,
            zoom: 18,
          },
          {
            opacity: 0,
            zoom: 19,
          },
          {
            opacity: 0,
            zoom: 20,
          },
          {
            opacity: 0,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#c56702",
          },
          {
            opacity: 0.8,
          },
        ],
      },
      {
        tags: "water",
        elements: "label.text.outline",
        types: "polyline",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            opacity: 0.2,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_1",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 2.97,
            zoom: 6,
          },
          {
            scale: 3.19,
            zoom: 7,
          },
          {
            scale: 3.53,
            zoom: 8,
          },
          {
            scale: 4,
            zoom: 9,
          },
          {
            scale: 3.61,
            zoom: 10,
          },
          {
            scale: 3.06,
            zoom: 11,
          },
          {
            scale: 2.64,
            zoom: 12,
          },
          {
            scale: 2.27,
            zoom: 13,
          },
          {
            scale: 2.03,
            zoom: 14,
          },
          {
            scale: 1.9,
            zoom: 15,
          },
          {
            scale: 1.86,
            zoom: 16,
          },
          {
            scale: 1.48,
            zoom: 17,
          },
          {
            scale: 1.21,
            zoom: 18,
          },
          {
            scale: 1.04,
            zoom: 19,
          },
          {
            scale: 0.94,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_2",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#00000000",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 6,
          },
          {
            color: "#00000000",
            scale: 3.05,
            zoom: 7,
          },
          {
            color: "#fee2c3",
            scale: 3.15,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 3.37,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 3.36,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 3.17,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 3,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.8,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 2.66,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 2.61,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 2.64,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 2.14,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.79,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.55,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.41,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 2.51,
            zoom: 9,
          },
          {
            scale: 2.62,
            zoom: 10,
          },
          {
            scale: 1.68,
            zoom: 11,
          },
          {
            scale: 1.67,
            zoom: 12,
          },
          {
            scale: 1.38,
            zoom: 13,
          },
          {
            scale: 1.19,
            zoom: 14,
          },
          {
            scale: 1.08,
            zoom: 15,
          },
          {
            scale: 1.04,
            zoom: 16,
          },
          {
            scale: 0.91,
            zoom: 17,
          },
          {
            scale: 0.84,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_3",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.6,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.29,
            zoom: 8,
          },
          {
            color: "#fee7cd",
            scale: 4.21,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 2.74,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 2.04,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 2.13,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.88,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.59,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.55,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.37,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.26,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.35,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 1.69,
            zoom: 10,
          },
          {
            scale: 1.26,
            zoom: 11,
          },
          {
            scale: 1.41,
            zoom: 12,
          },
          {
            scale: 1.19,
            zoom: 13,
          },
          {
            scale: 1.04,
            zoom: 14,
          },
          {
            scale: 0.97,
            zoom: 15,
          },
          {
            scale: 1.15,
            zoom: 16,
          },
          {
            scale: 0.99,
            zoom: 17,
          },
          {
            scale: 0.89,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_4",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.12,
            zoom: 9,
          },
          {
            color: "#fee7cd",
            scale: 1.9,
            zoom: 10,
          },
          {
            color: "#fee7cd",
            scale: 1.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.83,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.64,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.51,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.44,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.69,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.47,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.34,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.28,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.28,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 1.25,
            zoom: 12,
          },
          {
            scale: 0.95,
            zoom: 13,
          },
          {
            scale: 0.81,
            zoom: 14,
          },
          {
            scale: 0.95,
            zoom: 15,
          },
          {
            scale: 1.1,
            zoom: 16,
          },
          {
            scale: 0.93,
            zoom: 17,
          },
          {
            scale: 0.85,
            zoom: 18,
          },
          {
            scale: 0.82,
            zoom: 19,
          },
          {
            scale: 0.84,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_5",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.62,
            zoom: 11,
          },
          {
            color: "#fee7cd",
            scale: 1.61,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 1.36,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.22,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.41,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.63,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.4,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.23,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.25,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 2.25,
            zoom: 13,
          },
          {
            scale: 1.27,
            zoom: 14,
          },
          {
            scale: 1.25,
            zoom: 15,
          },
          {
            scale: 1.31,
            zoom: 16,
          },
          {
            scale: 1.04,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.85,
            zoom: 19,
          },
          {
            scale: 0.85,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_6",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#fee7cd",
            scale: 2.31,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.7,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.76,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.89,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.55,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.36,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.27,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.27,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.34,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0.9,
            zoom: 14,
          },
          {
            scale: 0.78,
            zoom: 15,
          },
          {
            scale: 0.88,
            zoom: 16,
          },
          {
            scale: 0.8,
            zoom: 17,
          },
          {
            scale: 0.78,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_7",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 1.31,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 1.19,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.31,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.21,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.17,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_minor",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0,
            zoom: 13,
          },
          {
            scale: 0,
            zoom: 14,
          },
          {
            scale: 0,
            zoom: 15,
          },
          {
            scale: 0.9,
            zoom: 16,
          },
          {
            scale: 0.9,
            zoom: 17,
          },
          {
            scale: 0.9,
            zoom: 18,
          },
          {
            scale: 0.9,
            zoom: 19,
          },
          {
            scale: 0.9,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "road_unclassified",
        },
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.4,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.4,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 1.4,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 1.27,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 1.27,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.29,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.31,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.32,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "is_tunnel",
          none: "path",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fee2c3",
            zoom: 0,
          },
          {
            color: "#fee2c3",
            zoom: 1,
          },
          {
            color: "#fee2c3",
            zoom: 2,
          },
          {
            color: "#fee2c3",
            zoom: 3,
          },
          {
            color: "#fee2c3",
            zoom: 4,
          },
          {
            color: "#fee2c3",
            zoom: 5,
          },
          {
            color: "#fee2c3",
            zoom: 6,
          },
          {
            color: "#fee2c3",
            zoom: 7,
          },
          {
            color: "#fee2c3",
            zoom: 8,
          },
          {
            color: "#fee2c3",
            zoom: 9,
          },
          {
            color: "#fee2c3",
            zoom: 10,
          },
          {
            color: "#fee2c3",
            zoom: 11,
          },
          {
            color: "#fee2c3",
            zoom: 12,
          },
          {
            color: "#fee2c3",
            zoom: 13,
          },
          {
            color: "#fee7cd",
            zoom: 14,
          },
          {
            color: "#feecd7",
            zoom: 15,
          },
          {
            color: "#feedd9",
            zoom: 16,
          },
          {
            color: "#feeeda",
            zoom: 17,
          },
          {
            color: "#feeedc",
            zoom: 18,
          },
          {
            color: "#feefde",
            zoom: 19,
          },
          {
            color: "#fef0df",
            zoom: 20,
          },
          {
            color: "#fef1e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca94f",
          },
        ],
      },
      {
        tags: {
          all: "path",
          none: "is_tunnel",
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0.7,
          },
          {
            color: "#fee7cd",
            zoom: 0,
          },
          {
            color: "#fee7cd",
            zoom: 1,
          },
          {
            color: "#fee7cd",
            zoom: 2,
          },
          {
            color: "#fee7cd",
            zoom: 3,
          },
          {
            color: "#fee7cd",
            zoom: 4,
          },
          {
            color: "#fee7cd",
            zoom: 5,
          },
          {
            color: "#fee7cd",
            zoom: 6,
          },
          {
            color: "#fee7cd",
            zoom: 7,
          },
          {
            color: "#fee7cd",
            zoom: 8,
          },
          {
            color: "#fee7cd",
            zoom: 9,
          },
          {
            color: "#fee7cd",
            zoom: 10,
          },
          {
            color: "#fee7cd",
            zoom: 11,
          },
          {
            color: "#fee7cd",
            zoom: 12,
          },
          {
            color: "#fee7cd",
            zoom: 13,
          },
          {
            color: "#feecd7",
            zoom: 14,
          },
          {
            color: "#fef1e1",
            zoom: 15,
          },
          {
            color: "#fef2e3",
            zoom: 16,
          },
          {
            color: "#fef2e4",
            zoom: 17,
          },
          {
            color: "#fef3e6",
            zoom: 18,
          },
          {
            color: "#fff4e8",
            zoom: 19,
          },
          {
            color: "#fff4e9",
            zoom: 20,
          },
          {
            color: "#fff5eb",
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "road_construction",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#fdc181",
            zoom: 0,
          },
          {
            color: "#fdc181",
            zoom: 1,
          },
          {
            color: "#fdc181",
            zoom: 2,
          },
          {
            color: "#fdc181",
            zoom: 3,
          },
          {
            color: "#fdc181",
            zoom: 4,
          },
          {
            color: "#fdc181",
            zoom: 5,
          },
          {
            color: "#fdc181",
            zoom: 6,
          },
          {
            color: "#fdc181",
            zoom: 7,
          },
          {
            color: "#fdc181",
            zoom: 8,
          },
          {
            color: "#fdc181",
            zoom: 9,
          },
          {
            color: "#fdc181",
            zoom: 10,
          },
          {
            color: "#fdc181",
            zoom: 11,
          },
          {
            color: "#fdc181",
            zoom: 12,
          },
          {
            color: "#fdc181",
            zoom: 13,
          },
          {
            color: "#fca94f",
            zoom: 14,
          },
          {
            color: "#fdc181",
            zoom: 15,
          },
          {
            color: "#fdc589",
            zoom: 16,
          },
          {
            color: "#fdc992",
            zoom: 17,
          },
          {
            color: "#fdcd9a",
            zoom: 18,
          },
          {
            color: "#fed2a3",
            zoom: 19,
          },
          {
            color: "#fed6ab",
            zoom: 20,
          },
          {
            color: "#fedab4",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "ferry",
        },
        stylers: [
          {
            color: "#fd9a30",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.icon",
        stylers: [
          {
            hue: "#f17e04",
          },
          {
            saturation: -0.03,
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
        ],
      },
      {
        tags: "transit_location",
        elements: "label.text.outline",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#b89a7a",
          },
          {
            scale: 0.7,
          },
          {
            opacity: 0.6,
            zoom: 0,
          },
          {
            opacity: 0.6,
            zoom: 1,
          },
          {
            opacity: 0.6,
            zoom: 2,
          },
          {
            opacity: 0.6,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.6,
            zoom: 5,
          },
          {
            opacity: 0.6,
            zoom: 6,
          },
          {
            opacity: 0.6,
            zoom: 7,
          },
          {
            opacity: 0.6,
            zoom: 8,
          },
          {
            opacity: 0.6,
            zoom: 9,
          },
          {
            opacity: 0.6,
            zoom: 10,
          },
          {
            opacity: 0.6,
            zoom: 11,
          },
          {
            opacity: 0.6,
            zoom: 12,
          },
          {
            opacity: 0.6,
            zoom: 13,
          },
          {
            opacity: 0.6,
            zoom: 14,
          },
          {
            opacity: 0.5,
            zoom: 15,
          },
          {
            opacity: 0.4,
            zoom: 16,
          },
          {
            opacity: 0.4,
            zoom: 17,
          },
          {
            opacity: 0.4,
            zoom: 18,
          },
          {
            opacity: 0.4,
            zoom: 19,
          },
          {
            opacity: 0.4,
            zoom: 20,
          },
          {
            opacity: 0.4,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_schema",
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill.pattern",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "transit_line",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#c2b3a3",
          },
          {
            scale: 0.4,
          },
          {
            opacity: 0,
            zoom: 0,
          },
          {
            opacity: 0,
            zoom: 1,
          },
          {
            opacity: 0,
            zoom: 2,
          },
          {
            opacity: 0,
            zoom: 3,
          },
          {
            opacity: 0,
            zoom: 4,
          },
          {
            opacity: 0,
            zoom: 5,
          },
          {
            opacity: 0,
            zoom: 6,
          },
          {
            opacity: 0,
            zoom: 7,
          },
          {
            opacity: 0,
            zoom: 8,
          },
          {
            opacity: 0,
            zoom: 9,
          },
          {
            opacity: 0,
            zoom: 10,
          },
          {
            opacity: 0,
            zoom: 11,
          },
          {
            opacity: 0,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        stylers: [
          {
            color: "#fdb362",
            zoom: 0,
          },
          {
            color: "#fdb362",
            zoom: 1,
          },
          {
            color: "#fdb362",
            zoom: 2,
          },
          {
            color: "#fdb362",
            zoom: 3,
          },
          {
            color: "#fdb362",
            zoom: 4,
          },
          {
            color: "#fdb362",
            zoom: 5,
          },
          {
            color: "#fdb362",
            zoom: 6,
          },
          {
            color: "#fdb362",
            zoom: 7,
          },
          {
            color: "#fdb466",
            zoom: 8,
          },
          {
            color: "#feb669",
            zoom: 9,
          },
          {
            color: "#feb76d",
            zoom: 10,
          },
          {
            color: "#feb86f",
            zoom: 11,
          },
          {
            color: "#feb970",
            zoom: 12,
          },
          {
            color: "#feba72",
            zoom: 13,
          },
          {
            color: "#febb74",
            zoom: 14,
          },
          {
            color: "#febc77",
            zoom: 15,
          },
          {
            color: "#febe79",
            zoom: 16,
          },
          {
            color: "#febf7c",
            zoom: 17,
          },
          {
            color: "#fec07e",
            zoom: 18,
          },
          {
            color: "#fec181",
            zoom: 19,
          },
          {
            color: "#fec383",
            zoom: 20,
          },
          {
            color: "#fec486",
            zoom: 21,
          },
        ],
      },
      {
        tags: "water",
        elements: "geometry",
        types: "polyline",
        stylers: [
          {
            opacity: 0.4,
            zoom: 0,
          },
          {
            opacity: 0.4,
            zoom: 1,
          },
          {
            opacity: 0.4,
            zoom: 2,
          },
          {
            opacity: 0.4,
            zoom: 3,
          },
          {
            opacity: 0.6,
            zoom: 4,
          },
          {
            opacity: 0.8,
            zoom: 5,
          },
          {
            opacity: 1,
            zoom: 6,
          },
          {
            opacity: 1,
            zoom: 7,
          },
          {
            opacity: 1,
            zoom: 8,
          },
          {
            opacity: 1,
            zoom: 9,
          },
          {
            opacity: 1,
            zoom: 10,
          },
          {
            opacity: 1,
            zoom: 11,
          },
          {
            opacity: 1,
            zoom: 12,
          },
          {
            opacity: 1,
            zoom: 13,
          },
          {
            opacity: 1,
            zoom: 14,
          },
          {
            opacity: 1,
            zoom: 15,
          },
          {
            opacity: 1,
            zoom: 16,
          },
          {
            opacity: 1,
            zoom: 17,
          },
          {
            opacity: 1,
            zoom: 18,
          },
          {
            opacity: 1,
            zoom: 19,
          },
          {
            opacity: 1,
            zoom: 20,
          },
          {
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: "bathymetry",
        elements: "geometry",
        stylers: [
          {
            hue: "#fdb362",
          },
        ],
      },
      {
        tags: {
          any: ["industrial", "construction_site"],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "fence",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fed8ae",
          },
          {
            opacity: 0.75,
            zoom: 0,
          },
          {
            opacity: 0.75,
            zoom: 1,
          },
          {
            opacity: 0.75,
            zoom: 2,
          },
          {
            opacity: 0.75,
            zoom: 3,
          },
          {
            opacity: 0.75,
            zoom: 4,
          },
          {
            opacity: 0.75,
            zoom: 5,
          },
          {
            opacity: 0.75,
            zoom: 6,
          },
          {
            opacity: 0.75,
            zoom: 7,
          },
          {
            opacity: 0.75,
            zoom: 8,
          },
          {
            opacity: 0.75,
            zoom: 9,
          },
          {
            opacity: 0.75,
            zoom: 10,
          },
          {
            opacity: 0.75,
            zoom: 11,
          },
          {
            opacity: 0.75,
            zoom: 12,
          },
          {
            opacity: 0.75,
            zoom: 13,
          },
          {
            opacity: 0.75,
            zoom: 14,
          },
          {
            opacity: 0.75,
            zoom: 15,
          },
          {
            opacity: 0.75,
            zoom: 16,
          },
          {
            opacity: 0.45,
            zoom: 17,
          },
          {
            opacity: 0.45,
            zoom: 18,
          },
          {
            opacity: 0.45,
            zoom: 19,
          },
          {
            opacity: 0.45,
            zoom: 20,
          },
          {
            opacity: 0.45,
            zoom: 21,
          },
        ],
      },
      {
        tags: "medical",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            zoom: 0,
          },
          {
            color: "#fee1c3",
            zoom: 1,
          },
          {
            color: "#fee1c3",
            zoom: 2,
          },
          {
            color: "#fee1c3",
            zoom: 3,
          },
          {
            color: "#fee1c3",
            zoom: 4,
          },
          {
            color: "#fee1c3",
            zoom: 5,
          },
          {
            color: "#fee1c3",
            zoom: 6,
          },
          {
            color: "#fee1c3",
            zoom: 7,
          },
          {
            color: "#fee1c3",
            zoom: 8,
          },
          {
            color: "#fee1c3",
            zoom: 9,
          },
          {
            color: "#fee1c3",
            zoom: 10,
          },
          {
            color: "#fee1c3",
            zoom: 11,
          },
          {
            color: "#fee1c3",
            zoom: 12,
          },
          {
            color: "#fee1c3",
            zoom: 13,
          },
          {
            color: "#fee6cd",
            zoom: 14,
          },
          {
            color: "#feebd7",
            zoom: 15,
          },
          {
            color: "#feecd9",
            zoom: 16,
          },
          {
            color: "#feedda",
            zoom: 17,
          },
          {
            color: "#feeddc",
            zoom: 18,
          },
          {
            color: "#ffeede",
            zoom: 19,
          },
          {
            color: "#ffefdf",
            zoom: 20,
          },
          {
            color: "#fff0e1",
            zoom: 21,
          },
        ],
      },
      {
        tags: "beach",
        elements: "geometry",
        stylers: [
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 0,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 1,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 2,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 3,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 4,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 5,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 6,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 7,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 8,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 9,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 10,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 11,
          },
          {
            color: "#fee1c3",
            opacity: 0.3,
            zoom: 12,
          },
          {
            color: "#fee1c3",
            opacity: 0.65,
            zoom: 13,
          },
          {
            color: "#fee6cd",
            opacity: 1,
            zoom: 14,
          },
          {
            color: "#feebd7",
            opacity: 1,
            zoom: 15,
          },
          {
            color: "#feecd9",
            opacity: 1,
            zoom: 16,
          },
          {
            color: "#feedda",
            opacity: 1,
            zoom: 17,
          },
          {
            color: "#feeddc",
            opacity: 1,
            zoom: 18,
          },
          {
            color: "#ffeede",
            opacity: 1,
            zoom: 19,
          },
          {
            color: "#ffefdf",
            opacity: 1,
            zoom: 20,
          },
          {
            color: "#fff0e1",
            opacity: 1,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fca445",
          },
          {
            opacity: 0.3,
          },
        ],
      },
      {
        tags: {
          all: ["is_tunnel", "path"],
        },
        elements: "geometry.outline",
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.fill",
        stylers: [
          {
            color: "#fdb568",
          },
          {
            scale: 0,
            zoom: 0,
          },
          {
            scale: 0,
            zoom: 1,
          },
          {
            scale: 0,
            zoom: 2,
          },
          {
            scale: 0,
            zoom: 3,
          },
          {
            scale: 0,
            zoom: 4,
          },
          {
            scale: 0,
            zoom: 5,
          },
          {
            scale: 0,
            zoom: 6,
          },
          {
            scale: 0,
            zoom: 7,
          },
          {
            scale: 0,
            zoom: 8,
          },
          {
            scale: 0,
            zoom: 9,
          },
          {
            scale: 0,
            zoom: 10,
          },
          {
            scale: 0,
            zoom: 11,
          },
          {
            scale: 0,
            zoom: 12,
          },
          {
            scale: 0.1,
            zoom: 13,
          },
          {
            scale: 0.2,
            zoom: 14,
          },
          {
            scale: 0.3,
            zoom: 15,
          },
          {
            scale: 0.5,
            zoom: 16,
          },
          {
            scale: 0.6,
            zoom: 17,
          },
          {
            scale: 0.7,
            zoom: 18,
          },
          {
            scale: 0.79,
            zoom: 19,
          },
          {
            scale: 0.83,
            zoom: 20,
          },
          {
            scale: 0.9,
            zoom: 21,
          },
        ],
      },
      {
        tags: "road_limited",
        elements: "geometry.outline",
        stylers: [
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 0,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 1,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 2,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 3,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 4,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 5,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 6,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 7,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 8,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 9,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 10,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 11,
          },
          {
            color: "#ffffff",
            scale: 1.4,
            zoom: 12,
          },
          {
            color: "#ffffff",
            scale: 0.1,
            zoom: 13,
          },
          {
            color: "#feecd7",
            scale: 0.2,
            zoom: 14,
          },
          {
            color: "#feecd7",
            scale: 0.3,
            zoom: 15,
          },
          {
            color: "#feeedb",
            scale: 0.5,
            zoom: 16,
          },
          {
            color: "#feefde",
            scale: 0.6,
            zoom: 17,
          },
          {
            color: "#fef1e2",
            scale: 0.7,
            zoom: 18,
          },
          {
            color: "#fef3e6",
            scale: 1.18,
            zoom: 19,
          },
          {
            color: "#fef4e8",
            scale: 1.23,
            zoom: 20,
          },
          {
            color: "#fff5eb",
            scale: 1.33,
            zoom: 21,
          },
        ],
      },
      {
        tags: {
          any: ["urban_area", "locality"],
        },
        elements: "geometry",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["terrain", "bathymetry", "landscape"],
          none: "land",
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["park", "cemetery"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["vegetation"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: [
            "industrial",
            "construction_site",
            "medical",
            "sports_ground",
            "beach",
          ],
        },
        types: "polygon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "transit",
          none: [
            "transit_location",
            "transit_line",
            "transit_schema",
            "is_unclassified_transit",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "urban_area",
          none: [
            "residential",
            "industrial",
            "cemetery",
            "park",
            "medical",
            "sports_ground",
            "beach",
            "construction_site",
          ],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["outdoor", "park", "cemetery", "medical"],
        },
        elements: "label",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "poi",
          none: ["outdoor", "park", "cemetery", "medical"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "road",
        },
        types: "point",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["food_and_drink", "shopping", "commercial_services"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["traffic_light"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["entrance"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["road"],
          none: [
            "road_1",
            "road_2",
            "road_3",
            "road_4",
            "road_5",
            "road_6",
            "road_7",
          ],
        },
        elements: "label.icon",
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: ["transit"],
        },
        stylers: {
          visibility: "off",
        },
      },
      {
        tags: {
          any: "landcover",
          none: "vegetation",
        },
        stylers: {
          visibility: "off",
        },
      },
    ],
  });

  mapEkbСhelyuskintsev31.addChild(layer2);
  mapEkbСhelyuskintsev31.addChild(new YMapDefaultFeaturesLayer());  // Слой для добавления маркеров

  const customImage1 = document.createElement("img");
  customImage1.src = "./../img/geolocation.png";

  mapEkbСhelyuskintsev31.addChild(
    new YMapMarker(
      {
        coordinates: [60.608341, 56.857450 ]
      },
      customImage1
    )
  );
}
