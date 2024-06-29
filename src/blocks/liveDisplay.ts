import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";


@customElement('is-live')
export class IsLive extends LitElement {

    @property() title = ''
    @property() game = ''

    render() {
        return html `
            <h1 class="dinBold headerLine">We are live!</h1>
            <h1 class="dinRegular trailingLine">${this.title}</h1>
            <h1 class="dinRegular trailingLine">Come watch us play ${this.game}</h1>
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