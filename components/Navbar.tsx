import Link from "next/link";
import Image from "next/future/image";

import hfHeaderImg from "$images/haxeflixel-header.png";

const css = { width: '169px', height: '30px' }

export default function Navbar() {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            data-target=".navbar-collapse"
            data-toggle="collapse"
            className="navbar-toggle"
            type="button"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link href="/">
            <a className="navbar-brand">
              <Image src={hfHeaderImg} style={css} alt="HaxeFlixel" />
            </a>
          </Link>
        </div>

        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="dropdown ">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Examples <span className="caret"></span>
              </a>
              <ul className="dropdown-menu inverse-dropdown">
                <li>
                  <a href="/demos">Demos</a>
                </li>
                <li>
                  <a href="https://snippets.haxeflixel.com/">Snippets</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/showcase">Showcase</a>
            </li>

            <li>
              <a href="/blog">Blog</a>
            </li>

            <li>
              <a href="/documentation">Docs</a>
            </li>

            <li>
              <a href="http://api.haxeflixel.com">API</a>
            </li>

            <li>
              <a href="https://github.com/HaxeFlixel/flixel/discussions">
                Forum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
