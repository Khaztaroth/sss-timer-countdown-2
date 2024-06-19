import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DateTime } from "luxon";

@customElement('stream-timer')
export class StreamTimer extends LitElement {
    
    @property()
        time: string = ''
    @property({attribute: false})
        date?: DateTime
    @property({type: Boolean})
        special?: boolean
    
    render() {
        const date = this.date?.toFormat("LLL dd', at' t ZZZZ")
        return html`
            <h1> ${this.special? "Special stream in": "Next stream is in"}</h1>
            <h2>${this.time}</h2>
            <h3>on ${date}</h3>
        `
    }

    static styles?: CSSResultGroup | undefined = css`
        h1 {
            margin-bottom: 2rem;
            font-family: 'D-Din-Bold';
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
        'stream-timer': StreamTimer
    }
}