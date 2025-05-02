import { useState, useEffect, useCallback } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 0) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    
    const sections = sectionIds.map(id => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return {
          id,
          offsetTop: rect.top + window.pageYOffset,
          offsetBottom: rect.bottom + window.pageYOffset
        };
      }
      return { id, offsetTop: 0, offsetBottom: 0 };
    });

    // Find the current section
    const currentSection = sections.find(section => 
      section.offsetTop <= scrollPosition && 
      section.offsetBottom > scrollPosition
    );

    // Special case for when at the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      const lastSectionId = sectionIds[sectionIds.length - 1];
      setActiveSection(lastSectionId);
      return;
    }

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Call it initially to set the correct active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeSection;
};
