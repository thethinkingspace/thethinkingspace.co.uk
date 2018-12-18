import classNames from 'classnames';

export default ({ className }) => (
  <svg
    className={classNames('curveUpColor', className)}
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    width="100%"
    height="100"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <path d="M0 100 C 20 0 50 0 100 100 Z" />
  </svg>
);
