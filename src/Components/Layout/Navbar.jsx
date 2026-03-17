const Navbar = () => {
  return (
    <nav id="navbar" className= "sticky top-0 z-[100] flex items-center justify-between px-[6vw] py-[18px] bg-[rgba(15,23,42,0.85)] border-b border-[var(--border)] transition-shadow duration-300">
        <a href="#home" className="font-[var(--font-head)] text-[1.35rem] font-extrabold text-[var(--accent)] tracking-[-0.5px] no-underline">Anjali</a>
        <ul className="hidden lg:flex gap-8 list-none">
            <li><a href="#home" style={{color: "var(--accent)"}}>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0 p-1" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </nav>
  )
}

export default Navbar
