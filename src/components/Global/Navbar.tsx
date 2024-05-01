import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'


type Props = {}

const Navbar = async (props: Props) => {
  const user = true;
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-8 bg-black/30 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-500 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-xl font-bold">Air</p>
        <Image
          src="/vercel.svg"
          width={10}
          height={15}
          alt="airpure logo"
          className="shadow-sm"
        />
        <p className="text-xl font-bold">Pure</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block ">
        <ul className="flex items-center gap-4 list-none font-bold">
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          
        </ul>
      </nav>
      
<aside className="flex items-center gap-4">
  <Link
    href="/dashboard"
    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  >
    <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {user ? 'Login' : 'Get Started'}
    </span>
  </Link>
  <Link
    href="/signup"
    className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  >
    <span className="absolute inset-[-1000%]  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
      {user ? 'Sign Up' : 'Get Started'}
    </span>
  </Link>
</aside>

    </header>
  )
}


export default Navbar