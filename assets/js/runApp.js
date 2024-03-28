import { layers } from "./constants.js";
import { insertLinksData } from "./insertLinksData.js";
import { insertMap } from "./insertMap.js";

export default function runApp() {
  insertLinksData(layers);
  insertMap(layers);
}
