

const STORAGE_KEY = "orders";

export const getOrders = async () => {
  const storedOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  return storedOrders;
};


export const updateOrderStatus = async (id, newStatus) => {
  const storedOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedOrders = storedOrders.map(order =>
    order.id === id ? { ...order, status: newStatus } : order
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders));
  return true;
};


export const deleteOrder = async (id) => {
  const storedOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const updatedOrders = storedOrders.filter(order => order.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedOrders));
  return true;
};
