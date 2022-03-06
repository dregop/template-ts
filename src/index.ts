import './index.css';
import {Clock} from './clock/clock-class';

const clock = new Clock();
clock.bindToClock(document.getElementById("time"));
clock.start();

document.getElementById("mode").addEventListener('click', (() =>
    clock.changeMode(document.getElementById("display_active_mode"))));

document.getElementById("increase").addEventListener('click', (() =>
    clock.increaseOnClick()));

document.getElementById("light").addEventListener('click', (() =>
    clock.changeLight(document.getElementById("time"))));