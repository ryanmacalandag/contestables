import defaultImage from '../../../public/images/race.jpg'
import Image from "next/image";

export default function UICardChallenge() {
  return (

    <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col border border-neutral-800 rounded-xl overflow-hidden">
    
      <div className="border-b border-neutral-800">
        <Image
          src={defaultImage}
          alt='default'
          width={800}
          height={500}
        />
      </div>  

      <div className="flex flex-row">
        <div className="p-4">
          <h2 className="font-semibold">Loseweight at Home</h2>
        </div>
      </div>

    </div>

  )
}
