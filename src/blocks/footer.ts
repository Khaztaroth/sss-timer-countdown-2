import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('footer-links')
    class Footer extends LitElement {

        render() {
            return html`
                <footer>
                    <a class="hideLink" href="https://x.com/floabcomic" target="blank" rel="noreferer" title="Jacob's twitter profile">@FloaBComic</a> || 
                    <a href="https://x.com/julialepetit" target="blank" rel="noreferer" title="Julia's twitter profile">@JuliaLepetit</a> || 
                    <a href="https://x.com/sss_stream" target="blank" rel="noreferer" title="SSS' twitter profile">@SSS_Stream</a> 
                </footer>
            `
        }
    }
declare global {
    interface HTMLElementTagNameMap {
        'footer-links': Footer
    }
}