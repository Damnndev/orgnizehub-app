import { Footer } from "./_components/footer";
import { NavBar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <main className="bg-white">{children}</main>
    </div>
  );
};
export default MarketingLayout;
