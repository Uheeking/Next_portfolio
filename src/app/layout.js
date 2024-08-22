import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import profile from '../../public/profile.png';
import '../../src/app/globals.css'

const DarkModeToggleButton = dynamic(() => import('./components/dark-mode-toggle-button'));

export const metadata = {
  title: '유희왕 포트폴리오',
  description: '유희왕이 그동안 쌓아놓은 프로젝트를 확인해주세요!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/" legacyBehavior>
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image src={profile} alt="Profile Picture" width={50} height={50} />
                <span className="ml-3 text-xl font-bold">
                  유희왕의 포트폴리오
                </span>
              </a>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" legacyBehavior>
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>
              <Link href="/project" legacyBehavior>
                <a className="mr-5 hover:text-gray-900">Project</a>
              </Link>
              <Link href="/chatgpt" legacyBehavior>
                <a className="mr-5 hover:text-gray-900">ChatGPT</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="mr-5 hover:text-gray-900">Contact Me</a>
              </Link>
            </nav>
            <DarkModeToggleButton />
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
