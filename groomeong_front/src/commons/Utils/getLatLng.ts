const getLatLng = (lat: string, lng: string): google.maps.LatLngLiteral => {
  return { lat: Number(lat), lng: Number(lng) };
};

export default getLatLng;
