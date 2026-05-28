import { GiHamburgerMenu } from "react-icons/gi";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section id="home">
      <div className=" text-left">
        <div className="inline-flex my-7  bg-[var(--accent-dim)] border-[2px] border-[var(--border)] rounded-full py-[6px] px-4 text-[0.82rem] text-[var(--accent)] ">
          <span> Available for opportunities</span>
        </div>
        <h1 className=" text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] text-[var(--text)] ">
          Hi, I'm <span className="text-[var(--accent)]">Anjali</span>👋
        </h1>
        <p className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-[var(--muted)] mt-2 mb-5 ">
          Frontend Web Developer
        </p>
        <p className="text-[1.05rem] text-[var(--muted)] max-w-[480px] mb-10 ]">
          Frontend web Intern with 6 months of hands-on experience building
          responsive and user-friendly web applications. Proficient in HTML,
          CSS, JavaScript, React-JS. Strong understanding of DOM manipulation,
          API integration, and modern UI practices. I build clean and responsive
          web interfaces that users love to interact with.
        </p>
        <div className="flex flex-wrap gap-[14px] animate-[fadeUp_0.6s_0.4s_ease_both]">
          <a href="#projects" className="btn btn-primary">
            <GiHamburgerMenu /> View Projects
          </a>
          <a
            href="/Anjali-Frontend-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            {" "}
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
