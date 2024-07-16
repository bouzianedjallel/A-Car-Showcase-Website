import { MouseEventHandler } from "react";

export interface CustomButtonProps  {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
}

export interface manufacturerProps {
    manufacturer : string;
    setManufacturer : (manufacturer: string) => void;
}