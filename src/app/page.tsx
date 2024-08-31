import Image from 'next/image'
import styles from '../../public/styles/home.module.css'

export default function Home() {
  return (
    <main
      className={`flex w-full min-h-screen flex-col items-center justify-center overflow-hidden p-8 md:p-24 ${styles.background}`}
    >
      <Image
        className="relative mb-10 md:mb-12 lg:mb-16 xl:mb-20 w-[140px] h-[39px] md:w-[240px] md:h-[60px] xl:w-[281px] xl:h-[78px]"
        src="/svgs/bucketsLogoHome.svg"
        alt="Buckets Logo"
        width={281}
        height={78}
        priority
      />
      <h3 className="animate-pulse text-2xl md:3xl xl:text-5xl font-montserrat text-secondary mb-2 xl:mb-4">
        Coming soon
      </h3>
      <h1 className="text-3xl md:text-5xl xl:text-8xl font-champBlack w-full max-w-[600px] xl:max-w-[900px] text-center mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        Out of this world chocolate
      </h1>
      {/* <a
        href="mailto:contact@bucketschocolate.com?subject=Hello%20Buckets!&body=Hello%20Buckets,%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information%20about%20your%20services.%0D%0A%0D%0AThank%20you%20in%20advance,"
        className="bg-secondary text-darkchoco rounded-full px-10 md:px-14 xl:px-20 py-2 xl:py-5 uppercase text-2xl md:text-3xl xl:text-4xl font-montserrat font-extrabold mb-2 xl:mb-5"
      >
        Contact
      </a> */}
      <a
        href="mailto:contact@bucketschocolate.com?subject=Hello%20Buckets!&body=Hello%20Buckets,%0D%0A%0D%0AI%20would%20like%20to%20get%20more%20information%20about%20your%20services.%0D%0A%0D%0AThank%20you%20in%20advance,"
        className="px-10 md:px-14 xl:px-20 py-2 xl:py-5 uppercase text-2xl relative md:text-3xl xl:text-4xl font-montserrat font-extrabold mb-2 xl:mb-5 rounded-full group overflow-hidden bg-secondary text-darkchoco inline-block border-2 border-solid border-secondary"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-darkchoco group-hover:h-full"></span>
        <span className="relative group-hover:text-secondary">Contact</span>
      </a>
      <p className="text-center font-montserrat text-sm md:text-xl xl:text-2xl text-white max-w-[350px] md:max-w-[400px] xl:max-w-[600px]">
        or write us at{' '}
        <span className="font-bold">contact@bucketschocolate.com</span> for more
        information
      </p>
    </main>
  )
}
