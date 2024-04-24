import * as React from "react";

function SkillTag({ children }) {
  return (
    <button className="justify-center px-3.5 py-2 rounded border border-amber-400 border-solid bg-amber-400 bg-opacity-60">
      {children}
    </button>
  );
}

function SocialLink({ src, alt, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-5 mt-6 whitespace-nowrap leading-[143%]"
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="shrink-0 w-6 aspect-square"
      />
      <span className="flex-auto my-auto">{children}</span>
    </a>
  );
}

function PortfolioItem({ src, alt, title, onClick }) {
  return (
    <button
      className="flex flex-col grow items-center text-sm leading-6 text-gray-800 max-md:mt-5"
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="aspect-[1.47] w-[219px]"
      />
      <span className="mt-3.5">{title}</span>
    </button>
  );
}

function MyComponent() {
  const skills = [
    "Phyton",
    "Laravel",
    "Golang",
    "JavaScript",
    "PHP",
    "HTML",
    "C++",
    "Kotlin",
    "Swift",
  ];

  const socialLinks = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca670f548744f2c8779682374ed1b23ce5748e5e3629c575c37d5d198207106?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Email icon",
      text: "Louistommo@gmail.com",
      href: "mailto:Louistommo@gmail.com",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4880310e0b2412504941848d445487f28a1395c873c0f20f56a0376ee89eda5?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Twitter icon",
      text: "@Louist91",href: "https://twitter.com/Louist91",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/15921f8fd5dd1608d8196efb3b9059342289d9ad069eb658b3059b0abb430db8?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Instagram icon",
      text: "@Louistommo",
      href: "https://instagram.com/Louistommo",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/662bf6759927c7a3b7cc3e4df53b0f546d064ab4757f54dee7b5f90caaff140f?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "LinkedIn icon",
      text: "@Louistommo91",
      href: "https://www.linkedin.com/in/Louistommo91",
    },
  ];

  const portfolioItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccc50ff9575d21f522c3224dfce56ee4c33a044782df059b7e22da458d62b237?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Remainder app screenshot",
      title: "Remainder app",
      onClick: () => alert("Clicked on Remainder app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c42f6643219292c3e5a8003a6608f64e861595f27655b48410b325b868a98c4?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Social media app screenshot",
      title: "Social media app",
      onClick: () => alert("Clicked on Social media app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1629b253fce94ea5f1b214c29a1492d65a80d5b1a25012b3e4e8b67e5568f86?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Project management web screenshot",
      title: "Project management web",
      onClick: () => alert("Clicked on Project management web"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/120292a176ca32ff6f76f8467c1326817fe3d853484220c6459714d0bfcc6471?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Remainder app screenshot",
      title: "Remainder app",
      onClick: () => alert("Clicked on Remainder app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ca1a978ca0186c07008f1cb1db84731cec6968c6aa5977451d777cee0028898?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Social media app screenshot",
      title: "Social media app",
      onClick: () => alert("Clicked on Social media app"),
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/11d8de78f8a5507ffb88eab3b61591cf3b14f9a8c88f0684885c943c87f8efdb?apiKey=ff034d5512384628b4f5c1152f7ba035&",
      alt: "Project management web screenshot",
      title: "Project management web",
      onClick: () => alert("Clicked on Project management web"),
    },
  ];

  const handleHireClick = () => {
    alert("Hire button clicked");
  };

  return (
    <main className="self-center mt-16 w-full max-w-[1140px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-8 pt-8 pb-20 mx-auto w-full text-sm bg-white rounded-lg text-zinc-400 max-md:px-5 max-md:mt-8">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9641de0aaff7942494202c81f1ca917709ce92e14a2e4188491bb2fa5edd137?apiKey=ff034d5512384628b4f5c1152f7ba035&"
              alt="Profile picture of Louis Tomlinson"
              className="self-center max-w-full rounded-full aspect-square w-[150px]"
            />
            <h1 className="mt-8 text-2xl font-semibold text-gray-800 leading-[56.1px]">
              Louis Tomlinson
            </h1>
            <p className="mt-5 text-gray-800 leading-[171%]">Web Developer</p>
            <div className="flex gap-3 mt-5 leading-[143%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/add5c0d0154b054562dae1fd3fd280fca9c927697ff227dd783cce950f683151?apiKey=ff034d5512384628b4f5c1152f7ba035&"
                alt="Location icon"
                className="shrink-0 w-4 aspect-square"
              />
              <p className="flex-auto">Purwokerto, Jawa Tengah</p>
            </div>
            <p className="mt-5 leading-[143%]">Freelancer</p>
            <p className="mt-7 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum erat orci, mollis nec gravida sed, ornare quis urna.
              Curabitur eu lacus fringilla, vestibulum risus at.
            </p>
            <button
              className="justify-center items-center px-16 py-5 mt-11 text-base font-bold text-white whitespace-nowrap rounded bg-slate-500 max-md:px-5 max-md:mt-10"
              onClick={handleHireClick}
            >
              Hire
            </button>
            <h2 className="mt-10 text-2xl font-semibold leading-6 text-gray-800">
              Skill
            </h2>
            <div className="flex gap-2.5 mt-6 text-xs font-semibold leading-5 text-white whitespace-nowrap max-md:pr-5">
              {skills.slice(0, 3).map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <div className="flex gap-2.5 mt-5 text-xs font-semibold leading-5 text-white whitespace-nowrap max-md:pr-5">
              {skills.slice(3, 6).map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            <div className="flex gap-2.5 mt-5 text-xs font-semibold leading-5 text-white whitespace-nowrap max-md:pr-5">
              {skills.slice(6).map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
            {socialLinks.map(({ src, alt, text, href }) => (
              <SocialLink key={text} src={src} alt={alt} href={href}>
                {text}
              </SocialLink>
            ))}
          </div>
        </aside>
        <section className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-8 py-9 w-full bg-white rounded-lg max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <div className="flex gap-5 self-start text-2xl font-semibold leading-[56.1px]">
              <h2 className="flex-auto text-gray-800">Portofolio</h2>
              <h2 className="flex-auto text-zinc-400">Pengalaman kerja</h2>
            </div>
            <div className="mt-2 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {portfolioItems.slice(0, 3).map(({ src, alt, title, onClick }) => (
                  <div
                    key={title}
                    className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                  >
                    <PortfolioItem
                      src={src}
                      alt={alt}
                      title={title}
                      onClick={onClick}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {portfolioItems.slice(3).map(({ src, alt, title, onClick }) => (
                  <div
                    key={title}
                    className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
                  >
                    <PortfolioItem
                      src={src}
                      alt={alt}
                      title={title}
                      onClick={onClick}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MyComponent;