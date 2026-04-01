"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";
import NeatAltStackGrouped from "@/components/NeatStack";

export default function Home() {
  return (
    <FullWidthLayout showHero={true}>
      {" "}
      <div>
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
          }}
        >
          Web Games
        </h1>{" "}
        <NeatAltStackGrouped
          cards={cardsData.webGames}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>
    </FullWidthLayout>
  );
}
