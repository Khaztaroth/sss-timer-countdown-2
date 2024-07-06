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
        const timeObj = this.time.split(' ')
        const timeArray = () => {
            let pairs = []
            for (let i = 0; i < timeObj.length; i += 2) {
                pairs.push([timeObj[i], timeObj[i + 1]])
            }
            return pairs
        }
        const timeSplit = timeArray().map((unit, index) => {return html`<span key=${index} class="inline-block">${unit[0]} ${unit[1]}</span> `})
        const date = this.date?.toLocal().toFormat("LLL dd', at' t ZZZZ")
        return html`
            <h2 class="dinBold trailingLine" id="a"> ${this.special? "Special stream in:": "Next stream is in:"}</h2>
            <div id="b">
            <h1 class="dinBold headerLine mb-0 pb-0">${timeSplit}</h1>
            <h2 class="dinRegular trailingLine mt-0 pt-0">on ${date} (local time)</h2>
            </div>
            <h2  class="streamLink" id="c"><a href="https://www.twitch.tv/secretsleepoversociety">twitch.tv/secretsleepoversociety</a></h2>
        `
        }
    static styles?: CSSResultGroup | undefined = css`
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
        #a {
            grid-area: 1 / 1 / 1 / 1;
        }
        #b {
            grid-area: 2 / 1 / 2 / 1;
        }
        #c {
            grid-area: 4 / 1 / 4 / 1;
        }
    /* @unocss-placeholder;  */
    `
}


declare global {
    interface HTMLElementTagNameMap {
        'stream-timer': StreamTimer
    }
}