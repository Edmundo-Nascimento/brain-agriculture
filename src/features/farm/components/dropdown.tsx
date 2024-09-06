interface IDropdownMenu {
  onView: () => void;
  onEdit: () => void;
  onRemove: () => void;
}

export const DropdownMenu = ({ onView, onEdit, onRemove }: IDropdownMenu) => {
  return (
    <div className="absolute right-0 mt-[2.9rem] w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
      <button
        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        onClick={onView}
      >
        Visualizar
      </button>
      <button
        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        onClick={onEdit}
      >
        Editar
      </button>
      <button
        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        onClick={onRemove}
      >
        Remover
      </button>
    </div>
  );
};