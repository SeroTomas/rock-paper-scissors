import logo from "../assets/Icons/logo.svg"
import logoBonus from "../assets/Icons/logo-bonus.svg"
import Image from "next/image";
import Link from "next/link";


function Home() {
  return (
    <div className=' flex flex-col justify-center items-center gap-10 bg-gradient-to-b from-bg-start to-bg-end h-screen'>
      <Link className="border h-fit" href="/normal">
        <Image src={logo}  height={120} alt="Logo"/>
      </Link>
      <Link href="#">
        <Image src={logoBonus} height={200} alt="Logo bonus" />
      </Link>
    </div>
  )
}

export default Home;
