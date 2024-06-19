import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";


@customElement('is-live')
export class IsLive extends LitElement {
    render() {
        return html `
            <h1>We are live!</h1>
        `
    }

    static styles?: CSSResultGroup | undefined = css`
        h1 {
            display: flex;
            margin: auto;
            font-size: 2rem;
        }
    `
};

declare global {
    interface HTMLElementTagNameMap {
        'is-live': IsLive;
    }
};