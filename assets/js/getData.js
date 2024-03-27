import { fileInfoArray } from "./constants.js";
import { filterByKey } from "./util.js";

const fetchLayer = async (linkFile) => {
  const response = await fetch(linkFile);
  const data = await response.json();

  return data;
};

const getDataByKey = async (key) => {
  const layer = {};
  layer.metadata = filterByKey(fileInfoArray, key);
  layer.data = await fetchLayer(layer.metadata.linkFile);

  return layer;
};

export { getDataByKey };
