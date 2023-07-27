const Shipping = ({ size = 60, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.8444 39.6001L36.1108 45.2761L38.4078 50.8201L52.1414 45.2041C52.5121 45.0544 52.8495 44.8337 53.1342 44.5545C53.419 44.2754 53.6456 43.9433 53.8011 43.5773C53.9566 43.2112 54.0379 42.8184 54.0404 42.4211C54.0429 42.0239 53.9666 41.63 53.8158 41.2621C53.665 40.8941 53.4426 40.5592 53.1614 40.2766C52.8802 39.9939 52.5456 39.769 52.1769 39.6147C51.8081 39.4603 51.4123 39.3796 51.0121 39.3771C50.6119 39.3746 50.2151 39.4504 49.8444 39.6001ZM13.6727 1.88408C13.6219 1.76337 13.5613 1.64698 13.4914 1.53608L13.3947 1.34408C13.3127 1.23085 13.2239 1.12265 13.1287 1.02008L13.0199 0.888077C12.6011 0.468327 12.0668 0.180641 11.484 0.0610951C10.9012 -0.0584513 10.2957 -0.0045372 9.74366 0.216077L1.8976 3.36008C1.16994 3.66718 0.592509 4.24511 0.289149 4.9699C-0.0142113 5.69469 -0.019339 6.50862 0.274866 7.23712C0.56907 7.96562 1.13918 8.55066 1.86291 8.86678C2.58664 9.18289 3.40635 9.2049 4.14624 8.92808L9.21172 6.90008L21.7606 37.3561C22.0908 38.0564 22.6797 38.6038 23.4054 38.885C24.1311 39.1661 24.9379 39.1595 25.6587 38.8665C26.3796 38.5735 26.9594 38.0166 27.278 37.311C27.5965 36.6053 27.6295 35.8052 27.3701 35.0761L13.6727 1.88408ZM59.661 26.6881L53.4229 11.6161C52.9632 10.5312 52.0906 9.67038 50.9948 9.22091C49.899 8.77145 48.6687 8.76971 47.5716 9.21608L29.0143 16.8001C28.471 17.0235 27.9774 17.351 27.5618 17.7639C27.1461 18.1768 26.8166 18.667 26.592 19.2064C26.3675 19.7459 26.2523 20.324 26.253 20.9077C26.2537 21.4914 26.3704 22.0692 26.5964 22.6081L32.8345 37.6801C33.2916 38.7671 34.164 39.63 35.2607 40.0798C36.3574 40.5296 37.589 40.5297 38.6858 40.0801L57.2311 32.5201C57.7773 32.2967 58.2737 31.9683 58.6917 31.5539C59.1098 31.1395 59.4412 30.6472 59.667 30.1053C59.8928 29.5634 60.0085 28.9825 60.0075 28.3961C60.0065 27.8097 59.8887 27.2292 59.661 26.6881ZM52.5283 27.8881L38.7584 33.5281C38.6348 33.5807 38.5018 33.6081 38.3674 33.6087C38.2329 33.6093 38.0997 33.5831 37.9757 33.5316C37.8516 33.4801 37.7393 33.4044 37.6453 33.309C37.5513 33.2136 37.4776 33.1003 37.4285 32.9761L33.1489 22.6441C33.0485 22.3956 33.0506 22.118 33.1546 21.8711C33.2587 21.6241 33.4563 21.4277 33.705 21.3241L47.4749 15.7081C47.5986 15.6571 47.7313 15.631 47.8653 15.6312C47.9993 15.6314 48.1319 15.658 48.2556 15.7093C48.3792 15.7606 48.4913 15.8357 48.5856 15.9302C48.6798 16.0247 48.7543 16.1368 48.8047 16.2601L53.0844 26.5921C53.1884 26.8419 53.1883 27.1226 53.0841 27.3723C52.9798 27.6221 52.7799 27.8205 52.5283 27.9241V27.8881Z"
      fill="#FFD910"
    />
    <path
      d="M30.2237 48C30.8214 48 31.4058 48.1759 31.9028 48.5056C32.3998 48.8352 32.7872 49.3038 33.016 49.852C33.2447 50.4001 33.3046 51.0033 33.1879 51.5853C33.0713 52.1672 32.7835 52.7018 32.3608 53.1213C31.9381 53.5409 31.3996 53.8266 30.8133 53.9424C30.227 54.0581 29.6193 53.9987 29.067 53.7716C28.5148 53.5446 28.0427 53.1601 27.7106 52.6667C27.3785 52.1734 27.2013 51.5933 27.2013 51C27.2013 50.2043 27.5197 49.4413 28.0865 48.8787C28.6533 48.3161 29.4221 48 30.2237 48ZM30.2237 42C28.4304 42 26.6773 42.5278 25.1862 43.5168C23.6952 44.5057 22.533 45.9113 21.8468 47.5558C21.1605 49.2004 20.9809 51.01 21.3308 52.7558C21.6806 54.5016 22.5442 56.1053 23.8122 57.364C25.0803 58.6226 26.6959 59.4798 28.4548 59.8271C30.2136 60.1743 32.0367 59.9961 33.6935 59.3149C35.3503 58.6337 36.7664 57.4802 37.7627 56.0001C38.759 54.5201 39.2907 52.78 39.2907 51C39.2907 48.6131 38.3355 46.3239 36.6351 44.636C34.9346 42.9482 32.6284 42 30.2237 42Z"
      fill={color}
    />
  </svg>
);
export default Shipping;
