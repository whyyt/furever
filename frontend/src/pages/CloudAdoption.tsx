import { StandalonePageSection } from "../components/sections/StandalonePageSection";
import { standalonePages } from "../data/site";
import { useLocation } from "react-router-dom";

export default function CloudAdoption() {
  const { search } = useLocation();

  return (
    <StandalonePageSection
      src={`${standalonePages.cloudAdoption.src}${search}`}
      title={standalonePages.cloudAdoption.title}
    />
  );
}
