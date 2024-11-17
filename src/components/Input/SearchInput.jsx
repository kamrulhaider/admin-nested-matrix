import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput({ onClick, value, onChange }) {
  const handleInputChange = (e) => {
    const newValue = e.target.value;

    // Ignore the first space if the input is currently empty
    if (newValue.length === 1 && newValue[0] === " ") {
      return;
    }
    onChange(e);
  };

  return (
    <div className="flex items-center p-2">
      <p className="font-medium text-sm">Search:</p>
      <div className="flex items-center px-2">
        <input
          type="text"
          id="search_input"
          value={value}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded p-1 outline-none"
          required
        />
        <button onClick={onClick} className="mt-1">
          <FontAwesomeIcon icon={faSearch} className="border p-[6px] rounded" />
        </button>
      </div>
    </div>
  );
}
