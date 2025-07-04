import NavLink from '@/components/common/nav-link';
import { FileText } from 'lucide-react';
import {CircleDollarSign} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';




export default function Header() {
  const isLoggedIn = false;
    return (
      <nav className="flex items-center justify-between px-4 py-2 shadow">
        <div className="flex lg:flex-1  ">
          <NavLink href="/" className="flex items-center gap-0.5 lg:gap-1 shrink-0 ">
          <FileText className="w-3 h-3 lg:w-6 lg:h-6 hover:rotate-12 transform transition duration-200 ease-in-ou"/>
          <span className="font-extrabold lg:text-xl text-gray-900">QuickPrep</span></NavLink>
        </div>

        <div  className="flex  lg:justify-center font-bold gap-4 lg:gap-16 lg:items-center">
          <NavLink href="/#pricing">Pricing</NavLink>
         
          
       
          <NavLink href="/#chats">Chat</NavLink>
          {isLoggedIn && <NavLink href="/#dashboard">Your Summeries</NavLink>}
        </div>
        <div className="flex font-bold lg:flex-1 lg:justify-end">
          {isLoggedIn ? (
          <div className="flex lg:gap-2 items-center">
            <NavLink href="/#upload">Upload a PDF</NavLink>
            <div>Pro</div>
            <Button>Sign Out</Button>
            </div>
          ) :(
          <div>
            <NavLink href="/#sign-in">Sign In</NavLink>
          </div>
          )}
        </div>
          
      </nav>
    );

        
}
