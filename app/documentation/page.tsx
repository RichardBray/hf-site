import Image from "next/image";

export default function Index() {
  return (
    <div className="container container-main">
      <h1 className="title">Documentation</h1>
      <iframe
        width="180px"
        scrolling="0"
        height="30px"
        frameBorder="0"
        className="githubBtn-tr-info"
        allowTransparency
        src="https://ghbtns.com/github-btn.html?user=haxeflixel&amp;repo=flixel-docs&amp;type=watch&amp;count=true&amp;size=large"
      />
      <p>
        The HaxeFlixel documentation is provided from the{" "}
        <a href="https://github.com/HaxeFlixel/flixel-docs">flixel-docs repository</a> and is open for contributions on
        GitHub that will be pushed here.
      </p>

      <hr />
      <a href="http://discover-haxeflixel.com/">
        <h2>
          <span className="glyphicon glyphicon-book" />
          Discover HaxeFlixel Book
        </h2>
        <Image width="216" height="254" src="/images/discover-haxeflixel.png" alt="Haxeflixel book" />
      </a>
    </div>
  );
}
