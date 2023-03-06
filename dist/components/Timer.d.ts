export default class Timer {
    private startedAt;
    private callback;
    private delay;
    private timer;
    constructor(callback: () => void, delay: number);
    pause(): void;
    resume(): void;
    stop(): void;
}
