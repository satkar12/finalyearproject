import Link from 'next/link';
import { FileText } from 'lucide-react';
import Image from 'next/image';




export default function Header() {
    return (
        <nav className="w-full flex items-center bg[#fde6cc] py-4 px-0">
            {/* QuickPrep logo at the left edge */}
            
            <div className="flex  items-center pl-3 bg-transparent">
                <Link href="/" className="flex items-center gap-2">
                    <FileText className="h-5 w-5 lg:w-8 lg:h-8  text-gray-900 hover:rotate-12 transfrom transition duration-200 ease-in-out" />
                    <span className="text-2xl font-bold text-gray-900">QuickPrep</span>
                </Link>
                



            </div>
            {/* Centered navigation */}
           <div className="flex-1 flex justify-center">
  <div className="flex gap-100 font-bold text-gray-900 text-1.5xl   tracking-wider">
    <Link 
      href="/#pricing" 
      className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
    >
      Pricing
    </Link>
    <Link 
      href="/#Chats" 
      className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
    >
      Chats
    </Link>
    <Link 
      href="/sign-in" 
      className="px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
    >
      Sign In
    </Link>
  </div>
</div>

        </nav>
    );
}
