// src/data/cardsData.js
import techIconsData from "./techIcons.json"; // Your first JSON with technology icons
import projectsData from "./projects.json"; // Your second JSON with project data

// Map technology icons by category
const techIconsMap = {};

// Process technology icons data
techIconsData.forEach((category) => {
  const categoryName = Object.keys(category)[0];
  techIconsMap[categoryName] = category[categoryName];
});

// Helper to get technologies for a specific project
const getTechnologiesForProject = (projectKey) => {
  const techList = techIconsMap[projectKey] || [];

  // Map to the format expected by the component
  return techList.map((tech) => ({
    id: tech.id,
    name: tech.name || tech.id.charAt(0).toUpperCase() + tech.id.slice(1),
    url: tech.url,
    color: tech.color,
    hoverColor: tech.hoverColor || tech.hover || tech.color,
    path: tech.path,
  }));
};

// Transform projects data into cards format
const transformToCards = () => {
  const allCards = [];

  // Helper to process each project group
  const processProjectGroup = (group, type, category) => {
    if (!group || group.length === 0) return [];

    const cards = [];

    group.forEach((projectPair, index) => {
      if (!projectPair || projectPair.length === 0) return;

      const mainProject = projectPair[0];
      const detailsProject = projectPair[1];

      if (!mainProject) return;

      // Determine icon key based on project title
      let iconKey = "";
      if (mainProject.title === "Creativehub") iconKey = "creativehub";
      else if (mainProject.title === "Recipe Search") iconKey = "recipe-search";
      else if (mainProject.title === "Infiltration Countdown")
        iconKey = "infiltration";
      else if (mainProject.title === "Jambuddy") iconKey = "jambuddy";
      else if (mainProject.title === "Memory Game") iconKey = "memory-game";
      else if (mainProject.title === "Scan Me") iconKey = "scan-me";
      else if (mainProject.title === "Simple Variometer")
        iconKey = "simple-vario";
      else if (mainProject.title === "Eco Collect") iconKey = "eco-collect";

      // Get technologies
      const technologies = getTechnologiesForProject(iconKey);

      // Create first card (main project preview)
      cards.push({
        id: `${type}-${mainProject.title.toLowerCase().replace(/\s+/g, "-")}-main`,
        title: mainProject.title,
        subtitle: mainProject.subtitle || "",
        description: mainProject.description || "",
        details: mainProject.details || "",
        statusText:
          mainProject.statusText ||
          (mainProject.statusColor === "green" ? "LIVE" : "IN DEVELOPMENT"),
        statusColor: mainProject.statusColor || "red",
        image: mainProject.image || "",
        link: detailsProject?.link || mainProject.link || "",
        githubLink: mainProject.githubLink || detailsProject?.githubLink || "",
        imgTransform: mainProject.imgTransform || null,
        cardId: `${type}-${mainProject.title.toLowerCase().replace(/\s+/g, "-")}`,
        isMain: true,
        type: type,
        category: category,
      });

      // Create second card (detailed view)
      if (detailsProject) {
        cards.push({
          id: `${type}-${mainProject.title.toLowerCase().replace(/\s+/g, "-")}-details`,
          title: detailsProject.title || mainProject.title,
          subtitle: detailsProject.subtitle || "",
          description: detailsProject.description || "",
          details: detailsProject.details || "",
          statusText: detailsProject.statusText || "DETAILS",
          statusColor: detailsProject.statusColor || "orange",
          image: detailsProject.image || mainProject.image || "",
          link: detailsProject.link || "",
          githubLink: detailsProject.githubLink || mainProject.githubLink || "",
          cardId:
            detailsProject.cardId ||
            `${type}-${mainProject.title.toLowerCase().replace(/\s+/g, "-")}`,
          iconKey: iconKey,
          technologies: technologies,
          stats: detailsProject.stats || mainProject.stats || [],
          mockupImages: detailsProject.mockupImages || [],
          features: detailsProject.features || mainProject.features || [],
          button: detailsProject.button || false,
          buttonText: detailsProject.buttonText || "",
          multipleMockupWidth: detailsProject.mockupWidth || 100,
          isMain: false,
          type: type,
          category: category,
        });
      }
    });

    return cards;
  };

  // Process Web Apps
  if (projectsData.webApps) {
    projectsData.webApps.forEach((group, index) => {
      const cards = processProjectGroup(group, "webapp", "web");
      allCards.push(...cards);
    });
  }

  // Process Web Games
  if (projectsData.webGames) {
    projectsData.webGames.forEach((group, index) => {
      const cards = processProjectGroup(group, "webgame", "game");
      allCards.push(...cards);
    });
  }

  // Process Mobile Apps
  if (projectsData.mobileApps) {
    projectsData.mobileApps.forEach((group, index) => {
      const cards = processProjectGroup(group, "mobileapp", "mobile");
      allCards.push(...cards);
    });
  }

  return allCards;
};

// Generate the cards data
export const cards = transformToCards();

// Also export categories for filtering if needed
export const categories = {
  web: cards.filter((card) => card.category === "web"),
  game: cards.filter((card) => card.category === "game"),
  mobile: cards.filter((card) => card.category === "mobile"),
};

// Export the raw data for debugging
export const rawTechIcons = techIconsMap;
export const rawProjects = projectsData;

export default { cards, categories };
