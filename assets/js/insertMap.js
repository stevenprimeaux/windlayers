import { constants } from "./constants.js";
import { fetchLayer } from "./getData.js";
import { popupLayer, styleLayer } from "./utils.js";
import { addBasemap, addLegend } from "./utilsMap.js";

const insertMap = async (layers) => {
  const map = L.map("map");

  addBasemap(
    L,
    map,
    constants.urlTile,
    constants.copyrightURL,
    constants.copyrightText
  );
  addLegend(L, map, layers);

  const control = L.control.layers().addTo(map);
  for (const layer of layers) {
    layer.geojson = await fetchLayer(layer);

    layer.mapLayer = L.geoJSON(layer.geojson, {
      style: styleLayer(layer),
      onEachFeature: popupLayer(layer),
    }).addTo(map);

    control.addOverlay(layer.mapLayer, layer.textDisplay);
  }

  map.fitBounds(
    L.featureGroup(
      layers.map((layer) => {
        return layer.mapLayer;
      })
    ).getBounds()
  );
};

export { insertMap };
