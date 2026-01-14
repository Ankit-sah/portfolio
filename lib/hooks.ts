import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const lastSectionRef = useRef<string>("");

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000 && lastSectionRef.current !== sectionName) {
      lastSectionRef.current = sectionName;
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
