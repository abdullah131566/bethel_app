import HomeLayout from "@/components/General/HomeLayout";
import Main from "@/components/Main"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <HomeLayout>
      <Header />
      <Main />
      <Footer />
    </HomeLayout>
  );
}
