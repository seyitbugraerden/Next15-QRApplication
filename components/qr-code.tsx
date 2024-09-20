"use client";
import QRCode from "react-qr-code";

export default function QRCodePage({ state }: { state?: string }) {
    return (
        <div>
            {state && (
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "360px", width: "360px" }}
                    value={`http://localhost:3000/dashboard/${state}`}
                    viewBox={`0 0 256 256`}
                />)}
        </div>
    )
}
