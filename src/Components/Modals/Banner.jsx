const Banner = () => {
  return (
    <section id="home">
  <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_700px_500px_at_80%_50%,rgba(34,197,94,0.08)_0%,transparent_70%),radial-gradient(ellipse_500px_600px_at_10%_80%,rgba(34,197,94,0.05)_0%,transparent_60%)]"></div>
  <div className="absolute inset-0 z-0 
    bg-[linear-gradient(rgba(34,197,94,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.04)_1px,transparent_1px)] 
    bg-[size:60px_60px] 
    [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
  <div className="relative z-[1] max-w-[700px] text-left">
    <div className="inline-flex mt-[20px] items-center gap-2 bg-[var(--accent-dim)] border border-[var(--border)] rounded-full py-[6px] px-4 text-[0.82rem] text-[var(--accent)] font-medium mb-7 animate-[fadeUp_0.6s_ease_both]"><span> Available for opportunities</span></div>
    <h1 className="font-[var(--font-head)] text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] text-[var(--text)] animate-[fadeUp_0.6s_0.1s_ease_both]">Hi, I'm <span className="text-[var(--accent)]">Anjali</span>👋</h1>
    <p className="font-[var(--font-head)] text-[clamp(1.3rem,2.5vw,1.8rem)] font-semibold text-[var(--muted)] mt-2 mb-5 animate-[fadeUp_0.6s_0.2s_ease_both]">MERN Stack Developer</p>
    <p className="text-[1.05rem] text-[var(--muted)] max-w-[480px] mb-10 animate-[fadeUp_0.6s_0.3s_ease_both]">MERN Stack Intern with 6 months of hands-on experience building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, React-JS.  Strong understanding of DOM 
manipulation, API integration, and modern UI practices. I build clean and responsive web interfaces that users love to interact with.</p>
    <div className="flex flex-wrap gap-[14px] animate-[fadeUp_0.6s_0.4s_ease_both]">
      <a href="#projects" className="btn btn-primary">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
        View Projects
      </a>
      <a href="#" className="btn btn-outline" download="">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"></path></svg>
        Download Resume
      </a>
    </div>
  </div>
</section>
  )
}

export default Banner
