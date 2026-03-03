function findLastIndex() {
    const text = prompt("შეიყვანეთ ტექსტი:");
    const char = prompt("რომელი სიმბოლოს ძებნა გსურთ:");

    const lastIndex = text.lastIndexOf(char);

    console.log(lastIndex);
}
