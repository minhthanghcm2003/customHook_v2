// import "./styles.css";
import { useEffect, useState } from "react";

// CustomHook - Togglebtn
// function useToggle(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   function Togglefn() {
//     setValue((v) => !v);
//   }
//   return [value, Togglefn];
// }

// export default function App() {
//   const [isRed, Togglefn] = useToggle(true);
//   const toggleStyle = {
//     backgroundColor: isRed ? "red" : "blue",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     cursor: "pointer",
//   };
//   return (
//     <div className="App">
//       <button onClick={Togglefn} style={toggleStyle}>
//         Toggle me
//       </button>
//     </div>
//   );
// }

// ----------------------------------------------
//CustomHook - Đếm số
// function useCounter(initialValue) {
//   const [value, setValue] = useState(initialValue);
//   function handleIncrease() {
//     setValue((c) => c + 1);
//   }
//   function handleDecrease() {
//     setValue((c) => c - 1);
//   }
//   function handleReset() {
//     setValue(initialValue);
//   }
//   return { handleDecrease, handleIncrease, handleReset, value };
// }

// export default function App() {
//   const { handleDecrease, handleIncrease, handleReset, value } = useCounter(0);
//   return (
//     <div style={{ display: "flex" }}>
//       <button onClick={() => handleDecrease()}>-</button>
//       <div>Output: {value}</div>
//       <button onClick={() => handleIncrease()}>+</button>
//       {value !== 0 && <button onClick={() => handleReset()}>Reset</button>}
//     </div>
//   );
// }

//----------------------------------------------------------
//CustomHook - Lưu biến vào localStorage

// function useLocalStorageState(initialValue, key) {
//   const [value, setValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialValue;
//   });

//   useEffect(
//     () => localStorage.setItem(key, JSON.stringify(value)),
//     [value, key]
//   );
//   return [value, setValue];
// }

// export default function App() {
//   const [value, setValue] = useLocalStorageState([], "watched");
//   return <div>HelloWorld</div>;
// }

// Trung bình

// 1. useDebounce
// import { useState, useEffect } from "react";

// export function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => clearTimeout(handler);
//   }, [value, delay]);

//   return debouncedValue;
// }

// // 2. usePrevious
// import { useRef, useEffect } from "react";

// export function usePrevious(value) {
//   const ref = useRef();

//   useEffect(() => {
//     ref.current = value;
//   }, [value]);

//   return ref.current;
// }

// // Nâng cao

// // 3. useOnlineStatus
// import { useState, useEffect } from "react";

// export function useOnlineStatus() {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => setIsOnline(true);
//     const handleOffline = () => setIsOnline(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return isOnline;
// }

// // 4. useHover
// import { useState, useEffect } from "react";

// export function useHover(ref) {
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const node = ref.current;
//     if (!node) return;

//     const handleMouseEnter = () => setIsHovered(true);
//     const handleMouseLeave = () => setIsHovered(false);

//     node.addEventListener("mouseenter", handleMouseEnter);
//     node.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       node.removeEventListener("mouseenter", handleMouseEnter);
//       node.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, [ref]);

//   return isHovered;
// }

// // 5. useFetch
// import { useState, useEffect } from "react";

// export function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let isMounted = true;
//     setIsLoading(true);

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) throw new Error("Network response was not ok");
//         return res.json();
//       })
//       .then((data) => {
//         if (isMounted) {
//           setData(data);
//           setIsLoading(false);
//         }
//       })
//       .catch((err) => {
//         if (isMounted) {
//           setError(err.message);
//           setIsLoading(false);
//         }
//       });

//     return () => {
//       isMounted = false;
//     };
//   }, [url]);

//   return { data, isLoading, error };
// }
