function popupLeaseOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.LEASE_NUMBER}<br>
    ${feature.properties.STATE}<br>
    ${feature.properties.COMPANY}<br>
  `;

  layer.bindPopup(popupInfo);
}

function popupPlanningOutline(feature, layer) {
  const popupInfo = `
    ${feature.properties.PROTRACTION_NUMBER}<br>
    ${feature.properties.ADDITIONAL_INFORMATION}<br>
  `;

  layer.bindPopup(popupInfo);
}

export { popupLeaseOutline, popupPlanningOutline };
