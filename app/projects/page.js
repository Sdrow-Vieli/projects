"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";

export default function Projects() {
  return (
    <FullWidthLayout showHero={false}>
      <NeatAltStack
        cards={cardsData.webApps}
        multipleMockupWidth={100}
        stickyStartPosition={100}
      />
    </FullWidthLayout>
  );
}
