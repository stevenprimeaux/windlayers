import { fileInfoArray } from "./constants.js";

function insertLinksData() {
  const linksData = document.getElementById("ul-links-data");

  fileInfoArray.forEach((fileInfo) => {
    linksData.innerHTML += `<li><a href="${fileInfo.linkFile}">${fileInfo.textDisplay}</a></li>`;
  });
}

export { insertLinksData };
