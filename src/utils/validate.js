export const Validate = (email, password, name) => {
  const isemailvalid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const ispasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isnamevalid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  if (!isemailvalid) {
    return "Email is incorrect";
  }

  if (!ispasswordvalid) {
    return "Password is incorrect";
  }
  if (!isnamevalid) {
    return "Name is not valid";
  }
  return "All working Good";
};
