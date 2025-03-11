import Link from "next/link"
import { Button } from "./ui/button"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="c container mx-auto flex justify-between">
        <Link href="/">
        <h1 className="text-4xl font-semibold">Nabeel<span className="text-accent">.</span></h1>
        </Link>
        {/* desktop navbar & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
        <Navbar/>
        <Link href="/contact">
        <Button className="bg-accent">Hire me</Button>
        </Link>

        </div>

      </div>
      
    </header>
  )
}

export default Header
