import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { DateTime } from "luxon";

@customElement('vacation-timer')
export class VacationTimer extends LitElement {
    
    @property()
        time: string = ''
    @property({attribute: false})
        date?: DateTime
    @property({type: Boolean})
        special?: boolean

    

    render() {
        const date = this.date?.toFormat('EEEE, LLLL dd')
        return html`
                    <h1 class="dinBold headerLine"> Currently <span id='striken'>GONE</span></h1>
                    <h2 class="dinRegular trailingLine">We are hoping to be back <br> on ${date} at our usual time</h2>
                    <a href="https://www.twitch.tv/secretsleepoversociety">twitch.tv/secretsleepoversociety</a>
                `
    }

    static styles?: CSSResultGroup | undefined = css` 
        #striken {
            position: relative;
        }
        #striken::before{
            position: absolute;
            content: '';
            left: 0;
            top: 40%;
            right: 0;
            border-top: calc(1rem + 3vw) solid rgba(255, 255, 255, 0.99);
            -webkit-transform: rotate(-4deg);
            -moz-transform: rotate(-4deg);
            -ms-transform: rotate(-4deg);
            -o-transform: rotate(-4deg);
            transform: rotate(-4deg);
        }
        /* @unocss-placeholder; */
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'vacation-timer': VacationTimer
    }
}