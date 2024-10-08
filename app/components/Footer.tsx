import Image from "next/image";

export default function Footer(){
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-primary-500 py-5 text-white">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/panda.magician/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Image
          aria-hidden
          src="./images/icon-instagram.svg"
          alt="File icon"
          width={24}
          height={24}
        />
      </a>
    </footer>
  )
}