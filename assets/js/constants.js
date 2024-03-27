const constants = {};

constants.urlBase = "http://windlayers.s3-website.us-east-2.amazonaws.com";

const fileInfoArray = [
  {
    key: "plannings_outline",
    textDisplay: "Planning areas outline",
    color: "#C87A8A",
  },
  {
    key: "plannings",
    textDisplay: "Planning areas",
    color: "",
  },
  {
    key: "leases_outline",
    textDisplay: "Leases outline",
    color: "#00A396",
  },
  {
    key: "leases",
    textDisplay: "Leases",
    color: "",
  },
  {
    key: "mhks",
    textDisplay: "MHK areas",
    color: "",
  },
];

fileInfoArray.forEach((fileInfo) => {
  fileInfo.nameFile = `${fileInfo.key}.json`;
  fileInfo.linkFile = `${constants.urlBase}/json/${fileInfo.nameFile}`;
});

export { constants, fileInfoArray };
