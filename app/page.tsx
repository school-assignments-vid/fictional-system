import {
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardLink,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const cards = [
  {
    title: "Terma A/S",
    description: "Industritekniker, Teknologi, byggeri og transport",
    link: "#",
    image: "/images/forside/paper_bg.webp",
    imageAlt: "Image Alt Text",
  },
  {
    title: "Johnsen Print & Digital Media",
    description: "Grafisk tekniker, Teknologi, byggeri og transport",
    link: "#",
    image: "/images/forside/paper_bg.webp",
    imageAlt: "Image Alt Text",
  },
  {
    title: "Campus Djursland",
    description: "Castronom, Fødevarer, Jordbrug og Oplevelser",
    link: "#",
    image: "/images/forside/paper_bg.webp",
    imageAlt: "Image Alt Text",
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full h-120 relative bg-[url(/images/forside/paper_bg.webp)] bg-cover">
        <div className="bg-secondary/60 w-full h-full pt-20 flex justify-center items-center flex-col gap-2 font-headline text-center p-4">
          <span className="text-xl md:text-2xl font-bold text-shadow-lg text-white">
            Hvad vil du være?
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-shadow-lg text-primary">
            Vi er i lære
          </h1>
          <span className="font-bold text-shadow-lg md:text-2xl text-white">
            ilære.dk - stedet, hvor unge og virksomheder mødes
          </span>
        </div>
      </section>
      <section>
        <div className="h-40 md:h-50 bg-primary flex justify-center items-center px-8">
          <span className="text-white text-4xl md:text-6xl text-center font-bold font-headline">
            Find Virksomheder på kortet
          </span>
        </div>
        <iframe
          className="w-full h-125"
          src="https://ilaere.dk/treweler-map/kort/?twer-index=1&twer-map-id=1548&twer-height=500px&twer-type=fullwidth&twer-scrollzoom=no&twer-zoombygesture=no&twer-width&twer-lat&twer-lon&twer-zoom&twer-root-id=157&tw=iframe"
        ></iframe>
      </section>
      <section className="hidden md:flex mx-auto container p-4 w-full flex-col gap-10 justify-center items-center">
        <h2 className="font-headline text-5xl font-bold xl:text-7xl text-center">
          Mød de nyeste virksomheder
        </h2>
        <div className="flex flex-row justify-center items-center gap-4">
          {cards.map((card, idx) => (
            <Card key={idx}>
              <CardImage src={card.image} alt={card.imageAlt} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
                <CardLink href={card.link}>Læs mere</CardLink>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
          className="px-8 py-4 bg-primary rounded-md text-white font-semibold font-headline"
          href="#"
        >
          Flere Virksomheder
        </Link>
      </section>
      <section className="p-4 mb-10 grid grid-cols-1 xl:grid-cols-2 gap-12 mx-auto container md:mt-10">
        <div>
          <div className="mb-10 flex gap-4 flex-col">
            <h3 className="font-headline text-2xl font-bold md:text-4xl">
              Praktik- og lærepladser på Djursland
            </h3>
            <p className="text-sm md:text-base xl:text-lg">
              ilære.dk er skabt i samarbejde mellem folkeskoler, erhvervsskoler
              og virksomheder for at fremme interessen for erhvervsrettede
              uddannelser for folkeskoleelever i 7., 8. og 9.klasse.
            </p>
            <p className="text-sm md:text-base xl:text-lg">
              Hvis du har svært ved at finde ud af, hvilket arbejde eller fag
              der kunne være spændende for dig, så prøv at kigge her på
              hjemmesiden.
            </p>
          </div>
          <Link
            className="bg-primary text-lg font-headline md:font-semibold text-white flex md:inline md:p-2 justify-center h-18 items-center"
            href="#"
          >
            Mød Virksomhederne
          </Link>
        </div>
        <iframe
          className="w-full aspect-video bg-amber-200"
          src="https://player.vimeo.com/video/1086696953?h=08d3c4e9cf&dnt=1&app_id=122963?dnt=1"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        ></iframe>
      </section>
    </>
  );
}
