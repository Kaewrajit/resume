import { Logo } from "./logo";
export function Header() {
  return (
    <header>
      <nav className="">
        <div className="flex flex-row justify-between space-x-24">
          <Logo />
          <div>About Me</div>
          <div>Resume</div>
          <div>Project</div>
          <div>Contact Me</div>
        </div>
      </nav>
    </header>
  );
}
