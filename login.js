/**<h1 class="text-white">Quiz Game</h1>

            <div id="p1d" class="bg-white rounded-lg p-4 mt-5">
                <h4>User 1</h4>
                <input type="text" id="user1" class="form-control" placeholder="User 1">
            </div>

            <div id="p2d" class="bg-white rounded-lg p-4 mt-5">
                <h4>User 2</h4>
                <input type="text" id="user1" class="form-control" placeholder="User 2">
            </div>

            <button onclick="login()" id="login" class="btn btn-warning mt-5">Login</button> */

function addUser() {
    user_1 = document.getElementById("user1").value;
    user_2 = document.getElementById("user2").value;

    localStorage.setItem("user_1" , user_1);
    localStorage.setItem("user_2" , user_2);

    window.location = "quiz_game.html"
}