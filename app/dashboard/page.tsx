"use client";
import QRCode from "react-qr-code";
import { FormEvent, useState } from "react";

export default function Page() {
  const [submittedData, setSubmittedData] = useState<{ name: string } | null>(
    null
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString();

    if (!name) {
      console.error("Name is required");
      return;
    }

    console.log({ name });
    setSubmittedData({ name });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required />
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "360px", width: "360px" }}
            value={submittedData.name}
            viewBox={`0 0 256 256`}
          />
        </div>
      )}
    </div>
  );
}
