import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-24">
      <div className="textContainer flex-1 flex flex-col gap-12">
        <h1 className="text-white text-8xl font-bold">Creative Thoughts Agency.</h1>
        <p className=" text-xl text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.</p>
          <div className="flex gap-5">
            <button className=" p-5 min-w-28 cursor-pointer border-none rounded-md text-white bg-blue-500">Learn More</button>
            <button className=" p-5 min-w-28 cursor-pointer border-none rounded-md bg-white">Contact</button>
          </div>
          <div className="h-12 relative grayscale" style={{ width: 500,}}>
            <Image src="/brands.png" fill alt="" />
          </div>
      </div>

      <div className="imgContainer relative flex-1">
        <Image src="/hero.gif" fill unoptimized alt="" />
      </div>
    </div>
  );
}
