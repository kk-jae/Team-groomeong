const getLatLng = (lat?: string, lng?: string): google.maps.LatLngLiteral | null => {
  if (lat !== undefined && lng !== undefined)
    return { lat: Number(lat), lng: Number(lng) };
  return null;
};

export default getLatLng;
