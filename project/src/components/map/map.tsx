import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import * as leaflet from 'leaflet';
import useMap from '../../hooks/useMap';
import {
  ICON_ANCHOR_SIZE,
  ICON_SIZE,
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT
} from '../../const';
import { City } from '../../types/city';
import { Points } from '../../types/points';
import { useAppSelector } from '../../hooks/store';

type MapProps = {
  points: Points[];
  city: City;
};

function Map({ city, points }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_ANCHOR_SIZE,
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: ICON_SIZE,
    iconAnchor: ICON_ANCHOR_SIZE,
  });

  const selectedPoint = useAppSelector((state) => state.selectedPoint);

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
              icon: selectedPoint !== undefined &&
              point.lat === selectedPoint?.lat &&
              point.lng === selectedPoint?.lng ? currentCustomIcon : defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef} />;
}

export { Map };
