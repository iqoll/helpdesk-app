import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

function Navbar({ user }) {
	return (
		<nav>
			<Image
				src={Logo}
				alt='Qol Helpdesk Logo'
				width={70}
				quality={100}
				placeholder='blur'
			/>
			<h1>Qol Helpdesk</h1>
			<Link href='/'>Dashboard</Link>
			<Link href='/tickets'>Tickets</Link>
			{user && <span>Hello, {user.email}</span>}
		</nav>
	)
}
export default Navbar
