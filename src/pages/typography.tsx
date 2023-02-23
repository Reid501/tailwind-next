import Link from "next/link";

export default function Typography() {
  return (
    <>
      <Link href="/">back</Link>
      <h1 className="text-3xl">Title 1</h1>
      <h2 className="text-2xl">Title 2</h2>
      <h3 className="text-xl">Title 2</h3>
      <p className="text-base  italic underline decoration-red-500 decoration-wavy decoration-1 underline-offset-4 leading-loose capitalize">
        a regular paragraph
      </p>
      <p className="text-sm ">A description paragraph</p>
      <p className="note text-xs">A little note</p>
      <p className="truncate">
        This is a long sentence with a lot of words to explain truncate with my
        sentence
      </p>
    </>
  );
}
