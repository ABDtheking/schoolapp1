import Link from 'next/Link'
import Image from 'next/Image'

export default function FirstPost(){
  return(
    <>
    <h1> FirstPost</h1>
    <Image 
    src = '/images/random.jpg'
    width={800}
    height = {533}
    alt = 'random'/>
    <h2>
      <Link href="/"> back to home </Link>
    </h2>
    </>
  )
}