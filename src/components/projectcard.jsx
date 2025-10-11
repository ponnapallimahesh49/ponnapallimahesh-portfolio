// // ProjectCard.jsx
// export function ProjectCard({ image, title, description, tools, link }) {
//   return (
//     <div className="bg-slate-800 rounded-2xl shadow-lg border border-teal-500 overflow-hidden max-w-lg mx-auto hover:shadow-teal-500/30 transition duration-300">
//       {/* Image section */}
//       <div className="h-60 w-full">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//       </div>

//       {/* Details section */}
//       <div className="p-6 space-y-4 text-center">
//         <h2 className="text-2xl font-bold text-teal-400">{title}</h2>
//         <p className="text-gray-300 text-base leading-relaxed">{description}</p>

//         {/* Tools used */}
//         <div className="flex flex-wrap justify-center gap-2 mt-4">
//           {tools.map((tool, idx) => (
//             <span
//               key={idx}
//               className="px-3 py-1 bg-slate-700 text-teal-300 text-sm rounded-full"
//             >
//               {tool}
//             </span>
//           ))}
//         </div>

//         {/* Project link */}
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-6"
//         >
//           View Project
//         </a>
//       </div>
//     </div>
//   );
// }
