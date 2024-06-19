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
                    <h1 class="text-center py-12 mb-2 center lt-sm:text-6xl sm:text-8xl xl:text-9xl"> Currently <span id='striken'>GONE</span></h1>
                    <h3 class="text-center text-bold lt-sm:text-5xl sm:text-5xl xl:text-8xl">We are hoping to be back <br> on ${date} at our usual time</h3>
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
        @unocss-placeholder;
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'vacation-timer': VacationTimer
    }
}