import Header from "@/common/components/header";
import Footer from "./home/footer";
import Subjects from "./home/subjects";

async function getSubjects() {
  try {
    const subjectsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BE_API_SERVER}/subjects`
    );
    if (!subjectsResponse.ok) {
      return [];
    }
    return subjectsResponse.json();
  } catch {
    return [];
  }
}

export default async function Page() {
  const subjects = await getSubjects();

  return (
    <main>
      <Header />
      <Subjects subjects={subjects} />
      <Footer />
    </main>
  );
}
