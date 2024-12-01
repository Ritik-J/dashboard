import Dashboard from "@/components/Dashboard";
import SideNavbar from "@/components/SideNavbar";

const Page = () => {
  return (
    <div className="bg-[#F9F9F9] flex min-h-screen">
      <SideNavbar />
      <div className="flex-1 ml-0 md:ml-[246px] transition-all duration-300">
        <Dashboard />
      </div>
    </div>
  );
};

export default Page;
