function showNewStrings() {
    const strings = ["new phone", "old laptop", "brand new shoes", "gray jacket", "newsletter"];
    for (const str of strings) {
        if (str.includes("new")) {
        console.log(str);
        }
    }
}

showNewStrings();
