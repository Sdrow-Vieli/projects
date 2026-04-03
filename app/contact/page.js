"use client";

import FullWidthLayout from "@/components/layouts/FullWidthLayout";
import NeatAltStack from "@/components/NeatAltStack";

export default function Projects() {
  return (
    <FullWidthLayout
      showHero={true}
      showPersistentSidebar={false}
      heroProps={{
        title: "Get In Touch",
        subtitle:
          "Explore our portfolio of projects across web, mobile, and gaming platforms",
        showIntro: true,
        showCommentedSocialBlock: true,
      }}
    ></FullWidthLayout>
  );
}
