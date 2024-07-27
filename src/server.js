const server = {
  async getEmployees(query) {
    const response = await fetch(
      `http://localhost:3000/employees${query ? `?q=${query}` : ''}`
    );
    const data = response.ok ? await response.json() : [];

    return data;
  },
  async getEmployee(id) {
    const response = await fetch(`http://localhost:3000/employees/${id}`);
    const data = response.ok ? await response.json() : null;

    return data;
  },
};

export default server;
