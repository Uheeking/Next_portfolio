import Link from "next/link";
import DarkModeToggleButton from "./dark-mode-toggle-button";
import Image from "next/image";
import profile from '../public/profile.png'

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image src={profile} width={50} height={50}/>
              <span className="ml-3 text-xl font-bold">유희왕의 포트폴리오</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">홈</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">프로젝트</a>
            </Link>
            <Link href="/gpt" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">ChatGPT</a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Contact Me</a>
            </Link>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </>
  );
}
