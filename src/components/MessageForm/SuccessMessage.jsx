/* eslint-disable react/prop-types */
export default function SuccessMessage({ message }) {
  return (
    <div className="toast toast-top toast-center lg:w-2/5 w-9/12">
      <div className="alert alert-success shadow-md">
        <span>{message}</span>
      </div>
    </div>
  );
}
