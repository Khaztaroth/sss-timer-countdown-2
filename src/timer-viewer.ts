import { Task } from "@lit/task";
import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { DateTime, Duration } from 'luxon'
import { getCurrentTime } from "./timing/timer";
import { useFormatter } from "./timing/formatter";

import './assets/blocks/live'
import './assets/blocks/timer'

const days = {
    wed: true,
    sun: true,
    nextWed: true,
}

export type StreamInfo = {
    day: string,
    time: Duration,
    date: DateTime,
}

export type Stream = {
    day: string,
    time: string,
    date: string,
    isLive: boolean,
}

@customElement('timer-viewer')
export class TimerViewer extends LitElement {

    _updateTimeTask: Task
    updateInterval: number | undefined
    streamInfo: StreamInfo
    stream: Stream
    isLoading: boolean


     constructor() {
        super();
        this.isLoading = true
        this.updateInterval = undefined;
        this.streamInfo = {
            day: '', 
            time: Duration.fromISO('P3Y') ,
            date: DateTime.fromISO('2077-12-30T12:00:00.000')
        };
        this.stream = {
            day: '',
            time: '',
            date: '',
            isLive: false,
        };
        this._updateTimeTask = new Task (this, {
            task: async () => {
                this.streamInfo = getCurrentTime(days)

            if (this.streamInfo.time.seconds < 0 && this.streamInfo.time.seconds > -7200) {
                this.stream.isLive = true
            }
            this.stream.day = this.streamInfo?.day
            this.stream.time = useFormatter(this.streamInfo.time)
            this.stream.date = this.streamInfo.date.toLocal().toFormat("LLL dd', at' t ZZZZ")

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
                        <stream-timer time=${this.stream.time} date=${this.stream.date}></stream-timer>
                    </div>
                </div>
        `
    }
    
    static styles?: CSSResultGroup | undefined = css`
        .bg_img {
            background-image: url('./public/sss_logo.png');
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