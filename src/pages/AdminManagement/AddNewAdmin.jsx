import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";
import useAddNewAdmin from "../../hooks/useAddNewAdmin";
import Input from "../../components/Input/Input";

export default function AddNewAdmin() {
  const {
    mobile,
    setMobile,
    setUsername,
    password,
    setPassword,
    cPassword,
    setCPassword,
    handleAddNewAdmin,
    Message,
    IsLoading,
    accountType,
    handleOptionChange,
  } = useAddNewAdmin();

  const navigate = useNavigate();
  const adminRole = Cookies.get("accountType");

  useEffect(() => {
    if (adminRole === "moderator") {
      navigate("/");
    }
  }, [adminRole, navigate]);

  return (
    <div className="mx-3">
      <div className="border border-t-2 mt-3 border-t-[#1D267D] mx-auto mb-7">
        <div className="card border-0">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">
              Add New Admin or Moderator
            </h2>
            {Message && (
              <div className="alert alert-success text-center" role="alert">
                {Message}
              </div>
            )}
            <form onSubmit={(e) => handleAddNewAdmin(e)}>
              <div className="mb-3">
                <label htmlFor="adminName" className="form-label">
                  Admin Name
                </label>
                <input
                  type="text"
                  className="form-control border focus-within:border-blue-500 w-full p-2 mt-2 outline-none"
                  id="adminName"
                  placeholder="Enter new admin or moderator name"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Input
                  PassWord={mobile}
                  placeholder="Enter your Mobile Number"
                  onInput={(e) => setMobile(e.target.value)}
                  className={"my-3"}
                />
              </div>
              <div className="mb-3">
                <Input
                  PassWord={password}
                  placeholder="Password"
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Input
                  PassWord={cPassword}
                  placeholder="Confirm Password"
                  onInput={(e) => setCPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 grid gap-2">
                <Form.Check
                  type="radio"
                  label="Moderator"
                  name="radioOption"
                  value="moderator"
                  checked={accountType === "moderator"}
                  onChange={handleOptionChange}
                />
                <Form.Check
                  type="radio"
                  label="Admin"
                  name="radioOption"
                  value="admin"
                  checked={accountType === "admin"}
                  onChange={handleOptionChange}
                />
              </div>
              <div className="text-center">
                {IsLoading ? (
                  <button type="button" className="btn btn-primary" disabled>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                ) : (
                  <button type="submit" className="btn btn-dark">
                    Add {accountType}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
