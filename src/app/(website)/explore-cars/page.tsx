import { SectionWithContainer } from "@/components/sectionComponants";
import { cabSegments } from "@/utils/cabSegments";
import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Suspense } from "react";
import ExploreCars from "./components/ExploreCars";

// Only reachable from the booking form with trip details in the URL, so it's kept out of search results.
export const metadata: Metadata = {
  title: "Explore Cars",
  description: "Choose the right car for your trip from the Reluxe Mobility fleet.",
  robots: { index: false, follow: true },
};

// Segments whose photo is in /public yet; the others show an icon until it's added.
const segmentsWithPhoto = cabSegments
  .filter((segment) => segment.image && existsSync(path.join(process.cwd(), "public", segment.image)))
  .map((segment) => segment.id);

export default function ExploreCarsPage() {
  return (
    <main className="bg-quaternary">
      <SectionWithContainer sectionClassName="pt-28 md:pt-32">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <ExploreCars segmentsWithPhoto={segmentsWithPhoto} />
        </Suspense>
      </SectionWithContainer>
    </main>
  );
}
