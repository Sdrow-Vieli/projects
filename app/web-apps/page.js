"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStackGrouped from "@/components/NeatStack";
import NeatAltStack from "@/components/NeatAltStack";
import cardsData from "@/data/projects.json";

export default function Projects() {
  return (
    <FullWidthLayout
      showHero={true}
      heroProps={{
        title: "Web Applications",
        subtitle:
          "Explore our portfolio of projects across web, mobile, and gaming platforms",
        showIntro: true,
        showCommentedSocialBlock: false,
      }}
    >
      <div className="others">
        <NeatAltStackGrouped
          cards={cardsData.webApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>{" "}
      <div className="desktop">
        <NeatAltStack
          cards={cardsData.webApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>
    </FullWidthLayout>
  );
}
