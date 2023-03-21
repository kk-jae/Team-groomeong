import { MapSideList } from "../../organisms/MapSideList";
import Script from "next/script";
import { useEffect } from "react";
import * as S from "./index.styles";
declare const window: typeof globalThis & {
  google: any;
  initAutocomplete: () => void;
  // initMap: (latlng: google.maps.LatLngLiteral) => void;
};
export const MapTemplate = () => {
  useEffect(() => {
    // This example adds a search box to a map, using the Google Place Autocomplete
    // feature. People can enter geographical searches. The search box will return a
    // pick list containing a mix of places and predicted search terms.

    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:
    // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

    function initAutocomplete() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentLatLng = new window.google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          // 지도의 옵션을 설정해줍니다.
          // const mapOptions = {

          // };

          // 지도를 생성합니다.
          const map = new window.google.maps.Map(
            document.getElementById("map") as HTMLElement,
            {
              center: currentLatLng,
              zoom: 18,
              mapTypeId: "roadmap",
            }
          );

          // 마커를 생성합니다.

          const marker = new window.google.maps.Marker({
            map: map,
          });
          marker.setPosition(currentLatLng);
          // 마커를 클릭했을 때 정보창을 보여줍니다.
          const infoWindow = new window.google.maps.InfoWindow({
            content: "<p>클릭한 위치의 정보를 보여줍니다.</p>  ",
          });

          // 지도를 클릭했을 때 마커를 찍고 해당 위치의 정보를 보여줍니다.
          window.google.maps.event.addListener(
            map,
            "click",
            function (event: any) {
              marker.setPosition(event.latLng);
              infoWindow.setContent(`
        <p>위도: ${event.latLng.lat()}</p>
        <p>경도: ${event.latLng.lng()}</p>
        <p>주소: </p>
      `);

              // 좌표를 주소로 변환해줍니다.
              const geocoder = new window.google.maps.Geocoder();
              geocoder.geocode(
                { location: event.latLng },
                function (results: any, status: any) {
                  if (status === "OK") {
                    if (results?.[0]) {
                      infoWindow.setContent(`
              <p>위도: ${event.latLng.lat()}</p>
              <p>경도: ${event.latLng.lng()}</p>
              <p>주소: ${results[0].formatted_address}</p>
            `);
                    } else {
                      window.alert("검색 결과가 없습니다.");
                    }
                  } else {
                    window.alert(
                      "지오코딩 API가 실패했습니다. 상태 코드: " + status
                    );
                  }
                }
              );
              infoWindow.open(map, marker);
            }
          );

          // 검색바 관련로직
          //   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

          //   // Bias the SearchBox results towards current map's viewport.
          //   map.addListener("bounds_changed", () => {
          //     searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
          //   });

          //   let markers: google.maps.Marker[] = [];

          //   // Listen for the event fired when the user selects a prediction and retrieve
          //   // more details for that place.
          //   searchBox.addListener("places_changed", () => {
          //     const places = searchBox.getPlaces();

          //     if (places?.length == 0) {
          //       return;
          //     }

          //     // Clear out the old markers.
          //     markers.forEach((marker) => {
          //       marker.setMap(null);
          //     });
          //     markers = [];

          //     // For each place, get the icon, name and location.
          //     const bounds = new google.maps.LatLngBounds();

          //     places?.forEach((place) => {
          //       if (!place.geometry || !place.geometry.location) {
          //         console.log("Returned place contains no geometry");
          //         return;
          //       }

          //       const icon = {
          //         url: place.icon as string,
          //         size: new google.maps.Size(71, 71),
          //         origin: new google.maps.Point(0, 0),
          //         anchor: new google.maps.Point(17, 34),
          //         scaledSize: new google.maps.Size(25, 25),
          //       };

          //       // Create a marker for each place.
          //       markers.push(
          //         new google.maps.Marker({
          //           map,
          //           icon,
          //           title: place.name,
          //           position: place.geometry.location,
          //         })
          //       );

          //       if (place.geometry.viewport) {
          //         // Only geocodes have viewport.
          //         bounds.union(place.geometry.viewport);
          //       } else {
          //         bounds.extend(place.geometry.location);
          //       }
          //     });
          //     map.fitBounds(bounds);
          //   });
        });
        // const input = document.getElementById("pac-input") as HTMLInputElement;
        // const searchBox = new google.maps.places.SearchBox(input);
      }

      // Create the search box and link it to the UI element.
    }

    window.initAutocomplete = initAutocomplete;
  }, []);

  return (
    <>
      <Script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-xDF_EWyRLto1rH1B2edGOHkchBcRnaI&resion=KR&language=ko&callback=initAutocomplete&libraries=places&v=weekly"
      ></Script>
      {/* <input
        id="pac-input"
        className="controls"
        type="text"
        placeholder="Search Box"
      /> */}
      <S.MapBoxStyles>
        <MapSideList />
        <S.MainMap id="map"></S.MainMap>
      </S.MapBoxStyles>
    </>
  );
};
