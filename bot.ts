
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace bot {

    let leftMotor = AnalogPin.P1;
    let rightMotor = AnalogPin.P2;
    let weaponMotor = AnalogPin.P0;

    export enum BotDirection {
        //% block="forward"
        Forward = 1,
        //% block="backward"
        Backward,
        //% block="left"
        Left,
        //% block="right"
        Right
    }

    /**
     * Drive the robot
     * @param direction direction to drive: BotDirection.Forward
     * @param duration Duriation in ms, 0 means until stopped: 0
     */
    //% block
    export function drive(direction: BotDirection, duration: number): void {
        // Add code here
    }

    /**
     * Stop the robot
     */
    //% block
    export function stop(value: number): void {
        // add code here
    }
}
