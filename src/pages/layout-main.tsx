import SideBar from "../core-components/sidebar";
import SideSchedule from "../core-components/sideSchedule";

export default function LayoutMain() {
  return (
    <div className="grid grid-rows-[30%_1fr] md:grid-cols-[30%_1fr] h-screen gap-2 relative">
      <SideBar />
      <SideSchedule />
    </div>
  );
}
