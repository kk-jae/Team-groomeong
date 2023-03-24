import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const useMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<HTMLDivElement>()

  useEffect(() => {
    
  })

  return {
    mapRef,
  }
}

export default useMap