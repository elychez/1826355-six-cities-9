import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import * as leaflet from 'leaflet';
import useMap from '../../useMap';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { City } from '../../types/city';
import { Points } from '../../types/points';

type MapProps = {
  points: Points[];
  city: City;
  selectedPoint: Points | undefined;
};

function Map({ city, points, selectedPoint }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            },
            {
              icon:
                point.title === selectedPoint?.title
                  ? currentCustomIcon
                  : defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{height: '100%'}} ref={mapRef}/>;
}

export {Map};
