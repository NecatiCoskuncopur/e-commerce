const Mail = ({ size = 50, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="84"
    height="81"
    xmlSpace="preserve"
    version="1.1"
    viewBox="0 0 84 82"
  >
    <image
      width="84"
      height="82"
      xlinkHref="data:image/png;base64,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"
    />
  </svg>
);
export default Mail;
