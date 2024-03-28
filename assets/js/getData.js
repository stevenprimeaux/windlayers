const fetchLayer = async (layer) => {
  const response = await fetch(layer.linkFile);
  const data = await response.json();

  return data;
};

export { fetchLayer };
