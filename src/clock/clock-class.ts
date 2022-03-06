/**
 * Display the current time
 */
export class Clock {

    private time: string = "00:00:00";
    private clock: any;
    private div: HTMLElement; // the targeted div
    private hours: number;
    private minutes: number;
    private seconds: number;
    private mode: number;

    constructor() {
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.mode = 0;
    }

    /**
     * Retrieves the time
     * @return string, time
     */
    public getTime() {
        this.seconds++;
        if (this.seconds > 59) {
            this.minutes++;
            this.seconds = 0;
        }
        if (this.minutes > 59) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours > 23) {
            this.hours = 0;
        }
        return [this.hours, this.minutes, this.seconds]
            .map(current => current >= 10 ? current : "0" + current).join(":")
    }

    /**
     * Starts the clock
     */
    public start(): void {
        this.div.innerHTML = this.getTime();
        this.clock = setInterval(function () {
            this.div.innerHTML = this.getTime();
        }.bind(this), 1000);
    }

    /**
     * Binds the Clock to the div
     * @param elem
     */
    public bindToClock(elem: HTMLElement): void {
        this.div = elem;
        this.div.innerHTML = this.time;
    }

    /**
     * Change le mode
     * @param elem
     */
    public changeMode(elem: HTMLElement): void {
        this.mode++;
        if (this.mode === 3) {
            this.mode = 0;
        }
        this.displayModeInfo(elem);
    }

    /**
     * Binds
     * @param elem
     */
    public displayModeInfo(elem: HTMLElement): void {
        switch (this.mode) {
            case 1:
                elem.innerHTML = 'HOURS EDITABLE';
                break;
            case 2:
                elem.innerHTML = 'MINUTES EDITABLE';
                break;
            default:
                elem.innerHTML = '';
                break;
        }
    }

    /**
     * Increase on click
     */
    public increaseOnClick(): void {
        switch (this.mode) {
            case 1:
                this.addOneHour();
                break;
            case 2:
                this.addOneMinute();
                break;
            default:
                break;
        }
    }

    public addOneHour(): void {
        this.hours += 1;
    }

    public addOneMinute(): void {
        this.minutes += 1;
    }

    /**
     * Set time color to dark or white
     * @param time
     */
    public changeLight(time: HTMLElement): void {
        if (time.style.backgroundColor === 'black') {
            time.style.backgroundColor = 'white';
            time.style.color = 'black';
        } else {
            time.style.backgroundColor = 'black';
            time.style.color = 'white';
        }
    }
}