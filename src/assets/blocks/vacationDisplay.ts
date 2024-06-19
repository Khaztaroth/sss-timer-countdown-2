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
            <h1> Currently <span class='striken'>GONE</span></h1>
            <h3>We are hoping to be back <br> on ${date} at our usual time</h3>
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
        .striken {
            position: relative;
        }
        .striken::before{
            position: absolute;
            content: '';
            left: 0;
            top: 40%;
            right: 0;
            border-top: 4rem solid rgba(255, 255, 255, 0.99);
            -webkit-transform: rotate(-4deg);
            -moz-transform: rotate(-4deg);
            -ms-transform: rotate(-4deg);
            -o-transform: rotate(-4deg);
            transform: rotate(-4deg);
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'vacation-timer': VacationTimer
    }
}