"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/lazy_appz.json";

export default function Projects() {
  const cards = cardsData.cards || [];

  return (
    <FullWidthLayout showHero={false}>
      <NeatAltStack
        cards={cards}
        multipleMockupWidth={100}
        stickyStartPosition={100}
      />
    </FullWidthLayout>
  );
}
