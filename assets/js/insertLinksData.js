function insertLinksData(layers) {
  const linksData = document.getElementById("ul-links-data");

  layers.forEach((layer) => {
    linksData.innerHTML += `
      <li><a href="${layer.linkFile}">${layer.textDisplay}</a></li>
    `;
  });
}

export { insertLinksData };
