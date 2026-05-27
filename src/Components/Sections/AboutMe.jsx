import { FaCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="reveal visible">
        <span className="section-label">Get to know me</span>
      </div>
      <div className="reveal reveal-delay-1 visible">
        <h2 className="section-title">About Me</h2>
        <div className="section-line"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <div className="reveal reveal-delay-2 visible">
          <div className="relative">
            <div
              className="w-full aspect-square max-w-[340px] rounded-[20px] bg-[var(--bg3)] flex text-[7rem] border-[5px] border-[var(--accent)]" >
              <img src="/coder.jpg" alt="" className="rounded-[20px]"/>
            </div>
            <div
              className="absolute bottom-[-10px] right-[-10px] bg-[var(--accent)] text-[#0a1a0a]
              rounded-[12px] px-[16px] py-[10px] font-bold text-[0.85rem]" >
              <FaCode />Open to Work
            </div>
          </div>
        </div>

        <div className="about-text reveal reveal-delay-3 visible">
          <p>  I'm a passionate
            <strong style={{ color: "var(--accent)", padding: "0 8px" }}>
              Frontend Developer 
            </strong>
            with 6 months of internship experience in building responsive web applications
            using React and JavaScript.
          </p>
          <p>
            I enjoy creating minimal, elegant UIs that prioritize user
            experience above all else. I believe great design is invisible — it
            just works.
          </p>
          <p>
            Currently interning at Cut Edge Technology where I'm part of the
            Frontend team, delivering real-world features that make a
            difference.
          </p>
          <div className="flex gap-8 mt-8 flex-wrap justify-center">
            <div className="fact">
              <span className="fact-num">6+</span>
              <span className="fact-label">Months Exp.</span>
            </div>
            <div className="fact">
              <span className="fact-num">3+</span>
              <span className="fact-label">Projects Built</span>
            </div>
            <div className="fact">
              <span className="fact-num">5+</span>
              <span className="fact-label">Tech Skills</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
