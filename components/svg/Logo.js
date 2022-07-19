export default function Logo() {
    return (
        <svg className="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 76.5 76.5"
             width="42"
             height="42">
            <circle className="circle" cx="38.19" cy="38.45" r="36.41"/>
            <path
                d="M9.89 46.85c-.45-11.34 5.67-17.12 13.49-17.12 4.76 0 8.39 1.47 15.99 5.1 5.78 2.72 9.98 4.76 14.18 4.76 4.08 0 6.01-3.29 6.12-9.53h6.8c.57 12.7-6.01 17.12-13.04 17.12-4.54 0-8.62-1.36-16.44-4.99-5.33-2.61-9.53-4.99-13.61-4.99s-6.58 2.83-6.8 9.64H9.89z"
            />
            <style jsx>{`
              .circle {
                fill: black;
              }

              .logo:hover {
                fill: var(--primary);
              }
            `}</style>
        </svg>
    );
}

