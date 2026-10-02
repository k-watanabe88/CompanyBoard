const login = async (employeeId: string, password: string) => {
    const response = await fetch("http://localhost:7133/api/Login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ employeeId, password })
    });

     if (response.status === 401) {
        const errorData = await response.json();
        console.error("API Error:", response.status, errorData);
        throw new Error(errorData.message);
    }
    if (!response.ok) {
        throw new Error("API_ERROR");
    }
    const data = await response.json();
    return data;
}

export { login };