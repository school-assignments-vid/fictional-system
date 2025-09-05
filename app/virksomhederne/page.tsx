import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
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
      <section className="container mx-auto px-2 py-12">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Fødevarer, jordbrug og oplevelser
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger secondary>
                    Dyr, planter, miljø
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger secondary>
                    Mad, ernæring og restaurant
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Kontor, handel og forretningsservice
            </AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger secondary>Kontor</AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger secondary>
                    Handel og service
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Omsorg, sundhed og pædagogik</AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger secondary>Omsorg</AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger secondary>
                    Sundhed og velvære
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger secondary>Pædagogik</AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Teknologi, byggeri og transport</AccordionTrigger>
            <AccordionContent>
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger secondary>
                    Byggeri og Anlæg
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger secondary>
                    Design og medieproduktion
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger secondary>
                    IT og elektricitet
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger secondary>
                    Metal, mekanik og maskiner
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger secondary>
                    Produktionsindustri
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger secondary>
                    Transport og logistik
                  </AccordionTrigger>
                  <AccordionContent>d</AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
