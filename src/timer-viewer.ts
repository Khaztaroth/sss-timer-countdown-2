import { Task } from "@lit/task";
import { css, CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { DateTime, Duration } from 'luxon'
import { Stream, Days, StreamTimer, StreamInfo} from "./timing/types";
import { useFormatter } from "./timing/formatter";
import { getCurrentTime } from "./timing/timer";
import { useActiveDays, useGameName, useLive, useTitle } from "./external/streamInfo";

import './blocks/liveDisplay'
import './blocks/timerDisplay'
import './blocks/vacationDisplay'
import './blocks/footer'

async function parseDays(): Promise<Days> {
    const days = await useActiveDays()
    const daysJson: Days = JSON.parse(days)

    return daysJson
};

const days = async () => await parseDays();

function loadingMessage(): string {
    var messages = [
        'Asking Julia...',
        'Confirming with Joy...',
        '*Checks notes*',
        'Waiting for Olive...',
        'Asking Jacob...',
        'Trying to remember...',
        "Gathering Yams...",
        "T posing...",
        'Waiting for Clara to get off the phone...',
        'Summoning braincells...',
    ];

    var Number = Math.floor(Math.random()*messages.length);

    return messages[Number]
}

@customElement('timer-viewer')
export class TimerViewer extends LitElement {

    _updateTimeTask: Task
    _fetchStreamInfo: Task
    updateInterval: number | undefined
    streamTimer: StreamTimer
    streamInfo: StreamInfo
    stream: Stream
    isLoading: boolean
    days: Days = {
        wed: true,
        sun: true,
        nextWed: true,
        special: '',
        vacation: '',
    }

    connectedCallback(): void {
        super.connectedCallback();
        const getDays = async () => {this.days = await parseDays()}
        getDays();
        this._fetchStreamInfo.run();
        this.updateInterval = window.setInterval(() => this._updateTimeTask.run(), 1000)

        window.setTimeout(() => {
            this.isLoading = false
        }, 1000)
    }

     constructor() {
        super();
        this.isLoading = true
        this.updateInterval = undefined;
        this.streamTimer = {
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
        this.streamInfo = {
            title: '',
            game: '',
        }
        this._updateTimeTask = new Task (this, {
            task: async() => {
            this.streamTimer = getCurrentTime(this.days)
            this.stream.time = useFormatter(this.streamTimer.time)
            this.stream.date = this.streamTimer.date
            this.stream.isSpecial = this.streamTimer.isSpecial
            this.stream.isVacation = this.streamTimer.isVacation
        }
        });
        this._fetchStreamInfo = new Task (this, {
            task: async () => {
                this.stream.isLive = await useLive()
                this.streamInfo.title = await useTitle()
                this.streamInfo.game = await useGameName()
            }
        });
    }

   
    disconnectedCallback(): void {
        super.disconnectedCallback();
        if(this.updateInterval !== undefined) {
            clearInterval(this.updateInterval)
        }
    }

    private classes = {
        bg_img: "bgBlock bgShadow",
        main_element: "grid grid-rows-[repeat(2,min-content)] size-full relative",
        footer: "fixed w-full -left-[1px] bottom-2 bg-accentGold link footer",
    }

    render() {
        if (this.isLoading) {
            return html `
                <div id="bg_img" class=${this.classes.bg_img}>
                        <h1 class="dinBold headerLine">${loadingMessage()}</h1>
                </div>
                <footer-links class=${this.classes.footer}></footer-links>
            `
        }
        if (this.stream.isLive) {
            return html `
            <div id="bg_img" class=${this.classes.bg_img}>
                    <is-live title=${this.streamInfo.title} game=${this.streamInfo.game}></is-live>
            </div>
            <footer-links class=${this.classes.footer} ></footer-links>

            `
        }
        if (this.stream.isSpecial) {
            return html`
                <div id="bg_img" class=${this.classes.bg_img}>
                        <stream-timer ?special=${true} time=${this.stream.time} .date=${this.stream.date}></stream-timer>
                </div>
                <footer-links class=${this.classes.footer}></footer-links>
            `
        }
        if (this.stream.isVacation) {
            return html`
                <div id="bg_img" class=${this.classes.bg_img}>
                        <vacation-timer time=${this.stream.time} .date=${this.stream.date} class=${this.classes.main_element}></vacation-timer>
                </div>
                <footer-links class=${this.classes.footer}></footer-links>
            `
        }
        return html `
                <div id="bg_img" class=${this.classes.bg_img}>
                    <stream-timer time=${this.stream.time} .date=${this.stream.date} class=${this.classes.main_element}></stream-timer>
                </div>
                <footer-links class=${this.classes.footer}></footer-links>
        `
    }
    
    static styles?: CSSResultGroup | undefined = css` 
        #bg_img {
            background-image: url('/sss_logo.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
        }
        @media (prefers-color-scheme: light) {
        .footer {
            color: black;
        }
        #bg_img::before {
            background-color: rgb(255, 255, 255);
        }}
        @media (prefers-color-scheme: dark) {
        .footer {
            color: black
        }
        #bg_img:before {
            background-color: rgb(53, 53, 53);
        }}
        /* @unocss-placeholder; */
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'timer-viewer': TimerViewer
    }
}