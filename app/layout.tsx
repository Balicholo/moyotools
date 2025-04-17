import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MoyoTools - Business Management Solutions',
  description: 'Integrated suite of CRM, Sales, and Accounting tools for modern businesses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                MoyoTools
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/#features" className="hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/#about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
                <Button>Get Started</Button>
              </div>

              {/* Mobile Navigation */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetTitle>Menu</SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link 
                      href="/#features" 
                      className="block py-2 text-lg hover:text-primary transition-colors"
                    >
                      Features
                    </Link>
                    <Link 
                      href="/#about" 
                      className="block py-2 text-lg hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                    <Link 
                      href="/#contact" 
                      className="block py-2 text-lg hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                    <Button className="mt-4">Get Started</Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}