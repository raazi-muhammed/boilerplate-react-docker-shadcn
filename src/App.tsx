import LinkConnector from "./components/LinConnector";

export default function App() {
    return (
        <div className="relative">
            <div
                style={{
                    top: "29px",
                    left: "40px",
                }}
                className="A absolute z-10 w-fit rounded bg-indigo-400 p-4 text-white">
                <p>hooi</p>
            </div>

            <LinkConnector to=".A" from=".B" />

            <div
                style={{
                    top: "650px",
                    left: "450px",
                }}
                className="B absolute w-fit rounded bg-red-400 p-4 text-white">
                <p>hooi</p>
            </div>
        </div>
    );
}
