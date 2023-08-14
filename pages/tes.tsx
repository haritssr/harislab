import CurrentStatus from "@/components/CurrentStatus";
import LayoutGlobalNavigation from "@/components/LayoutGlobalNavigation";

export default function Tes() {
  return (
    <LayoutGlobalNavigation
      browserTitle="Tes"
      description="Tes"
      globalNavigationTitle="Tes"
    >
      <CurrentStatus currentStatus="Ideation" />
    </LayoutGlobalNavigation>
  );
}
