import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// const TEST_SITE_KEY = "6LdgjL0kAAAAADdI4URPhrZnJm5ibmyYRc-qh8gw";
const TEST_SITE_KEY = "6Le2pGcpAAAAAEEDSJU2omY83QfVmQoWkp_T9FCI";
const Recaptcha = React.forwardRef(({ setRecaptcha }, ref) => {
  const handleChange = (value) => {
    setRecaptcha(value)

  };
  return (
    <div
      className="captcha"
      style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}
    >
      <ReCAPTCHA
        ref={ref}
        sitekey={TEST_SITE_KEY}
        onChange={handleChange}
      />
    </div>
  );
});

export default Recaptcha;
