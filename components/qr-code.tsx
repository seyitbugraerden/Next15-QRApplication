"use client";
import QRCode from "react-qr-code";
import { useRef } from "react";

export default function QRCodePage({ state }: { state?: string }) {
  const qrCodeRef = useRef(null);

  const downloadQR = () => {
    const svg = qrCodeRef.current.querySelector("svg");
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.download = "QRCode.png";
        downloadLink.href = pngFile;
        downloadLink.click();
      };

      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    }
  };

  return (
    <div>
      {state && (
        <div ref={qrCodeRef}>
          <QRCode
            className="hidden"
            id="QRCode"
            size={256}
            style={{ height: "auto", maxWidth: "360px", width: "360px" }}
            value={`http://localhost:3000/dashboard/${state}`}
          />
        </div>
      )}
      <input
        className="flex justify-center items-center p-3 text-base font-bold rounded-lg bg-black/20 text-white/90 hover:bg-black/40 w-52 cursor-pointer"
        type="button"
        value="Download QR"
        onClick={downloadQR}
      />
    </div>
  );
}
