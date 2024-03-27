import { getLeasesOutline, getPlanningsOutline } from "./getData.js";
import { popupLeaseOutline, popupPlanningOutline } from "./util.js";
import { constants } from "./constants.js";

const showMap = async () => {
  const leasesOutline = await getLeasesOutline();
  const planningsOutline = await getPlanningsOutline();

  const map = L.map("map", {
    center: constants.mapCenter,
    zoom: constants.mapZoom,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const styleLeaseOutline = {
    color: constants.colorLease,
  };
  const layerLeasesOutline = L.geoJSON(leasesOutline, {
    style: styleLeaseOutline,
    onEachFeature: popupLeaseOutline,
  }).addTo(map);

  const stylePlanningOutline = {
    color: constants.colorPlanning,
  };
  const layerPlanningsOutline = L.geoJSON(planningsOutline, {
    style: stylePlanningOutline,
    onEachFeature: popupPlanningOutline,
  }).addTo(map);

  const control = L.control.layers().addTo(map);
  control.addOverlay(layerLeasesOutline, constants.displayNameLease);
  control.addOverlay(layerPlanningsOutline, constants.displayNamePlanning);

  const legend = L.control({ position: "bottomright" });
  legend.onAdd = function (map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML += `
      <i style="background: ${constants.colorLease}"></i>${constants.displayNameLease}<br>
    `;
    div.innerHTML += `
      <i style="background: ${constants.colorPlanning}"></i>${constants.displayNamePlanning}<br>
    `;

    return div;
  };

  legend.addTo(map);
};

export { showMap };
