import { insertLinksData } from "./insertLinksData.js";
import { showMap } from "./showMap.js";

export default function runApp() {
  insertLinksData();
  showMap();
}
