

export function registerUser(userData) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existing = users.find((u) => u.email === userData.email);
  if (existing) {
    throw new Error("User already exists");
  }

  
  const newUser = { ...userData, role: "user" };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return newUser;
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  return user;
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser")) || null;
}
