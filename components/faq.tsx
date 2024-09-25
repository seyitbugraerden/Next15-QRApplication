import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-white/50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-white">
                  How do I generate a QR code?
                </h3>
                <p className="mt-1 text-white/50">
                  First, sign in to your account and complete your profile details. Once logged in, you will be able to create a QR code using the available tools.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-white/50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-white">
                  Are my links publicly accessible?
                </h3>
                <p className="mt-1 text-white/50">
                  Yes, your links are accessible to anyone who has the direct URL. However, you can manage the visibility settings through your account dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-white/50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-white">
                  How can I download my QR code as an SVG file?
                </h3>
                <p className="mt-1 text-white/50">
                  Once you've completed your profile, you'll find a "Download" button beneath your profile image. Clicking on it will allow you to download your QR code in SVG format.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 mt-1 size-6 text-white/50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-white">
                  Can anyone else modify my links?
                </h3>
                <p className="mt-1 text-white/50">
                  No, only the original creator of the QR code can modify or edit the links associated with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
