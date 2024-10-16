import Image from "next/image"
import { CustomButton } from "./CustomButton"

export const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex justify-between items-center max-w-[1440px]
      mx-auto  sm:px-16 px-6 py-4 bg-transparent">
        <Image
         alt='navImg'
         src='/logo.svg'
         width={118}
         height={18}
         className="object-contain"
        />
        <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles='bg-white rounded-full
            text-primary-blue min-w-[130px]'
        />
      </nav>
    </header>
  )
}

