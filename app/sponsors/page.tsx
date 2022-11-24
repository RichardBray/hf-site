import Image from "next/image";

export default function Sponsors() {
  return (
    <div className="container container-main">
      <div className="col-md-12 sponsor-logos">
        <h1 className="title">Sponsors</h1>
        <p>
          Haxeflixel&apos;s official sponsors made significant contributions during our fundraising efforts. Read more
          about the community backers in the <a href="/blog/05-fundraiser/">fundraiser blog post</a>. Sponsors are
          ordered by their contribution amount, starting with the highest category Platinum.
        </p>

        <h3>Platinum</h3>
        <hr />

        <div className="sponsor-logos-container">
          <a href="http://www.defendersquest.com">
            <Image
              className="level-up-labs-logo"
              src="/images/sponsors/platinum/level-up-labs/lul_logo_full.png"
              alt="Level up labs"
              width="370"
              height="94"
            />
          </a>

          <a href="http://bluebottlegames.com">
            <Image
              src="/images/sponsors/platinum/blue-bottle-games/bbgLogoColor512x512.png"
              alt="Blue bottle games"
              width="216"
              height="216"
            />
          </a>
        </div>

        <h3>Gold</h3>
        <hr />

        <div className="sponsor-logos-container">
          <a href="http://www.kongregate.com">
            <Image
              src="/images/sponsors/gold/kongregate/kongregate_anthill.svg"
              alt="Kongregate"
              width="203"
              height="216"
            />
          </a>

          <a href="http://www.solarpoweredgames.de">
            <Image
              src="/images/sponsors/gold/solar-powered/logo-solarpoweredgames-inverted-256.png"
              alt="Solar Powered Games"
              width="216"
              height="216"
            />
          </a>
        </div>

        <h3>Silver</h3>
        <hr />

        <div className="sponsor-logos-container">
          <a className="silver" href="http://ludoko.com/">
            <Image src="/images/sponsors/silver/ludoko/logotype256.png" alt="Ludoko Studios" width="248" height="248" />
          </a>

          <a className="silver" href="http://lukehut.com">
            <Image src="/images/sponsors/silver/lukehut/lukehut-logo-256.png" alt="Lukehut" width="216" height="216" />
          </a>

          <a className="silver" href="http://www.txori.com">
            <Image src="/images/sponsors/silver/txori/txori.svg" alt="Txori" width="216" height="216" />
          </a>

          <a className="silver" href="http://www.aseprite.org/">
            <Image src="/images/sponsors/silver/aseprite/aseprite-logo.png" alt="Aseprite" width="234" height="105" />
          </a>
        </div>
      </div>
    </div>
  );
}
