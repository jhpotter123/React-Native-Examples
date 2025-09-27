import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

/**
 * Definition of props coming in:
 * initialMilliseconds -- Specifies the initial time to count down from in ms.
 * onExpire -- callback that gets called when the timer finishes.
 */
const Countdown = (props) => {
	const [ millisecondsRemaining, setMillisecondsRemaining ] = useState(props.initialMilliseconds);

	const tick = () => {
		let timeRemain = millisecondsRemaining;
		let interval = setInterval(function(){
			console.log(getFormattedTime(timeRemain));
			timeRemain -= 1000;
			setMillisecondsRemaining(timeRemain);
			if ( timeRemain <= 0 ) {
				clearInterval(interval);
				if ( props.onExpire ) {
					props.onExpire();
				}
			}
		}, 1000);
	};

	const getFormattedTime = (milliseconds) => {
		const remainingSec = Math.round(milliseconds / 1000);
		const seconds = parseInt((remainingSec % 60).toString(), 10);
		const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
		const hours = parseInt((remainingSec / 3600).toString(), 10);
		const s = seconds < 10 ? '0' + seconds : seconds;
		const m = minutes < 10 ? '0' + minutes : minutes;
		let h = hours < 10 ? '0' + hours : hours;
		h = h === '00' ? '' : h + ':';
		return h + m + ':' + s;
	};

	useEffect(() => {
		tick();
	}, []);

	return (
		<Text>
			{getFormattedTime(millisecondsRemaining)}
		</Text>
	);
}

export default Countdown;
