import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("footer-links")
class Footer extends LitElement {
  render() {
    return html`
      <footer>
        <img
          src="/bluesky-social-seeklogo.svg"
          class="bsky-logo"
          alt="bluesky logo"
        />
        <a
          href="https://bsky.app/profile/jacobandrews.bsky.social"
          target="blank"
          rel="noreferer"
          title="Jacob's Bluesky profile"
          >@jacobandrews</a
        >
        ||
        <a
          href="https://bsky.app/profile/julialepetit.bsky.social"
          target="blank"
          rel="noreferer"
          title="Julia's Bluesky profile"
          >@julialepetit</a
        >
        ||
        <a
          href="https://bsky.app/profile/secretsleepoversociety.com"
          target="blank"
          rel="noreferer"
          title="SSS' Bluesky profile"
          >@secretsleepoversociety.com</a
        >
      </footer>
    `;
  }

  static styles: CSSResultGroup | undefined = css`
    a > * {
      color: inherit;
      text-decoration: none;
      vertical-align: center;
      text-align: center;
    }
    a:visited {
      color: inherit;
      text-decoration: none;
    }
    a:link {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
      color: inherit;
      text-decoration: underline !important;
    }
    img {
      width: auto;
      height: 0.7rem;
      vertical-align: center;
      margin-right: 0.5rem;
    }
    .bsky-logo {
      fill-opacity: 1;
      fill: #070707;
      stroke: black;
    }
  `;
}
declare global {
  interface HTMLElementTagNameMap {
    "footer-links": Footer;
  }
}
