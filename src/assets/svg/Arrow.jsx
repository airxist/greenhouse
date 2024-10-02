const Arrow = ({ type = "left", color }) => {
  const ArrLeft = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM13.79 15C14.08 15.29 14.08 15.77 13.79 16.06C13.64 16.21 13.45 16.28 13.26 16.28C13.07 16.28 12.88 16.21 12.73 16.06L9.2 12.53C8.91 12.24 8.91 11.76 9.2 11.47L12.73 7.94C13.02 7.65 13.5 7.65 13.79 7.94C14.08 8.23 14.08 8.71 13.79 9L10.79 12L13.79 15Z"
          fill="#003E20"
        />
      </svg>
    );
  };

  const ArrRight = () => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM12.79 10.53L9.26 14.06C9.11 14.21 8.92 14.28 8.73 14.28C8.54 14.28 8.35 14.21 8.2 14.06C7.91 13.77 7.91 13.29 8.2 13L11.2 10L8.2 7C7.91 6.71 7.91 6.23 8.2 5.94C8.49 5.65 8.97 5.65 9.26 5.94L12.79 9.47C13.09 9.76 13.09 10.24 12.79 10.53Z"
          fill="#003E20"
        />
      </svg>
    );
  };

  const ArrDown = () => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.92 8.95001L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.07999 8.95001"
          stroke={color || "#292D32"}
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  return type === "left" ? ArrLeft() : type === "down" ? ArrDown() : ArrRight();
};

export default Arrow;
