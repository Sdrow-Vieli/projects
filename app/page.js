"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";
import NeatAltStackGrouped from "@/components/NeatStack";

export default function Home() {
  return (
    <FullWidthLayout
      showHero={true}
      heroProps={{
        title: "Featured Projects",
        subtitle:
          "Explore our portfolio of projects across web, mobile, and gaming platforms",
        showIntro: true,
        showCommentedSocialBlock: false,
      }}
    >
      {" "}
      <div>
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
      <div>
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
            marginBottom: "1em",
          }}
        >
          Web Games
        </h1>{" "}
        <NeatAltStackGrouped
          cards={cardsData.webGames}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>{" "}
      <div>
        <h1
          className="lemon-font"
          style={{
            color: "#444444",
            marginBottom: "1em",
          }}
        >
          Mobile Applications
        </h1>{" "}
        <NeatAltStackGrouped
          cards={cardsData.mobileApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>{" "}
    </FullWidthLayout>
  );
}
