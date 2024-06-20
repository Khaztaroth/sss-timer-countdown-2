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
            <h1 class="dinBold headerLine"> ${this.special? "Special stream in": "Next stream is in"}</h1>
            <h2 class="dinRegular trailingLine">${this.time} <br> on ${date}</h2>
            <h2  class="link"><a href="https://www.twitch.tv/secretsleepoversociety">twitch.tv/secretsleepoversociety</a></h2>
        `
    }
    static styles?: CSSResultGroup | undefined = css` 
    /* @unocss-placeholder;  */
    `
}


declare global {
    interface HTMLElementTagNameMap {
        'stream-timer': StreamTimer
    }
}