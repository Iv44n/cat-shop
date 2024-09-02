import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='relative h-screen w-full max-w-[100vw] md:aspect-video'>
        <div className='absolute inset-0'>
          <video
            autoPlay
            muted
            loop
            id='myVideo'
            className='video cp-v h-full w-full object-cover object-top'
          >
            <source src='/home_video.webm' type='video/webm'/>
            <source src='/home_video.mp4' type='video/mp4' />
          </video>
          <div className='absolute z-10 inset-0 flex flex-col items-center justify-center text-white md:px-40 lg:px-60'>
            <div className='text-center'>
              <h2 className='text-7xl font-bold'>Gatitos criados en un entorno familiar</h2>
              <p className='text-2xl mt-2'>¡Tu amigo ideal en Pet Vital!</p>
            </div>
            <Link href='/about' className='bg-white text-black font-semibold py-2 px-4 rounded mt-4 z-50'>
              Más información
            </Link>
          </div>
        </div>
      </div>

      <article className='w-full flex flex-col items-center justify-center p-8'>
        <h2 className='text-3xl font-bold'>Nuestros gatitos</h2>
        <p className='text-lg mt-2'>Cada uno de ellos tiene una historia propia</p>
      </article>
    </main>
  )
}
