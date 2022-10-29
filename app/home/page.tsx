import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import styles from "./styles.module.css";

import type { NextPage } from "next";

const TOTAL_DEMOS = 80;
const HOMEPAGE_DEMOS = [
  {
    title: "Filters",
  },
  {
    title: "Flappybalt",
  },
  {
    title: "FlxNape",
  },
  {
    title: "FlxSpine",
  },
  {
    title: "MinimalistTD",
  },
  {
    title: "Mode",
  },
];

const Home: NextPage = () => (
  <>
    {/* <Head>
      <title>Beta | Home | HaxeFlixel 2D Game Engine</title>
    </Head> */}

    <div className="container">
      <section className={`${styles["home-header"]} ${styles["home-section"]}`}>
        <Link href="documentation/about" className={styles["home-big-logo"]} title="About HaxeFlixel">
          <Image src="/images/haxeflixel.svg" width="200" height="200" alt="HaxeFlixel Logo" />
        </Link>
        <h1>HaxeFlixel</h1>

        <p className={styles["lead-line"]}>
          Create cross-platform games easier and free. <br />
          All with one codebase.
        </p>

        <p>
          <a className={`${styles["button-style"]} ${styles["home-button"]}`} href="/documentation/getting-started">
            Getting Started
          </a>
          <a className={`${styles["button-style"]} ${styles["home-button"]}`} href="https://github.com/HaxeFlixel">
            GitHub
          </a>
        </p>
      </section>

      <hr />

      <section className={`${styles["home-social"]} ${styles["home-section"]}`}>
        <iframe
          width="160px"
          scrolling="0"
          height="30px"
          frameBorder="0"
          src="https://ghbtns.com/github-btn.html?user=HaxeFlixel&amp;repo=flixel&amp;type=watch&amp;count=true&amp;size=large"
        ></iframe>

        <iframe
          width="160px"
          scrolling="0"
          height="30px"
          frameBorder="0"
          src="https://ghbtns.com/github-btn.html?user=HaxeFlixel&amp;repo=flixel&amp;type=fork&amp;count=true&amp;size=large"
        ></iframe>

        <br />

        <a
          href="https://twitter.com/haxeflixel"
          className="twitter-follow-button"
          data-show-count="true"
          data-lang="en"
          data-size="large"
        >
          Follow @haxeflixel
        </a>

        {/* <Script id="twitter-follow-badge" src="https://platform.twitter.com/widgets.js" /> */}

        <br />

        <a href="https://discordapp.com/invite/rqEBAgF">
          <Image
            src="https://img.shields.io/discord/162395145352904705.svg?logo=discord"
            alt="Discord"
            width="119"
            height="20"
          />
        </a>
        <a href="https://www.patreon.com/haxeflixel" style={{ marginLeft: "5px" }}>
          <Image src="https://img.shields.io/badge/donate-patreon-blue.svg" alt="Patreon" width="100" height="20" />
        </a>
      </section>

      <hr />

      <section className={styles["home-section"]}>
        <p className={styles["lead-line-large"]}>
          Cross-compile your games <a href="documentation/about">natively</a> to:
        </p>

        <div className={styles["platform-logos-home"]}>
          <Image width={80} height={80} src="/images/targets/windows-logo.svg" alt="Windows" title="Windows" />
          <Image width={80} height={85} src="/images/targets/linux-logo.svg" alt="Linux" title="Linux" />
          <Image width={80} height={85} src="/images/targets/apple-logo.svg" alt="Mac" title="Mac" />
          <Image width={80} height={85} src="/images/targets/android-logo.svg" alt="Android" title="Android" />
          <Image width={100} height={64} src="/images/targets/ios-logo.png" alt="iOS" title="iOS" />
          <Image width={80} height={80} src="/images/targets/flash-logo.svg" alt="Flash" title="Flash" />
          <Image width={85} height={85} src="/images/targets/html5-logo.svg" alt="HTML5" title="HTML5" />
        </div>
      </section>

      <hr />

      <section className={`${styles["demos-home"]} ${styles["home-section"]}`}>
        <p className={styles["lead-line-large"]}>
          Browse and learn from our <Link href="/demos">{TOTAL_DEMOS} demos</Link>:
        </p>
        {HOMEPAGE_DEMOS.map((demo, idx) => (
          <Link key={idx} href={`/demos/${demo.title}`}>
            <Image
              width={160}
              height={160}
              src={`/images/demos/${demo.title}.png`}
              alt={demo.title}
              title={demo.title}
            />
          </Link>
        ))}
      </section>

      <hr />

      <section className={styles["home-section-powered"]}>
        <p className={styles["lead-line-large"]}>Powered by open source cross-platform tech:</p>
        <br />
        <Image src="/images/haxe.svg" alt="Haxe Logo" height="120" width="120" />
        <span className={styles["plus-sign"]}>+</span>
        <Image src="/images/openfl.svg" alt="OpenFL Logo" height="120" width="120" />
        <span className={styles["plus-sign"]}>+</span>
        <Image src="/images/flixel.svg" alt="Haxe Logo" height="120" width="120" />
        <span className={styles["plus-sign"]}>=</span>
        <Image src="/images/haxeflixel.svg" alt="Haxe Logo" height="120" width="120" />
        <p />
        <br />
      </section>

      <hr />

      <section className={styles["home-sponsor-logos"]}>
        <p className={styles["lead-line-large"]}>Our platinum and gold sponsors:</p>

        <div className={styles["sponsor-logos-container"]}>
          <a className="platinum" href="http://www.defendersquest.com">
            <Image
              src="/images/sponsors/platinum/level-up-labs/lul_logo_circle.png"
              alt="level-up-labs"
              width="164"
              height="174"
            />
          </a>

          <a className={styles["platinum"]} href="http://bluebottlegames.com">
            <Image
              src="/images/sponsors/platinum/blue-bottle-games/bbgLogoColor256x256.png"
              alt="blue-bottle-games"
              width="164"
              height="174"
            />
          </a>

          <a className={styles["gold"]} href="http://www.kongregate.com">
            <Image
              src="/images/sponsors/gold/kongregate/kongregate_anthill.svg"
              alt="kongregate"
              width="164"
              height="174"
            />
          </a>

          <a className={styles["gold"]} href="http://www.solarpoweredgames.de">
            <Image
              src="/images/sponsors/gold/solar-powered/logo-solarpoweredgames-inverted-256.png"
              alt="solar-powered"
              width="164"
              height="174"
            />
          </a>
        </div>

        <br />

        <a
          className={`${styles["button-style"]} ${styles["home-button"]} ${styles["sponsors-button"]}`}
          href="/sponsors"
        >
          See all our Sponsors
        </a>
      </section>
    </div>
  </>
);

export default Home;
