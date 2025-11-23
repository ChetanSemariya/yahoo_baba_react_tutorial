import React, { useEffect, useLayoutEffect } from 'react'

const LayoutEffect = () => {

    useEffect(() => {
        console.log("useEffect Message");
    }, []);

    useLayoutEffect(() => {
        console.log('useLayout message');
    }, []);

  return (
    <div>
      <j2>use Layout effect hook tutorial</j2>
    </div>
  )
}

export default LayoutEffect
