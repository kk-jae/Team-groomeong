import { useEffect, useState, useRef, RefObject } from "react";

interface IuseMap {
  mapRef: RefObject<HTMLDivElement>;
}

const useMap = (): IuseMap => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<HTMLDivElement>();

  useEffect(() => {});

  return {
    mapRef,
  };
};

export default useMap;
