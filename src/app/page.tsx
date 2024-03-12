import PersonalInfo from "@/components/personalInfo";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-blue-50 lg:flex lg:items-center lg:justify-between lg:px-12">
      <div className="max-w-[928px] lg:mx-auto lg:flex lg:w-full lg:gap-10 lg:rounded-xl lg:bg-white lg:p-4">
        <div className="lg:h-full lg:w-full lg:flex-col lg:justify-between">
          <PersonalInfo />
        </div>
      </div>
    </main>
  );
}
