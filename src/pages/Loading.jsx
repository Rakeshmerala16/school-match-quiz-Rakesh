import React, { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://trk.trkclix.net/click?campaign_id=35&pub_id=57";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center p-12 bg-indigo-50 text-indigo-900">
      <img
        src="/images/loader_schoolmatch.gif"
        alt="Loading animation"
        width={160}
        height={160}
        className="mb-8"
        draggable={false}
      />
      <p className="text-center text-lg font-medium max-w-md">
        Please wait, we’re finding the best school match program tailored for you...
      </p>
    </main>
  );
}
