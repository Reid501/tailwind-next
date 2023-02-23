import Link from "next/link";

export default function Home() {
  return (
    <div className="m-10">
      <Link href="/typography" className="bg-red-500 text-white p-4">
        Typography
      </Link>
      {/* <h1 className="border-4 border-green-600">Hello world!</h1>
      <h1 className="text-vuejs-100">Hello world!</h1>

      <div>
        <p className="text-xs md:text-lg text-vuejs-100 lg:text-2xl lg:text-[#949494]">
          Hello long sentence
        </p>
      </div> */}
    </div>
  );
}
