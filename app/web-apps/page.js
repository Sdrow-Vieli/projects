"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStackGrouped from "@/components/NeatStack";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";

export default function Projects() {
  return (
    <FullWidthLayout showHero={false}>
      <div className="others">
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
            marginBottom: "1em",
          }}
        >
          Web Applications
        </h1>{" "}
        <NeatAltStackGrouped
          cards={cardsData.webApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>{" "}
      <div className="desktop">
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
            marginBottom: "1em",
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
    </FullWidthLayout>
  );
}
