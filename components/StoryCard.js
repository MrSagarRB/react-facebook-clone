import Image from "next/image"

function StoryCard({name,src,profile}) {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3 transition duration-100 transform ease-in hover:scale-105 hover:animate-pulse'>
        <Image 
        className="absolute opacity-0 lg:opacity-100 rounded-full z-40 top-10 border-2 border-red-600"
        src={profile}
        width={40}
        height={40}
        layour="fixed"
        objectFit="cover"
        alt='Photo'
        />
        <Image 
        className="object-cover filter brightness-75 rounded-full lg:rounded-2xl"
        src={src}
        layout="fill"
        alt='ImageP'
        />
        <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
    </div>
    )
}

export default StoryCard
