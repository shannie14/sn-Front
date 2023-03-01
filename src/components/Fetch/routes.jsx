// import { useEffect, useState } from "react"

// export const Kgolf = () => {
//     const [folder, setFolder] = useState([])

//     useEffect(() => {
//         const fetchFolders = async () => {
//             try {

//                 const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/folders/golf`);
//                 const data = await response.json();
//                 const url = data.url;
//                 setFolder(url)
//             } catch (error) { console.log(error); }
//         }
//         fetchFolders();
//     }, []);
//     return folder;

// }

// module.exports = Kgolf;