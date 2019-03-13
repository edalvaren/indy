
export const vfdStatus = (number) => {
    if (number === "0")
        return "Not Ready";
    if (number === "1.00")
        return "Ready";
    if (number === "2.00")
        return "Running";
    if (number === "3.00")
        return "VFD Overloaded";
    if (number === "4.00")
        return "VFD Faulted";
};

