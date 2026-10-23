// Icons copied from fielmente.com (src/utils/homeIcons.tsx and section components).

export const IconBox = () => (
  <svg width={10} height={10} viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <rect width={10} height={10} rx={2} fill="url(#fm_iconbox)" />
    <defs>
      <radialGradient id="fm_iconbox" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(5 5) rotate(90) scale(5)">
        <stop stopColor="#91A4E8" />
        <stop offset={1} stopColor="#0F31AA" />
      </radialGradient>
    </defs>
  </svg>
);

export const TickIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7.77645 16.0383C10.5857 11.3786 18.1391 5.98979 22.3111 3.03392C22.5438 2.86907 22.8527 2.86496 23.0904 3.02237C23.4744 3.27656 23.5071 3.82806 23.1553 4.1252C18.1501 8.3531 12.1943 13.4112 10.3956 18.983C10.3304 19.1851 10.1801 19.3458 9.98231 19.4228C9.06973 19.7781 7.6775 20.4938 6.85384 20.9919C6.5077 21.2012 6.06013 21.0728 5.87665 20.7123C4.60064 18.2052 2.54924 15.1117 0.847399 13.7104C0.533626 13.452 0.51546 12.9714 0.809247 12.6905C4.20987 9.43925 6.71795 13.8917 7.77611 16.0381L7.77645 16.0383Z" fill="#0D54EB" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M13.4535 6.50313L5.67624 14.2725C5.56083 14.3878 5.41583 14.4441 5.24124 14.4415C5.06652 14.4388 4.92145 14.3798 4.80603 14.2644C4.69076 14.149 4.63312 14.0053 4.63312 13.8333C4.63312 13.6614 4.69076 13.5177 4.80603 13.4023L12.5754 5.625H5.7452C5.56812 5.625 5.41965 5.56507 5.29978 5.44521C5.18006 5.32535 5.1202 5.17687 5.1202 4.99979C5.1202 4.82257 5.18006 4.67417 5.29978 4.55458C5.41965 4.43486 5.56812 4.375 5.7452 4.375H13.9502C14.1637 4.375 14.3426 4.44715 14.4869 4.59146C14.6313 4.7359 14.7035 4.91479 14.7035 5.12813V13.3333C14.7035 13.5104 14.6436 13.6588 14.5237 13.7785C14.4039 13.8984 14.2554 13.9583 14.0783 13.9583C13.9011 13.9583 13.7526 13.8984 13.6329 13.7785C13.5133 13.6588 13.4535 13.5104 13.4535 13.3333V6.50313Z" fill="currentColor" />
  </svg>
);

export const PlusIcon = () => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 3.5v13M3.5 10h13" stroke="#0D54EB" strokeWidth={1.6} strokeLinecap="round" />
  </svg>
);

// Consult / Strategise / Execute icons are copied from fielmente.com at build time (scripts/fetch-assets.mjs).
export { ConsultIcon, StrategiseIcon, ExecuteIcon } from "./StepIcons";