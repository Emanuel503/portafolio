import { useLanguage } from "../context/LanguageContext";
import JobCard from "./JobCard";

export default function JobsSection() {
  const { text } = useLanguage();

  return (
    <section className="pt-40 mx-10 lg:mx-20 xl:mx-64" id="jobs">
      <h1 className="text-colormind-text text-4xl font-bold text-center mb-10">
        {text.navbar.jobs}
      </h1>

      {text.jobs.map((job, index) => (
        <JobCard
          key={`job-${index}`}
          nombre={job.title}
          lugar={job.place}
          fecha={job.daterange}
          funciones={job.responsibilities}
        />
      ))}
    </section>
  );
}
