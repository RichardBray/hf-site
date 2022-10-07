import Image from "next/future/image";
import Script from "next/script";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className=" container">
          <div className="footer-social">
            <iframe
              width="120px"
              scrolling="0"
              height="20px"
              frameBorder="0"
              src="https://ghbtns.com/github-btn.html?user=HaxeFlixel&amp;repo=flixel&amp;type=watch&amp;count=true&amp;size=small"
            ></iframe>

            <a
              href="https://twitter.com/haxeflixel"
              className="twitter-follow-button"
              data-show-count="true"
              data-lang="en"
              data-size="small"
            >
              Follow @haxeflixel
            </a>
            <Script id="twitter-follow-badge" src="https://platform.twitter.com/widgets.js" />

            <a
              className="footer-patreon"
              href="https://www.patreon.com/haxeflixel"
              title="Support us on Patreon"
            >
              <Image
                src="/images/patreon-logo-small.svg"
                alt="Haxeflixel Patreon"
                title="Patreon"
                width="40"
                height="40"
              />
            </a>
          </div>

          <div className="footer-powered-by">
            <p>HaxeFlixel is powered by</p>
            <a href="http://haxe.org">
              <Image src="/images/haxe.svg" alt="Haxe" title="Haxe" width="40" height="40" />
            </a>
            +
            <a href="http://openfl.org">
              <Image
                className="openfl-footer-logo"
                src="/images/openfl.svg"
                alt="OpenFL"
                title="OpenFL"
                width="40"
                height="40"
              />
            </a>
            +
            <a href="http://flixel.org">
              <Image
                className="flixel-footer-logo"
                src="/images/flixel.svg"
                alt="Flixel"
                title="Flixel"
                width="40"
                height="40"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
