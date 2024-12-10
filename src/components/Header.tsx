import React from 'react'

import LogoImg from '@/imgs/logo.png'

function Header() {
  return (
	<>
		<div id="headerFill"/>
		<div id="header">
			<div>
				<img src={LogoImg.src} alt="Innovation Council Logo" width="30" height="30"/>
				Innovation Council
			</div>
			<div>

			</div>
		</div>
	</>
  )
}

export default Header