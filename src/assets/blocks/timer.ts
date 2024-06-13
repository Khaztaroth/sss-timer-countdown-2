import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('stream-timer')
export class Timer extends LitElement {
    
    @property()
        time: string = ''
    @property()
        date: string = ''
    
   
    render() {
        return html`
            <h1>Next stream is in</h1>
            <h2>${this.time}</h2>
            <h3>on ${this.date} (local time)</h3>
        `
    }

    static styles?: CSSResultGroup | undefined = css`
        h1 {
            margin-bottom: 2rem;
            font-size: 8rem;
            text-align: center;
            align-items: center;   
        }
        h2 {
            margin-top: 0;
            margin-bottom: 0;
            font-size: 4rem;
            font-weight: 600;
            text-align: center;
        }
        h3 {
            margin-top: 0;
            margin-bottom: 0;
            font-weight: 600;
            font-size: 4rem;
            text-align: center;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'stream-timer': Timer
    }
}