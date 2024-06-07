import React from 'react';
import './BtnScrollUp.css'

function BtnScrollUp() {
	
	const handlerScrollUp = () => {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			window.scrollBy(0, -50);
			setTimeout(handlerScrollUp, 10);
		}
	}
	
	return (
		<div className={'btn-scroll-up'} onClick={handlerScrollUp}>&#9650;</div>
	);
}

export default BtnScrollUp;