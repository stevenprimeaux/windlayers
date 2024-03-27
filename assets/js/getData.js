import { constants } from "./constants.js";

const getLeasesOutline = async () => {
  const response = await fetch(`${constants.urlBase}/json/leases_outline.json`);
  const data = await response.json();
  return data;
};

const getPlanningsOutline = async () => {
  const response = await fetch(
    `${constants.urlBase}/json/plannings_outline.json`
  );
  const data = await response.json();
  return data;
};

export { getLeasesOutline, getPlanningsOutline };
