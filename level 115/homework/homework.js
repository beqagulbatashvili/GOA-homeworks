const userRole = "admin";
const isAvailable = false;
const isDaytime = true;
const hasNotification = true;
const email = "example@mail.com";
const discount = 10;

function App() {
    return (
        <div>

        <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>

        <p>{isAvailable ? "$19.99" : "Out of stock"}</p>

        <img 
            src={isDaytime ? "sun.png" : "moon.png"}
            alt={isDaytime ? "Sun" : "Moon"}
        />

        {hasNotification && <p>New Notification</p>}

        {email && <p>{email}</p>}

        {discount > 0 && <p>Discount Available!</p>}

        </div>
    );
}

