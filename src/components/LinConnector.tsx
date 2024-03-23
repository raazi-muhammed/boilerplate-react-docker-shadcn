import { useEffect, useState } from "react";

export default function LinkConnector({
    to,
    from,
}: {
    to: string;
    from: string;
}) {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        width: 1000,
        height: 100,
    });

    useEffect(() => {
        const A = document.querySelector(to);
        const B = document.querySelector(from);

        if (A && B) {
            const aPos = A.getBoundingClientRect();
            const bPos = B.getBoundingClientRect();

            console.log({ aPos, bPos });

            setPosition({
                width: aPos.x + bPos.x - aPos.width,
                height: aPos.y + bPos.y - aPos.height,
                x: aPos.x + aPos.height / 2,
                y: aPos.y + aPos.width / 2,
            });
        }
    }, []);

    return (
        <div
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                position: "absolute",
            }}>
            <svg
                style={{
                    zIndex: -1,
                }}
                width={position.width}
                height={position.height}
                viewBox={`0 0 100% 100%`}>
                <path
                    d={`M0 0 Q${position.width / 2} 0 ${position.width / 2} ${
                        position.height / 2
                    } Q${position.width / 2} ${position.height} ${
                        position.width
                    } ${position.height} m0 0 Z`}
                    stroke="#FFA500"
                    stroke-width="3"
                    fill="none"
                />
            </svg>
        </div>
    );
}
