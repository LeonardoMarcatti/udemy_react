export default function Input({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase "
  let inputClasses = "w-full px-3 py-2 leading-tight rounded-3xl shadow "

  if (invalid) {
    labelClasses += "text-red-500"
    inputClasses += 'bg-red-500 text-red-100 border-red-600 border-2'
  } else {
    labelClasses += "text-stone-300"
    inputClasses += 'bg-stone-400 text-gray-700 border-1'
  }

  return (
    <>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </>
  );
}