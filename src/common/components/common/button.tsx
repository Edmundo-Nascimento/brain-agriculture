export default function Button({ label, handleClick }: any) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50`}
    >
      {label}
    </button>
  )
}
