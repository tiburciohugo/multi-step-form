import PersonalInfo from "@/components/personalInfo";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="bg-blue-50 w-screen h-screen">
      <Navbar />
      <PersonalInfo />
    </main>
  );
}
