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
        title: "Contact",
        subtitle:
          "Explore our portfolio of projects across web, mobile, and gaming platforms",
        showIntro: true,
        showCommentedSocialBlock: true,
      }}
    ></FullWidthLayout>
  );
}
