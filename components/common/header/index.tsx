import { Box } from '@mui/system'
import * as React from 'react'
import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export default function Header() {
	return (
		<>
			<HeaderDesktop/>
			<HeaderMobile/>
		</>
	)
}
