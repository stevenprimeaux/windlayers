import { getDataByKey } from "./getData.js";
import {
  popupLeasesOutline,
  popupPlanningsOutline,
  styleLayer,
} from "./util.js";

const showMap = async () => {
  const [planningsOutline, leasesOutline] = [
    await getDataByKey("plannings_outline"),
    await getDataByKey("leases_outline"),
  ];

  const map = L.map("map");
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const layerPlanningsOutline = L.geoJSON(planningsOutline.data, {
    style: styleLayer(planningsOutline),
    onEachFeature: popupPlanningsOutline,
  }).addTo(map);

  const layerLeasesOutline = L.geoJSON(leasesOutline.data, {
    style: styleLayer(leasesOutline),
    onEachFeature: popupLeasesOutline,
  }).addTo(map);

  const group = new L.featureGroup([layerPlanningsOutline, layerLeasesOutline]);
  map.fitBounds(group.getBounds());

  const control = L.control.layers().addTo(map);
  control.addOverlay(
    layerPlanningsOutline,
    planningsOutline.metadata.textDisplay
  );
  control.addOverlay(layerLeasesOutline, leasesOutline.metadata.textDisplay);

  const legend = L.control({ position: "bottomright" });
  legend.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    div.innerHTML += `
      <i style="background: ${planningsOutline.metadata.color}">
      </i>${planningsOutline.metadata.textDisplay}<br>
    `;
    div.innerHTML += `
      <i style="background: ${leasesOutline.metadata.color}">
      </i>${leasesOutline.metadata.textDisplay}<br>
    `;

    return div;
  };

  legend.addTo(map);
};

export { showMap };
