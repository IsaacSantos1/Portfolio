import Link from 'next/link'

export default function Navbar() {
 
    return (
        <nav className="p-4 bg-transparent">
            <ul className=" flex justify-between items-center w-full">
               <li className="heading4">Isaac Santos</li>

               <div className="flex gap-1">
                <Link href="/AboutMe" className="heading4">About Me |</Link>
                   <Link href="/Projects" className="heading4">Projects|</Link>
                     <Link href="/Contact" className="heading4">Contact</Link>
               </div>
            </ul>
        </nav>
    );
}
