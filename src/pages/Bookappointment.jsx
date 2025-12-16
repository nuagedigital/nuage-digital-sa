import React, { useEffect } from 'react';

export default function Bookappointment() {

  useEffect(() => {
    // Create script tag
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  return (
    <div>
      {/* HubSpot meetings embed container */}
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/hammad-hanif/hammad-hanif?embed=true"
        style={{ minHeight: "700px" }}
      ></div>
    </div>
  );
}
