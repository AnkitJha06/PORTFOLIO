import Navbar from "@/components/Navbar";

const sections = [
  { id: "about", title: "About" },
  { id: "tech-stacks", title: "Tech Stacks" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="flex min-h-screen scroll-mt-16 items-center justify-center"
          >
            <h2 className="text-4xl font-bold">{s.title}</h2>
          </section>
        ))}
      </main>
    </>
  );
}