import React, { useRef, useEffect } from "react";

function useIsMountedRef() {
	const isMountedRef = useRef(null);

	useEffect(() => {
		// console.log('mounting now')
		isMountedRef.current = true;
		return () => {
			// console.log('unmounting now')
			isMountedRef.current = false;
		}
	});

	return isMountedRef;
}

export default useIsMountedRef;
