import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('is-live')
export class IsLive extends LitElement {
    render() {
        return html `
            <h1 class="dinBold headerLine">We are live!</h1>
        `
    }

    static styles?: CSSResultGroup | undefined = css` 
    /* @unocss-placeholder ; */
    `
};

declare global {
    interface HTMLElementTagNameMap {
        'is-live': IsLive;
    }
};