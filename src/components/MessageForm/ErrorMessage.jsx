/* eslint-disable react/prop-types */

export default function ErrorMessage({ error }) {
  return (
    <div className="toast toast-top toast-center lg:w-2/5 w-9/12">
      <div className="alert bg-red-500 shadow-md">
        <span>{error}</span>
      </div>
    </div>
  );
}
