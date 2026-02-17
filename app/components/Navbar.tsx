import Link from 'next/link'

export default function Navbar() {
 
    return (
        <nav className="p-4 bg-transparent fixed w-full top-0 z-50">
            <ul className="flex justify-between items-center w-full max-w-7xl mx-auto px-4">
               <li className="heading4 text-white">Isaac Santos</li>

               <div className="flex gap-6">
                <Link href="/AboutMe" className="heading4 text-white hover:text-gray-300 transition">About Me</Link>
                   <Link href="/Projects" className="heading4 text-white hover:text-gray-300 transition">Projects</Link>
                     <Link href="/Contact" className="heading4 text-white hover:text-gray-300 transition">Contact</Link>
               </div>
            </ul>
        </nav>
    );
}