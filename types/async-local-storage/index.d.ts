// Type definitions for async-local-storage 1.2.0
// Project: https://github.com/vicanso/async-local-storage
// Definitions by: Gyula Szalai <https://github.com/gyszalai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Enable the async hook
 */
export function enable(): void;

/**
 * Disable the async hook
 */
export function disable(): void;

/**
 * Get the size of map
 */
export function size(): number;

/**
 * Set the key/value for this score
 * @param {string} key The key of value
 * @param {string} value The value
 * @param {boolean} linkedTop The value linked to top
 * @returns {boolean} if success, will return true, otherwise false
 */
export function set(key: string, value: any, linkedTop: boolean): boolean;

/**
 * Get the value by key
 * @param {String} key The key of value
 */
export function get(key: string): any;

/**
 * Remove the data of the current id
 */
export function remove(): void;

/**
 * Enable linked top
 */
export function enableLinkedTop(): void;

/**
 * Disable linked top
 */
export function disableLinkedTop(): void;

/**
 * Get the use the of id
 * @param {number} id The trigger id, is optional, default is `als.currentId()`
 * @returns {number} The use time(ns) of the current id
 */
export function use(id: number): number;
