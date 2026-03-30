"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DownArrow from "./DownArrow";
import FigmaEmbedModal from "./FigmaEmbedModal";
import "./NeatAltStack.css";
import technologyIcons from "@/data/lazy_appz.json";
import SideModal from "./common/SideModal.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const statItemVar = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const statsStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const techItemVar = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35 } },
};

const mockupVariants = [
  {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  },
  {
    hidden: { opacity: 0, scale: 0.965 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
  },
  {
    hidden: { opacity: 0, rotate: -1.4, y: 10 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: { duration: 0.6 } },
  },
];

/**
 * Separate modal-only stack renderer
 * Shows the related preview + details cards for the clicked preview image
 */
const SideModalNeatAltStack = ({
  pair,
  multipleMockupWidth = 100,
  isMobile = false,
}) => {
  if (!pair || pair.length < 2) return null;

  const [previewCard, detailsCard] = pair;

  const techList =
    technologyIcons.find((group) => group[detailsCard.iconKey])?.[
      detailsCard.iconKey
    ] || [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {/* Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
        }}
      >
        <div
          style={{
            padding: "1rem 1rem 0 1rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              background: previewCard.statusColor || "#111",
              color: "#fff",
            }}
          >
            {previewCard.statusText}
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "1.25rem",
            padding: "1rem",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                margin: "0 0 0.5rem",
                fontSize: "1.6rem",
                color: "#222",
              }}
            >
              {previewCard.title}
            </h2>

            {previewCard.subtitle && (
              <h4
                style={{
                  margin: "0 0 0.75rem",
                  color: "#7B776E",
                  fontWeight: 600,
                }}
              >
                {previewCard.subtitle}
              </h4>
            )}

            {previewCard.description && (
              <p style={{ color: "#555", lineHeight: 1.7 }}>
                {previewCard.description}
              </p>
            )}

            {previewCard.details && (
              <p style={{ color: "#666", lineHeight: 1.7 }}>
                {previewCard.details}
              </p>
            )}

            {previewCard.githubLink && (
              <a
                href={previewCard.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "#111",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                View GitHub →
              </a>
            )}
          </div>

          <div>
            <Image
              src={previewCard.image}
              alt={previewCard.title}
              width={700}
              height={500}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                objectFit: "cover",
                border: "1px solid #eee",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Details Card */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        style={{
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #eee",
          padding: "1.25rem",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.35rem 0.7rem",
              borderRadius: "999px",
              fontSize: "0.8rem",
              fontWeight: 600,
              background: detailsCard.statusColor || "#222",
              color: "#fff",
            }}
          >
            {detailsCard.statusText}
          </span>
        </div>

        {/* Metrics */}
        {detailsCard.stats?.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.25rem",
                color: "#222",
              }}
            >
              Key Metrics
            </h3>

            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
              }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {detailsCard.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statItemVar}
                  style={{
                    background: "#f9fafb",
                    border: "1px solid #ececec",
                    borderRadius: "16px",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "700",
                      color: "#111",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      marginTop: "0.25rem",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Tech */}
        {techList.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.25rem",
                color: "#222",
              }}
            >
              Technologies
            </h3>

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
              }}
              variants={statsStagger}
              initial="hidden"
              animate="visible"
            >
              {techList.map((tech) => (
                <motion.a
                  key={tech.id}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={techItemVar}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    textDecoration: "none",
                    color: tech.color,
                    fontWeight: 500,
                    padding: "0.75rem 1rem",
                    borderRadius: "14px",
                    background: "#fafafa",
                    border: "1px solid #eee",
                  }}
                >
                  {tech.path && (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={tech.path} />
                    </svg>
                  )}
                  {tech.name && <span>{tech.name}</span>}
                </motion.a>
              ))}
            </motion.div>
          </section>
        )}

        {/* Mockups */}
        {detailsCard.mockupImages?.length > 0 && (
          <section style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                marginBottom: "1rem",
                fontSize: "1.25rem",
                color: "#222",
              }}
            >
              Interface Mockups
            </h3>

            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1rem",
              }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {detailsCard.mockupImages.map((mockup, idx) => {
                const variant = mockupVariants[idx % mockupVariants.length];

                return (
                  <motion.div
                    key={idx}
                    variants={variant}
                    whileHover={{ y: -4 }}
                    style={{
                      background: "#fafafa",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid #eee",
                    }}
                  >
                    <Image
                      src={mockup.src}
                      alt={mockup.alt}
                      width={500}
                      height={350}
                      style={{
                        width: `${multipleMockupWidth}%`,
                        height: "auto",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        padding: "0.9rem 1rem",
                        fontSize: "0.9rem",
                        color: "#555",
                        fontWeight: 500,
                      }}
                    >
                      {mockup.caption}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </section>
        )}

        {/* CTA */}
        {(detailsCard.link || detailsCard.button) && (
          <section style={{ textAlign: "center", marginTop: "1rem" }}>
            {detailsCard.link && (
              <a
                href={detailsCard.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.9rem 1.4rem",
                  borderRadius: "999px",
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Visit Live Site
              </a>
            )}

            {detailsCard.button && (
              <button
                type="button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.9rem 1.4rem",
                  borderRadius: "999px",
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {detailsCard.buttonText || "Learn More"}
              </button>
            )}
          </section>
        )}
      </motion.div>
    </div>
  );
};

const StackPair = ({
  pair,
  pairIndex,
  multipleMockupWidth,
  stickyStartPosition,
}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  const contentRefs = useRef([]);
  const [visibleContents, setVisibleContents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isExtraLg, setIsExtraLg] = useState(false);

  // New modal state for clicked preview card
  const [selectedPair, setSelectedPair] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const [previewCard, detailsCard] = pair;

  useEffect(() => {
    const checkResponsive = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsExtraLg(window.innerWidth >= 1200);
    };

    checkResponsive();
    window.addEventListener("resize", checkResponsive);

    return () => window.removeEventListener("resize", checkResponsive);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const items = itemsRef.current;
    let scrollingFn = false;
    let scrolling = false;
    let marginY, elementHeight, cardTop, cardHeight, windowHeight;
    let resizeTimeout;

    const setStackCards = () => {
      marginY =
        parseInt(
          getComputedStyle(container).getPropertyValue("--stack-cards-gap"),
          10,
        ) || 50;

      elementHeight = container.offsetHeight;

      const first = items[0];
      if (!first) return;

      const cardStyle = getComputedStyle(first);
      cardTop = stickyStartPosition;
      cardHeight = Math.floor(parseFloat(cardStyle.getPropertyValue("height")));
      windowHeight = window.innerHeight;

      container.style.paddingBottom = `${marginY * (items.length - 1)}px`;

      items.forEach((item, i) => {
        if (!item) return;
        item.style.top = `${stickyStartPosition}px`;
        item.style.transform = `translateY(${marginY * i}px)`;
      });
    };

    const animateStackCards = () => {
      if (!marginY) {
        scrolling = false;
        return;
      }

      const top = container.getBoundingClientRect().top;

      if (
        cardTop -
          top +
          windowHeight -
          elementHeight -
          cardHeight +
          marginY +
          marginY * items.length >
        0
      ) {
        scrolling = false;
        return;
      }

      items.forEach((item, i) => {
        if (!item) return;

        const scrollingPos = cardTop - top - i * (cardHeight + marginY);

        if (scrollingPos > 0) {
          const scaling =
            i === items.length - 1
              ? 1
              : (cardHeight - scrollingPos * 0.05) / cardHeight;

          item.style.transform = `translateY(${marginY * i}px) scale(${scaling})`;
        } else {
          item.style.transform = `translateY(${marginY * i}px)`;
        }
      });

      scrolling = false;
    };

    const stackCardsScrolling = () => {
      if (scrolling) return;
      scrolling = true;
      window.requestAnimationFrame(animateStackCards);
    };

    const stackCardsInitEvent = () => {
      scrollingFn = stackCardsScrolling;
      window.addEventListener("scroll", scrollingFn);
    };

    const stackCardsCallback = (entries) => {
      if (entries[0].isIntersecting) {
        if (scrollingFn) return;
        stackCardsInitEvent();
      } else {
        if (!scrollingFn) return;
        window.removeEventListener("scroll", scrollingFn);
        scrollingFn = false;
      }
    };

    const observer = new IntersectionObserver(stackCardsCallback, {
      threshold: [0, 1],
    });

    observer.observe(container);

    const resizeHandler = () => {
      setStackCards();
      animateStackCards();
    };

    container.addEventListener("resize-stack-cards", resizeHandler);

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        container.dispatchEvent(new CustomEvent("resize-stack-cards"));
      }, 300);
    };

    window.addEventListener("resize", handleResize);

    setStackCards();

    return () => {
      observer.disconnect();
      container.removeEventListener("resize-stack-cards", resizeHandler);
      window.removeEventListener("resize", handleResize);
      if (scrollingFn) window.removeEventListener("scroll", scrollingFn);
    };
  }, [stickyStartPosition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = parseInt(entry.target.dataset.index, 10);
          setVisibleContents((prev) =>
            prev.includes(index) ? prev : [...prev, index],
          );
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = (index) => visibleContents.includes(index);

  const handlePreviewImageClick = () => {
    setSelectedPair(pair);
    setImageModalOpen(true);
  };

  return (
    <>
      <div
        className="stack-cards js-stack-cards"
        ref={containerRef}
        style={{ marginBottom: "8rem" }}
      >
        {/* Preview Card */}
        <div
          data-theme="default"
          className="stack-cards__item bg radius-lg shadow-md js-stack-cards__item preview-card"
          ref={(el) => (itemsRef.current[0] = el)}
          style={{
            top: `${stickyStartPosition}px`,
            boxShadow: "0 8px 15px rgba(0,0,0,0.6)",
          }}
        >
          <div className={`grid ${pairIndex % 2 === 1 ? "reverse-grid" : ""}`}>
            <div className="col-6 flex items-center preview-card__content-col">
              <div className="text-component padding-md preview-card__text">
                <span
                  className="live-badge preview-card__badge left"
                  style={{
                    "--badge-color": previewCard.statusColor,
                  }}
                >
                  {previewCard.statusText}
                </span>

                <h2>{previewCard.title}</h2>
                <h4 style={{ color: "#7B776E" }}>{previewCard.subtitle}</h4>
                <p>{previewCard.description}</p>
                <p>{previewCard.details}</p>

                {previewCard.githubLink && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1rem",
                      marginTop: "20px",
                    }}
                  >
                    <a
                      href={previewCard.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width={isMobile ? 25 : 28}
                        height={isMobile ? 25 : 28}
                        viewBox="0 0 24 24"
                        fill="#7B776E"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div
              className="col-6 card-gucci-bg"
              style={{
                display: "flex",
                overflow: "visible",
                alignItems: "center",
              }}
            >
              <div
                onClick={handlePreviewImageClick}
                style={{ cursor: "pointer" }}
              >
                <Image
                  className="card-image block width-100% height-100% object-cover"
                  src={previewCard.image}
                  alt={previewCard.title}
                  width={600}
                  height={400}
                  style={{
                    transform:
                      previewCard.imgTransform ||
                      (isExtraLg
                        ? "rotate(3.5deg) scale(.9)"
                        : "rotate(3.5deg) scale(.8)"),
                    transition: "transform 0.45s ease",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Details Card */}
        <div
          data-theme="secondary"
          className="stack-cards__item-large bg radius-lg shadow-lg js-stack-cards__item"
          ref={(el) => (itemsRef.current[1] = el)}
          style={{
            top: `${stickyStartPosition}px`,
            paddingBottom: ".1em",
            "--stack-cards-gap": "-2rem",
          }}
        >
          <div className="info-rich-layout">
            <span
              className="live-badge left"
              style={{
                top: "0",
                "--badge-color": detailsCard.statusColor,
              }}
            >
              {detailsCard.statusText}
            </span>

            <section id={`stats-section-${detailsCard.cardId || pairIndex}`}>
              <motion.div
                ref={(el) => (contentRefs.current[0] = el)}
                data-index={0}
                className={`content-section ${isVisible(0) ? "visible" : ""}`}
              >
                <h2
                  className="h2-brush"
                  style={{ color: "#333", marginBottom: "20px" }}
                >
                  Key Metrics
                </h2>

                <motion.div
                  className="stats-grid"
                  variants={staggerContainer}
                  initial="hidden"
                  animate={isVisible(0) ? "visible" : "hidden"}
                >
                  {detailsCard.stats?.map((stat, statIndex) => (
                    <motion.div
                      key={statIndex}
                      className="stat-item"
                      variants={statItemVar}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: isMobile ? "20px" : "5em",
                    marginTop: isMobile ? "25px" : "50px",
                  }}
                  variants={statsStagger}
                  initial="hidden"
                  animate={isVisible(0) ? "visible" : "hidden"}
                >
                  {(
                    technologyIcons.find(
                      (group) => group[detailsCard.iconKey],
                    )?.[detailsCard.iconKey] || []
                  ).map((tech) => (
                    <motion.a
                      key={tech.id}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={techItemVar}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        textDecoration: "none",
                        color: tech.color,
                        fontSize: isMobile ? "1rem" : "1.1rem",
                        fontWeight: "500",
                        transition: "all 0.3s ease",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(e) => {
                        const link = e.currentTarget;
                        link.style.transform = "scale(1.15)";
                        link.style.color = tech.hoverColor;
                      }}
                      onMouseLeave={(e) => {
                        const link = e.currentTarget;
                        link.style.transform = "scale(1)";
                        link.style.color = tech.color;
                      }}
                    >
                      {tech.path && (
                        <svg
                          width={isMobile ? "2em" : "3em"}
                          height={isMobile ? "2em" : "3em"}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d={tech.path} />
                        </svg>
                      )}
                      {tech.name && <span>{tech.name}</span>}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </section>
          </div>

          <section id={`mockup-section-${detailsCard.cardId || pairIndex}`}>
            <motion.div
              ref={(el) => (contentRefs.current[1] = el)}
              data-index={1}
              className={`content-section ${isVisible(1) ? "visible" : " "} mockups`}
              style={{
                width: "100%",
                padding: isMobile ? "30px" : "50px",
                marginTop: "-25px",
              }}
            >
              <motion.h2
                className="h2-brush"
                style={{ color: "#333", marginBottom: "10px" }}
                initial="hidden"
                animate={isVisible(1) ? "visible" : "hidden"}
                variants={fadeUp}
              >
                Interface Mockups
              </motion.h2>

              <motion.div
                className="info-images-grid"
                initial="hidden"
                animate={isVisible(1) ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                {detailsCard.mockupImages?.map((mockup, idx) => {
                  const v = mockupVariants[idx % mockupVariants.length];

                  return (
                    <motion.div
                      key={idx}
                      className="info-image-item"
                      variants={v}
                      whileHover={{ y: -4 }}
                    >
                      <Image
                        src={mockup.src}
                        alt={mockup.alt}
                        width={400}
                        height={300}
                        style={{
                          width: `${multipleMockupWidth}%`,
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        className="info-image-caption"
                        data-badge="PREVIEW DETAILS"
                      >
                        {mockup.caption}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </section>

          <section id={`link-section-${detailsCard.cardId || pairIndex}`}>
            {detailsCard.link && (
              <motion.div
                ref={(el) => (contentRefs.current[2] = el)}
                data-index={2}
                className={`content-section info-content-section info-content-last-section ${
                  isVisible(2) ? "visible" : ""
                }`}
                style={{
                  textAlign: "center",
                  backgroundColor: "transparent",
                  paddingTop: "3em",
                  borderBottom: "4px solid transparent",
                }}
                initial="hidden"
                animate={isVisible(2) ? "visible" : "hidden"}
                variants={fadeUp}
              >
                <motion.a
                  href={detailsCard.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit Live Site
                </motion.a>
              </motion.div>
            )}

            {detailsCard.button && (
              <motion.div
                ref={(el) => (contentRefs.current[2] = el)}
                data-index={2}
                className={`content-section info-content-section info-content-last-section ${
                  isVisible(2) ? "visible" : ""
                }`}
                style={{
                  textAlign: "center",
                  backgroundColor: "transparent",
                  paddingTop: "3em",
                  borderBottom: "4px solid transparent",
                }}
                initial="hidden"
                animate={isVisible(2) ? "visible" : "hidden"}
                variants={fadeUp}
              >
                <motion.button
                  className="cta-button"
                  onClick={() => setOpenModal(true)}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {detailsCard.buttonText || "Learn More"}
                </motion.button>

                <FigmaEmbedModal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                />
              </motion.div>
            )}
          </section>

          <div style={{ padding: "30px" }}>
            <DownArrow color="red" space="0" />
          </div>
        </div>
      </div>

      {/* Side modal with separate modal stack */}
      <SideModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        title={selectedPair?.[0]?.title || "Project Preview"}
      >
        <SideModalNeatAltStack
          pair={selectedPair}
          multipleMockupWidth={100}
          isMobile={isMobile}
        />
      </SideModal>
    </>
  );
};

const NeatAltStack = ({
  multipleMockupWidth = 100,
  cards = [],
  stickyStartPosition = 100,
}) => {
  return (
    <>
      {cards.map((pair, pairIndex) => (
        <StackPair
          key={pairIndex}
          pair={pair}
          pairIndex={pairIndex}
          multipleMockupWidth={multipleMockupWidth}
          stickyStartPosition={stickyStartPosition}
        />
      ))}
    </>
  );
};

export default NeatAltStack;
