function popupLeasesOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.LEASE_NUMBER}<br>
    ${feature.properties.COMPANY}<br>
    ${feature.properties.STATE}<br>
    ${feature.properties.LEASE_DOCUMENT1}<br>
  `;

  layer.bindPopup(popupInfo);
}

function popupMHKsOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.LEASE_NUMBER}<br>
    ${feature.properties.COMPANY}<br>
    ${feature.properties.STATE}<br>
    ${feature.properties.LEASE_DOCUMENT1}<br>
  `;

  layer.bindPopup(popupInfo);
}

function popupPlanningsOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.PROTRACTION_NUMBER}<br>
    ${feature.properties.ADDITIONAL_INFORMATION}<br>
    ${feature.properties.URL1}<br>
  `;

  layer.bindPopup(popupInfo);
}

export { popupLeasesOutline, popupMHKsOutline, popupPlanningsOutline };
