import CurrentStatus from "@/components/CurrentStatus";
import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";

export default function Analisis() {
  return (
    <LayoutGlobalNavigation
      browserTitle="Analisis"
      description="Analisis"
      globalNavigationTitle="Analisis"
    >
      <CurrentStatus currentStatus="Design" />
      <div className="mt-5 space-y-20">
        <iframe
          className="border w-full min-h-screen"
          width="800"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmhfH2JaaCDzRSL71XcSnUw%2FHaris-Lab%3Ftype%3Ddesign%26node-id%3D1679%253A1158%26mode%3Ddesign%26t%3DkV7csAtuiCFlybeO-1"
          allowFullScreen
        ></iframe>
      </div>
    </LayoutGlobalNavigation>
  );
}
