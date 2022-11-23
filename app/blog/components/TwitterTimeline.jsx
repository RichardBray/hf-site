
import Script from 'next/script'

export default function TwitterTimeline() {
  return (
    <>
      <a className="twitter-timeline" href="https://twitter.com/HaxeFlixel?ref_src=twsrc%5Etfw">
        Tweets by HaxeFlixel
      </a>
      <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </>
  );
}
