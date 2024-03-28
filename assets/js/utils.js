function popupLayer(layer) {
  return layer.popup;
}

function styleLayer(layer) {
  return {
    color: layer.color,
  };
}

export { popupLayer, styleLayer };
