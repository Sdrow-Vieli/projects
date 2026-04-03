"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";
import NeatAltStackGrouped from "@/components/NeatStack";

import cardsData from "@/data/projects.json";

export default function Projects() {
  return (
    <FullWidthLayout
      showHero={true}
      heroProps={{
        title: "Mobile Applications",
        subtitle:
          "Explore our portfolio of projects across web, mobile, and gaming platforms",
        showIntro: true,
        showCommentedSocialBlock: false,
      }}
    >
      {" "}
      <div className="others">
        <NeatAltStackGrouped
          cards={cardsData.mobileApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>{" "}
      <div className="desktop">
        <NeatAltStack
          cards={cardsData.mobileApps}
          multipleMockupWidth={100}
          stickyStartPosition={100}
        />
      </div>
    </FullWidthLayout>
  );
}
