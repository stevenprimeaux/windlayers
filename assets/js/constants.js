import {
  popupLeasesOutline,
  popupMHKsOutline,
  popupPlanningsOutline,
} from "./popups.js";

const constants = {};
constants.urlBase = "http://windlayers.s3-website.us-east-2.amazonaws.com";
constants.urlTile = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
constants.copyrightURL = "https://www.openstreetmap.org/copyright";
constants.copyrightText = "OpenStreetMap";

const layers = [
  {
    key: "plannings_outline",
    textDisplay: "Planning areas outline",
    color: "#1b9e77",
    popup: popupPlanningsOutline,
  },
  {
    key: "leases_outline",
    textDisplay: "Leases outline",
    color: "#d95f02",
    popup: popupLeasesOutline,
  },
  {
    key: "mhks",
    textDisplay: "MHK areas",
    color: "#7570b3",
    popup: popupMHKsOutline,
  },
];

layers.forEach((layer) => {
  layer.nameFile = `${layer.key}.json`;
  layer.linkFile = `${constants.urlBase}/json/${layer.nameFile}`;
});

export { constants, layers };
