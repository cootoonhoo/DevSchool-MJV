export const hello = 'Olá';
export const world = 'Mundo';
export const helloWorld = `${hello} ${world}`

export type Hello = 'Olá';
export type World = 'Mundo';
export type HelloWorld = `${Hello} ${World}`

export type icon = 'user' | 'www' | 'checkmark';
export type size = 'small' | 'medium' | 'large';

export type SizeIcon = `${icon}-${size}`;