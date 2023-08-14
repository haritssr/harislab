import CurrentStatus from "@/components/CurrentStatus";
import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";

export default function Bimbel() {
  return (
    <LayoutGlobalNavigation
      browserTitle="Bimbel"
      description="Bimbel"
      globalNavigationTitle="Bimbel"
    >
      <CurrentStatus currentStatus="Ideation" />
    </LayoutGlobalNavigation>
  );
}
