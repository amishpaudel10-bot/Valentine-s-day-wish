/* General Body */
body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(to bottom, #ff4d4d, #ff1a1a);
    overflow-x: hidden;
    color: white;
}

/* Flower/Heart popup animation */
.flower {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url('https://i.ibb.co/1L3G7Fn/flower.png') no-repeat center center;
    background-size: contain;
    animation: pop 5s linear infinite;
}

@keyframes pop {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-1000px) rotate(360deg); opacity: 0; }
}

/* Center heart button */
.open-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: red;
    border: none;
    padding: 20px 40px;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 20px pink;
    transition: 0.3s;
}

.open-btn:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 40px pink;
}

/* Photo book */
.photo-book {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 100px;
    opacity: 0;
    transition: opacity 1s;
}

.photo-book img {
    width: 300px;
    height: 400px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: 0 0 20px #ff9999;
}

/* Wishes */
.wishes {
    text-align: center;
    margin-top: 50px;
    font-size: 28px;
    opacity: 0;
    transition: opacity 2s;
}

/* Heart cursor */
body {
    cursor: url('https://i.ibb.co/5kMnM3k/heart-cursor.png'), auto;
}
