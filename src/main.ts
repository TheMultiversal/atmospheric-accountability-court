const root = document.getElementById("app");

const heading = document.createElement("h1");
heading.innerText = "Atmospheric Accountability Court";

const hello = document.createElement("p");
hello.innerText = "Hello World — TypeScript setup is working.";

const sections = document.createElement("div");
sections.innerHTML = `
  <h2>Sections</h2>
  <ul>
    <li>Educational content</li>
    <li>Companies & Individuals</li>
    <li>Patents</li>
    <li>Technology</li>
    <li>Documents & Sources</li>
  </ul>
`;

root?.appendChild(heading);
root?.appendChild(hello);
root?.appendChild(sections);

console.log("Hello World — TypeScript project initialized.");