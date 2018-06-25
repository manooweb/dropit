import classnames from "classnames";

import "./style.scss";

const icon = (
  <svg width="236px" height="236px" viewBox="0 0 236 236">
    <title>Drop it Logo</title>
    <defs>
      <filter
        x="-6.3%"
        y="-3.2%"
        width="112.6%"
        height="109.0%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="2"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          type="matrix"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <circle fill="#0D9375" cx="118" cy="118" r="118" />
        <g
          filter="url(#filter-1)"
          transform="translate(63.000000, 41.000000)"
          fill="#FFFFFF"
          fillRule="nonzero"
        >
          <path d="M69.7415094,17.0887931 C66.1811321,11.8250066 63.0396226,6.982323 60.1075472,2.56074233 C59.6886792,1.92908794 59.0603774,1.29743356 58.4320755,0.876330639 C55.9188679,-0.808081048 52.5679245,0.0341247953 50.8924528,2.56074233 C48.1698113,6.982323 45.0283019,11.6144551 41.2584906,17.0887931 C24.7132075,41.5127626 0,78.3592682 0,99.4144143 C0,114.784671 6.28301887,128.681067 16.3358491,138.787538 C26.3886792,148.683456 40.2113208,155 55.5,155 C70.7886792,155 84.6113208,148.683456 94.6641509,138.576986 C104.716981,128.470516 111,114.57412 111,99.2038629 C111,78.1487168 86.2867925,41.5127626 69.7415094,17.0887931 Z M87.1245283,130.997133 C78.9566038,139.20864 67.8566038,144.051324 55.5,144.051324 C43.1433962,144.051324 32.0433962,138.998089 23.8754717,130.997133 C15.7075472,122.785626 10.890566,111.626399 10.890566,99.2038629 C10.890566,81.5175402 34.5566038,46.3554462 50.2641509,22.984234 C52.1490566,20.247065 53.8245283,17.509896 55.5,15.19383 C57.1754717,17.509896 58.8509434,20.247065 60.7358491,22.984234 C76.4433962,46.5659976 100.109434,81.5175402 100.109434,99.2038629 C100.109434,111.626399 95.0830189,122.785626 87.1245283,130.997133 Z" />
          <path d="M87.9737565,95.013452 C85.0494777,94.8004917 82.542953,97.1430551 82.3340759,100.124499 C82.1251988,104.809626 80.6630594,109.281793 78.3654118,113.115078 C76.0677641,116.948364 72.7257312,120.355729 68.7570671,122.485332 C66.2505423,123.976054 65.206157,127.383419 66.6682965,129.938942 C68.3393129,132.920387 71.6813459,133.772228 74.1878706,132.281506 C79.8275512,129.087101 84.4228465,124.401974 87.5560024,119.077967 C90.8980353,113.753959 92.7779288,107.36515 92.9868059,100.76338 C93.195683,97.781936 90.8980353,95.2264123 87.9737565,95.013452 Z" />
        </g>
      </g>
    </g>
  </svg>
);

const iconBackgroundless = (
  <svg width="115px" height="159px" viewBox="0 0 115 159">
    <title>Drop it Logo</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-38.000000, -16.000000)" fill="#0D9375">
        <g transform="translate(40.000000, 18.000000)" fillRule="nonzero">
          <path
            d="M69.7415094,17.0887931 C66.1811321,11.8250066 63.0396226,6.982323 60.1075472,2.56074233 C59.6886792,1.92908794 59.0603774,1.29743356 58.4320755,0.876330639 C55.9188679,-0.808081048 52.5679245,0.0341247953 50.8924528,2.56074233 C48.1698113,6.982323 45.0283019,11.6144551 41.2584906,17.0887931 C24.7132075,41.5127626 0,78.3592682 0,99.4144143 C0,114.784671 6.28301887,128.681067 16.3358491,138.787538 C26.3886792,148.683456 40.2113208,155 55.5,155 C70.7886792,155 84.6113208,148.683456 94.6641509,138.576986 C104.716981,128.470516 111,114.57412 111,99.2038629 C111,78.1487168 86.2867925,41.5127626 69.7415094,17.0887931 Z M87.1245283,130.997133 C78.9566038,139.20864 67.8566038,144.051324 55.5,144.051324 C43.1433962,144.051324 32.0433962,138.998089 23.8754717,130.997133 C15.7075472,122.785626 10.890566,111.626399 10.890566,99.2038629 C10.890566,81.5175402 34.5566038,46.3554462 50.2641509,22.984234 C52.1490566,20.247065 53.8245283,17.509896 55.5,15.19383 C57.1754717,17.509896 58.8509434,20.247065 60.7358491,22.984234 C76.4433962,46.5659976 100.109434,81.5175402 100.109434,99.2038629 C100.109434,111.626399 95.0830189,122.785626 87.1245283,130.997133 Z"
            stroke="#0D9375"
            strokeWidth="4"
          />
          <path d="M83.9737565,94.013452 C81.0494777,93.8004917 78.542953,96.1430551 78.3340759,99.1244994 C78.1251988,103.809626 76.6630594,108.281793 74.3654118,112.115078 C72.0677641,115.948364 68.7257312,119.355729 64.7570671,121.485332 C62.2505423,122.976054 61.206157,126.383419 62.6682965,128.938942 C64.3393129,131.920387 67.6813459,132.772228 70.1878706,131.281506 C75.8275512,128.087101 80.4228465,123.401974 83.5560024,118.077967 C86.8980353,112.753959 88.7779288,106.36515 88.9868059,99.7633803 C89.195683,96.781936 86.8980353,94.2264123 83.9737565,94.013452 Z" />
        </g>
      </g>
    </g>
  </svg>
);

function Icon({ size = "small", borderless = false, color = "unsplash" }) {
  return (
    <span
      className={classnames(
        "dropit-sidebar-icon",
        "is-" + size,
        "color-" + color
      )}
    >
      {borderless ? iconBackgroundless : icon}
    </span>
  );
}

export default Icon;
