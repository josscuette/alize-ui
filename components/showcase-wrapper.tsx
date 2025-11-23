"use client";

import { useEffect, useState, useRef, ReactNode, useLayoutEffect } from "react";
import { cn } from "../lib/utils";
import { useIsMobile } from "../hooks/use-mobile";

interface ShowcaseWrapperProps {
  children: ReactNode;
}

export function ShowcaseWrapper({ children }: ShowcaseWrapperProps) {
  const [sections, setSections] = useState<Array<{ id: string; title: string }>>([]);
  const [headerTop, setHeaderTop] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const detectSections = () => {
    if (!containerRef.current) return;
    
    // Only detect sections with data-showcase-section attribute
    // Structure: <section data-showcase-section><div className="space-y-1"><h3>Title</h3></div></section>
    const sectionElements = containerRef.current.querySelectorAll("section[data-showcase-section]");
    
    const extractedSections = Array.from(sectionElements).map((section, index) => {
      // Get the first div child which should have className containing "space-y-1"
      const firstDiv = section.querySelector(":scope > div:first-child");
      if (!firstDiv) return null;
      
      // Get only the h3 with data-section-title attribute (the main section title)
      const h3 = firstDiv.querySelector(":scope > h3[data-section-title]");
      if (!h3) return null;
      
      // Make sure the h3 is directly in the section's first div (not nested in other components)
      // The h3 should be: section > div:first-child > h3[data-section-title]
      const h3Parent = h3.parentElement;
      if (h3Parent !== firstDiv) {
        return null;
      }
      
      const title = h3.textContent?.trim() || "";
      
      // Skip if no title found
      if (!title) return null;
      
      // Create a slug from the title
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const id = slug || `section-${index}`;
      // Add ID to the section
      section.id = id;
      return { id, title };
    }).filter((section): section is { id: string; title: string } => section !== null);
    
    // Remove duplicates based on id
    const uniqueSections = extractedSections.filter((section, index, self) =>
      index === self.findIndex((s) => s.id === section.id)
    );
    
    if (uniqueSections.length > 0) {
      setSections(uniqueSections);
    } else {
      setSections([]);
    }
  };

  useLayoutEffect(() => {
    // Try immediately
    detectSections();
    
    // Also try after a short delay to catch any async rendering
    const timeoutId = setTimeout(detectSections, 100);
    
    // Use MutationObserver to detect when sections are added
    if (containerRef.current) {
      const observer = new MutationObserver(() => {
        detectSections();
      });
      
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
      
      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
    
    return () => clearTimeout(timeoutId);
  }, [children]);

  // Calculate header position for sidebar alignment
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    
    const updateHeaderTop = () => {
      // Find the header element (usually the first header or the element containing the main title)
      const header = containerRef.current?.querySelector("header");
      if (header) {
        const rect = header.getBoundingClientRect();
        const scrollContainer = containerRef.current?.closest("main");
        if (scrollContainer) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const relativeTop = rect.top - containerRect.top + scrollContainer.scrollTop;
          setHeaderTop(relativeTop);
        } else {
          setHeaderTop(rect.top);
        }
      } else {
        // Fallback: use padding-top of the container (usually p-8 = 32px)
        setHeaderTop(32);
      }
    };

    updateHeaderTop();
    
    // Update on scroll and resize
    const scrollContainer = containerRef.current?.closest("main");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateHeaderTop);
      window.addEventListener("resize", updateHeaderTop);
      
      return () => {
        scrollContainer.removeEventListener("scroll", updateHeaderTop);
        window.removeEventListener("resize", updateHeaderTop);
      };
    }
  }, [children]);

  if (sections.length === 0) {
    return <div ref={containerRef}>{children}</div>;
  }

  return (
    <div className="flex gap-8 relative">
      <div ref={containerRef} className="flex-1 min-w-0">
        {children}
      </div>
      {sections.length > 0 && !isMobile && (
        <aside 
          className="hidden lg:block w-[200px] shrink-0 sticky h-fit pr-8"
          style={{ top: `${headerTop}px` }}
        >
          <nav className="space-y-1">
            <h4 className="text-xs font-normal text-muted-foreground uppercase tracking-wider mb-3">
              Sections
            </h4>
            {sections.map((section) => {
              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                const element = document.getElementById(section.id);
                if (!element) return;
                
                // Find the scrollable container (main element)
                const scrollContainer = containerRef.current?.closest("main");
                
                if (scrollContainer) {
                  // Calculate scroll position relative to the scroll container
                  const containerRect = scrollContainer.getBoundingClientRect();
                  const elementRect = element.getBoundingClientRect();
                  const currentScroll = scrollContainer.scrollTop;
                  const elementTopRelativeToContainer = elementRect.top - containerRect.top;
                  const targetScroll = currentScroll + elementTopRelativeToContainer - 80; // 80px offset
                  
                  scrollContainer.scrollTo({
                    top: Math.max(0, targetScroll),
                    behavior: "smooth"
                  });
                } else {
                  // Fallback: use scrollIntoView
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                
                // Update URL
                window.history.pushState(null, "", `#${section.id}`);
              };
              
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={handleClick}
                  className={cn(
                    "block w-full text-left py-1.5 px-2 -mx-2 text-sm rounded-md transition-colors",
                    "hover:bg-accent/50 hover:text-foreground",
                    "text-muted-foreground"
                  )}
                >
                  {section.title}
                </a>
              );
            })}
          </nav>
        </aside>
      )}
    </div>
  );
}

