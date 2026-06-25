import { useEffect, useState } from "react";
import cursorMakhana from "@/assets/makhana.png";

export default function MakhanaCursor() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", move);

        return () =>
            window.removeEventListener("mousemove", move);
    }, []);

    return (
        <img
            src={cursorMakhana}
            alt=""
            className="
        fixed
        z-[9999]
        pointer-events-none
        w-24
        h-24
                select-none
      "
            style={{
                left: position.x,
                top: position.y,
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}