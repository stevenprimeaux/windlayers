function filterByKey(array, key) {
  const filtered = array.filter((element) => {
    return element.key == key;
  });

  return filtered[0];
}

function popupLeasesOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.LEASE_NUMBER}<br>
    ${feature.properties.STATE}<br>
    ${feature.properties.COMPANY}<br>
  `;

  layer.bindPopup(popupInfo);
}

function popupPlanningsOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.PROTRACTION_NUMBER}<br>
    ${feature.properties.ADDITIONAL_INFORMATION}<br>
  `;

  layer.bindPopup(popupInfo);
}

function styleLayer(layer) {
  return {
    color: layer.metadata.color,
  };
}

export { filterByKey, popupLeasesOutline, popupPlanningsOutline, styleLayer };
