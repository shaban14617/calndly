import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className='text-center mt-24'>
        <p className='text-center mt-32 text-gray-600'>
          Trusted by those companies
        </p>
        <div className='flex gap-8 mt-6 justify-center '>
          <Image
            width={150}
            height={150}
            src='https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg'
            alt='company1'
          />
          <Image
            width={150}
            height={150}
            src='https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg'
            alt='company2'
          />
          <Image
            width={150}
            height={150}
            src='https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg'
            alt='company3'
          />
          <Image
            width={150}
            height={150}
            src='https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg'
            alt='company4'
          />
        </div>
      </section>
    </>
  );
}
