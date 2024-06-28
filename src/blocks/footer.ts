import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('footer-links')
    class Footer extends LitElement {

        render() {
            return html`
                <footer>
                    <a href="https://x.com/floabcomic" target="blank" rel="noreferer" title="Jacob's twitter profile">@FloaBComic</a> || 
                    <a href="https://x.com/julialepetit" target="blank" rel="noreferer" title="Julia's twitter profile">@JuliaLepetit</a> || 
                    <a href="https://x.com/sss_stream" target="blank" rel="noreferer" title="SSS' twitter profile">@SSS_Stream</a> 
                </footer>
            `
        }

        static styles: CSSResultGroup | undefined= css`
        a > * {
            color: inherit;
            text-decoration: none;
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
        `
    }
declare global {
    interface HTMLElementTagNameMap {
        'footer-links': Footer
    }
}