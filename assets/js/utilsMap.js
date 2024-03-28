function addBasemap(leaflet, map, urlTile, copyrightURL, copyrightText) {
  leaflet
    .tileLayer(urlTile, {
      attribution: `&copy; <a href="${copyrightURL}">${copyrightText}</a>`,
    })
    .addTo(map);
}

function addLegend(leaflet, map, layers) {
  const legend = leaflet.control({ position: "bottomright" });

  legend.onAdd = function () {
    const div = leaflet.DomUtil.create("div", "info legend");

    layers.forEach((l) => {
      div.innerHTML += `
      <i style="background: ${l.color}">
      </i>${l.textDisplay}<br>
    `;
    });

    return div;
  };

  legend.addTo(map);
}

export { addBasemap, addLegend };
