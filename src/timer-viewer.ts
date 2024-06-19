import { Task } from "@lit/task";
import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { DateTime, Duration } from 'luxon'
import { getCurrentTime } from "./timing/timer";
import { useFormatter } from "./timing/formatter";
import { StreamData, Stream, Days } from "./timing/types";

import './assets/blocks/liveDisplay'
import './assets/blocks/timerDisplay'
import './assets/blocks/vacationDisplay'

const days: Days = {
    "wed":false,
    "sun":false,
    "nextWed":false,
    "special":"2024-06-08T21:00:00.000-04:00",
    "vacation":"2024-06-30"
}

@customElement('timer-viewer')
export class TimerViewer extends LitElement {

    _updateTimeTask: Task
    updateInterval: number | undefined
    streamInfo: StreamData
    stream: Stream
    isLoading: boolean


     constructor() {
        super();
        this.isLoading = true
        this.updateInterval = undefined;
        this.streamInfo = {
            isSpecial: false,
            isVacation: false,
            time: Duration.fromISO('P3Y'),
            date: DateTime.fromISO('2077-12-30T12:00:00.000')
        };
        this.stream = {
            time: '',
            date: DateTime.fromISO('2077-12-30T12:00:00.000'),
            isSpecial: false,
            isVacation: false,
            isLive: false,
        };
        this._updateTimeTask = new Task (this, {
            task: async () => {
                this.streamInfo = getCurrentTime(days)

            if (this.streamInfo.time.seconds < 0 && this.streamInfo.time.seconds > -7200) {
                this.stream.isLive = true
            }
            this.stream.time = useFormatter(this.streamInfo.time)
            this.stream.date = this.streamInfo.date
            this.stream.isSpecial = this.streamInfo.isSpecial
            this.stream.isVacation = this.streamInfo.isVacation

            this.isLoading = false
        }
    })


    }

    connectedCallback(): void {
        super.connectedCallback();
        this.updateInterval = window.setInterval(() => this._updateTimeTask.run(), 1000)
    }
    
    disconnectedCallback(): void {
        super.disconnectedCallback();
        if(this.updateInterval !== undefined) {
            clearInterval(this.updateInterval)
        }
    }

    render() {
        if (this.isLoading) {
            return html `
                <div class="bg_img">
                    <div class="bg_color">
                        <p>Asking Julia...</p>
                    </div>
                </div>
            `
        }
        if (this.stream.isSpecial) {
            return html`
                <div class="bg_img">
                    <div class="bg_color">
                        <stream-timer ?special=${true} time=${this.stream.time} .date=${this.stream.date}></stream-timer>
                    </div>
                </div>
            `
        }
        if (this.stream.isVacation) {
            return html`
                <div class="bg_img">
                    <div class="bg_color">
                        <vacation-timer time=${this.stream.time} .date=${this.stream.date}></vacation-timer>
                    </div>
                </div>
            `
        }
        if (this.stream.isLive) {
            return html `
            <div class="bg_img">
                <is-live></is-live>
            </div>
            `
        }
        return html `
                <div class="bg_img">
                    <div class="bg_color">
                        <stream-timer time=${this.stream.time} .date=${this.stream.date}></stream-timer>
                    </div>
                </div>
        `
    }
    
    static styles?: CSSResultGroup | undefined = css`
        .bg_img {
            background-image: url('/sss_logo.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;

            height: 40vw;
        }
        .bg_color {
            height: 40vw;
            background-color: rgba(36, 36, 36, 0.85)
        }
        p {
            font-size: 5.3rem;
            text-align: center;
            align-items: center;   
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'timer-viewer': TimerViewer
    }
}