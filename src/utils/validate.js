export const Validate = (email, password) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isemailvalid) {
    return "Email is incorrect";
  }

  if (!ispasswordvalid) {
    return "Password is incorrect";
  }
  return "All working Good"
};
