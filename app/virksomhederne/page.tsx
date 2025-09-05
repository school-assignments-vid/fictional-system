import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="relative bg-[url(/images/forside/paper_bg.webp)] bg-cover">
        <div className="bg-primary/80 w-full min-h-120 flex justify-center items-center flex-col gap-8 font-headline text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-shadow-lg text-white">
            Brancheområderne
          </h1>
          <div className="text-white flex flex-col gap-6 font-headline text-xl px-4">
            <Link
              href={"virksomhederne/foedevarer-jordbrug-og-oplevelser"}
              className="border-white font-semibold border-2 py-2 px-4 rounded-sm"
            >
              Fødevarer, jordbrug og oplevelser
            </Link>
            <Link
              href={"virksomhederne/foedevarer-jordbrug-og-oplevelser"}
              className="border-white font-semibold border-2 py-2 px-4 rounded-sm"
            >
              Kontor, handel og forretningsservice
            </Link>
            <Link
              href={"virksomhederne/foedevarer-jordbrug-og-oplevelser"}
              className="border-white font-semibold border-2 py-2 px-4 rounded-sm"
            >
              Teknologi, byggeri og transport
            </Link>
            <Link
              href={"virksomhederne/foedevarer-jordbrug-og-oplevelser"}
              className="border-white font-semibold border-2 py-2 px-4 rounded-sm"
            >
              Omsorg, sundhed og pædagogik
            </Link>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        
      </section>
    </>
  );
}
