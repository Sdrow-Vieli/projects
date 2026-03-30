"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";

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
          Web Applications
        </h1>{" "}
        <NeatAltStack
          cards={cardsData.webApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>
      <div>
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
          }}
        >
          Web Games
        </h1>{" "}
        <NeatAltStack
          cards={cardsData.webGames}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>
    </FullWidthLayout>
  );
}
