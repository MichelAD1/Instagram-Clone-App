const overlay = document.getElementById("overlay");

let displayOption = (delete_option) => {
  delete_option.classList.add("active");
};
let displayLogout = (logout) => {
  logout.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let displayStatus = (story) => {
  story.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let displayComment = (comment) => {
  comment.classList.add("active");
  overlay.classList.add("active");
  let nav = document.getElementById("nav");
  nav.classList.add("active");
};
let closeOption = (delete_option) => {
  delete_option.classList.remove("active");
};
let closeLogout = (logout) => {
  logout.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
};
let closeStatus = (story) => {
  story.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
};
let closeComments = (comment) => {
  comment.classList.remove("active");
  overlay.classList.remove("active");
  let nav = document.getElementById("nav");
  nav.classList.remove("active");
  document.getElementById("comments-section").innerHTML = "";
};
let splashScreen = () => {
  setTimeout(() => {
    window.location.href = "../Frontend/signin.html";
  }, 2300);
};
let goToEdit = () => {
  window.location.href = "../Frontend/editprofile.html";
};
let displayMessages = () => {
  let user = document.querySelector(".sentto-inbox");
  user.style.display = "flex";
  let inbox = document.querySelector(".inbox-display");
  inbox.style.display = "flex";
};
let displaySend = () => {
  let send = document.querySelector(".send-message-btn");
  send.style.display = "flex";
};
let likeOutPost = (post_id) => {
  let like = document.getElementById(post_id).src;
  let name = like.split("/").pop();
  like = document.getElementById(post_id);
  if (name === "like.png") {
    axios
      .get(`http://127.0.0.1:8000/api/v0.1/likes/like/${post_id}`, {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {})
      .catch((error) => console.log(error));
    like.src = "logos/likefill.png";
  } else {
    axios
      .get(`http://127.0.0.1:8000/api/v0.1/likes/dislike/${post_id}`, {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {})
      .catch((error) => console.log(error));
    like.src = "logos/like.png";
  }
};
let changeTheme = () => {
  let theme = document.getElementById("theme_icon");
  let dark = localStorage.getItem("Dark");
  let logo = document.getElementById("logo_icon").src;
  let name = logo.split("/").pop();
  logo = document.getElementById("logo_icon");
  if (name === "logo.png") {
    logo.src = "logos/logowhite.png";
    logo.style.width = "90px";
    logo.style.height = "25px";
    logo.style.marginLeft = "4px";
    logo.style.marginTop = "10px";
  }
  if (name === "logowhite.png") {
    logo.src = "logos/logo.png";
    logo.style.width = "10%";
    logo.style.height = "100%";
    logo.style.marginLeft = "0px";
    logo.style.marginTop = "5px";
  }
  if (dark === "on") {
    theme.src = "logos/moon.png";
    localStorage.setItem("Dark", "off");
  } else if (dark === "off") {
    localStorage.setItem("Dark", "on");
    theme.src = "logos/sun.png";
  }

  document.body.classList.toggle("dark-theme");
};
let changeThemePage = () => {
  let theme = document.getElementById("theme_icon");
  let dark = localStorage.getItem("Dark");
  let logo = document.getElementById("logo_icon").src;
  let name = logo.split("/").pop();
  logo = document.getElementById("logo_icon");
  if (name === "logo.png") {
    logo.src = "logos/logowhite.png";
    logo.style.width = "90px";
    logo.style.height = "25px";
    logo.style.marginLeft = "4px";
    logo.style.marginTop = "10px";
  }
  if (name === "logowhite.png") {
    logo.src = "logos/logo.png";
    logo.style.width = "10%";
    logo.style.height = "100%";
    logo.style.marginLeft = "0px";
    logo.style.marginTop = "5px";
  }
  if (dark === "on") {
    theme.src = "logos/sun.png";
  } else if (dark === "off") {
    theme.src = "logos/moon.png";
  }
  document.body.classList.toggle("dark-theme");
};
let goToAccount = () => {
  window.location.href = "../Frontend/account.html";
};
let goToAdd = () => {
  window.location.href = "../Frontend/addPostStory.html";
};
let getProfileHome = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/users/get", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let username = resp["User"]["username"];
      let fullname = resp["User"]["full_name"];
      let profile_picture = resp["User"]["profile_picture"];
      let div = document.createElement("div");
      div.setAttribute("class", "profile-card");
      div.innerHTML = `<div class="profile-pic">
    <img src="logos/${profile_picture}" alt="" />
  </div>
  <div>
    <p class="usernamee">${username}</p>
    <p class="sub-text">${fullname}</p>
  </div>
  <button onclick="goToEdit()" type="submit" class="action-btn">
    Edit Profile
  </button>`;
      document.getElementById("home-profile").appendChild(div);
    })
    .catch((error) => console.log(error));
};
let getProfileUser = (username) => {
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/users/get`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res_me) => {
      let resp_me = res_me["data"];
      if (resp_me["User"]["username"] === username) {
        window.location.href = "../Frontend/account.html";
      }
    })
    .catch((error) => console.log(error));
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/users/getuser/${username}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let username = resp["User"][0]["username"];
      let fullname = resp["User"][0]["full_name"];
      let bio = resp["User"][0]["bio"];
      let profile_picture = resp["User"][0]["profile_picture"];
      let followers;
      let following;
      axios
        .get(
          `http://127.0.0.1:8000/api/v0.1/follows/countfollowing/${resp["User"][0]["id"]}`,
          {
            headers: { Authorization: localStorage.getItem("Token") },
          }
        )
        .then((res_following) => {
          following = res_following["data"]["Follow"];
        })
        .catch((error) => console.log(error));
      axios
        .get(
          `http://127.0.0.1:8000/api/v0.1/follows/countfollower/${resp["User"][0]["id"]}`,
          {
            headers: { Authorization: localStorage.getItem("Token") },
          }
        )
        .then((res_follower) => {
          followers = res_follower["data"]["Follow"];
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/posts/getsearch/${username}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_posts) => {
          axios
            .get(
              `http://127.0.0.1:8000/api/v0.1/follows/check/${resp["User"][0]["id"]}`,
              {
                headers: { Authorization: localStorage.getItem("Token") },
              }
            )
            .then((res_check) => {
              let button_follow = res_check["data"]["Follow"];
              let resp_posts = res_posts["data"];
              let length_posts = resp_posts["Post"].length;
              let div = document.createElement("div");
              div.setAttribute("class", "account-card");
              div.innerHTML = `<div class="card-header">
      <div class="pic">
        <img src="logos/${profile_picture}" alt="" />
      </div>
      <div class="username-profile">${username}</div>
      <div class="name">${fullname}</div>
      <div class="desc">
        <p>${bio}</p>
      </div>
      <a onclick="follow(${resp["User"][0]["id"]})" class="follow-btn">${button_follow}</a>
      <a onclick="message()" class="msg-btn">Message</a>
    </div>
    <div class="card-footer">
      <div class="numbers">
        <div class="item">
          <span>${length_posts}</span>
          Posts
        </div>
        <div class="border"></div>
        <div class="item">
          <span>${following}</span>
          Following
        </div>
        <div class="border"></div>
        <div class="item">
          <span>${followers}</span>
          Followers
        </div>
      </div>
    </div>`;
              document.getElementById("profile").appendChild(div);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};
let follow = (user_id) => {
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/follows/addremove/${user_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((response) => {
      window.location.href = "../Frontend/account.html";
    })
    .catch((error) => console.log(error));
};
let getProfileMain = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/users/get", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let username = resp["User"]["username"];
      let fullname = resp["User"]["full_name"];
      let bio = resp["User"]["bio"];
      let profile_picture = resp["User"]["profile_picture"];
      let followers;
      let following;
      axios
        .get(
          `http://127.0.0.1:8000/api/v0.1/follows/countfollowing/${resp["User"]["id"]}`,
          {
            headers: { Authorization: localStorage.getItem("Token") },
          }
        )
        .then((res_following) => {
          following = res_following["data"]["Follow"];
        })
        .catch((error) => console.log(error));
      axios
        .get(
          `http://127.0.0.1:8000/api/v0.1/follows/countfollower/${resp["User"]["id"]}`,
          {
            headers: { Authorization: localStorage.getItem("Token") },
          }
        )
        .then((res_follower) => {
          followers = res_follower["data"]["Follow"];
        })
        .catch((error) => console.log(error));
      axios
        .get("http://127.0.0.1:8000/api/v0.1/posts/getmyposts", {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_posts) => {
          let resp_posts = res_posts["data"];
          let length_posts = resp_posts["Post"].length;
          let div = document.createElement("div");
          div.setAttribute("class", "account-card");
          div.innerHTML = `<div class="card-header">
      <div class="pic">
        <img src="logos/${profile_picture}" alt="" />
      </div>
      <div class="username-profile">${username}</div>
      <div class="name">${fullname}</div>
      <div class="desc">
        <p>${bio}</p>
      </div>
      <a onclick="goToEdit()" class="follow-btn">Edit Profile</a>
    </div>
    <div class="card-footer">
      <div class="numbers">
        <div class="item">
          <span>${length_posts}</span>
          Posts
        </div>
        <div class="border"></div>
        <div class="item">
          <span>${following}</span>
          Following
        </div>
        <div class="border"></div>
        <div class="item">
          <span>${followers}</span>
          Followers
        </div>
      </div>
    </div>`;
          document.getElementById("profile").appendChild(div);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};
let closeLogoutPopup = () => {
  let pop = document.getElementById("logout_pop");
  closeLogout(pop);
};
let openStoryPopup = () => {
  let pop = document.getElementById("story_pop");
  displayStatus(pop);
};
let closeStoryPopup = () => {
  let pop = document.getElementById("story_pop");
  closeStatus(pop);
};
let openLogoutPopup = () => {
  let pop = document.getElementById("logout_pop");
  displayLogout(pop);
};
let closeDeletePopup = () => {
  let pop = document.getElementById("delete_pop");
  closeOption(pop);
};
let closeMyPopup = () => {
  let pop = document.getElementById("comment_pop");
  closeComments(pop);
};
let openDeletePopup = () => {
  let pop = document.getElementById("delete_pop");
  displayOption(pop);
};
let deletePost = (post_id) => {
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/posts/delete/${post_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      window.location.href = "../Frontend/account.html";
    })
    .catch((error) => console.log(error));
};
let addComment = (post_id) => {
  let content = document.getElementById("comment");
  let args = new FormData();
  args.append("post_id", post_id);
  args.append("content", content.value);
  axios
    .post("http://127.0.0.1:8000/api/v0.1/comments/add", args, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      window.location.href = "../Frontend/account.html";
    })
    .catch((error) => console.log(error));
};
let openMyPopup = (post_id) => {
  let delete_btn = document.getElementById("delete_btn");
  let post_btn = document.getElementById("post_cmnt");
  post_btn.setAttribute("onclick", `addComment(${post_id})`);
  delete_btn.setAttribute("onclick", `deletePost(${post_id})`);
  let like = document.getElementById("like-section");
  like.innerHTML = `<img
            
            id="${post_id}"
            src=""
            class="icon"
            alt=""
          />`;
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/posts/getpost/${post_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let post = resp["Post"];
      let pop = document.getElementById("comment_pop");
      let img = document.getElementById("post_image_popup");
      axios
        .get("http://127.0.0.1:8000/api/v0.1/users/get", {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_user) => {
          let resp_user = res_user["data"];
          let user_img = document.getElementById("post_acc_img_popup");
          let user_name = document.getElementById("post_acc_name_popup");
          user_img.src = "logos/" + resp_user["User"]["profile_picture"];
          user_name.innerHTML = resp_user["User"]["username"];
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/likes/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_like) => {
          let like = document.getElementById("like-section");
          let resp_like = res_like["data"];
          if (resp_like["Like"]) {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/likefill.png"
            class="icon"
            alt=""
          />`;
          } else {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/like.png"
            class="icon"
            alt=""
          />`;
          }
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/comments/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_com) => {
          let resp_com = res_com["data"];
          let length_com = resp_com["Comment"].length;
          for (let i = 0; i < length_com; i++) {
            let comment = resp_com["Comment"][i];
            const date = comment["created_at"];
            const parsedDate = date.split("T")[0];
            let commented_by = comment["commented_by"];

            axios
              .get(
                `http://127.0.0.1:8000/api/v0.1/users/getpostedby/${commented_by}`,
                {
                  headers: { Authorization: localStorage.getItem("Token") },
                }
              )
              .then((res_user) => {
                let resp_user = res_user["data"];
                console.log(resp_user);
                let div = document.createElement("div");
                div.setAttribute("class", "comments");
                div.innerHTML = `<div class="display-comment-info">
                  <div class="profile-pic-chatting">
                    <img id="post_comment_img_popup" src="logos/${resp_user["User"]["profile_picture"]}" alt="" />
                  </div>
                  <p
                    id="post_comment_name_popup"
                    class="username-comment-display"
                  >${resp_user["User"]["username"]}</p>
                  <p
                    id="post_comment_desc_popup"
                    class="desc-comment-display"
                  >${comment["content"]}</p>
                  <p
                    id="post_comment_date_popup"
                    class="date-time-comment"
                  >${parsedDate}</p>
                </div>`;
                document.getElementById("comments-section").appendChild(div);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));

      let likes = document.getElementById("post_likes_popup");
      let caption = document.getElementById("post_acc_caption_popup");
      likes.innerHTML = post["count_likes"] + " likes";
      caption.innerHTML = post["caption"];
      img.src = `logos/${post["post_image"]}`;
      displayComment(pop);
    })
    .catch((error) => console.log(error));
};
let openUserPopup = (post_id, username) => {
  let post_btn = document.getElementById("post_cmnt");
  post_btn.setAttribute("onclick", `addComment(${post_id})`);
  let like = document.getElementById("like-section");
  like.innerHTML = `<img
            
            id="${post_id}"
            src=""
            class="icon"
            alt=""
          />`;
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/posts/getpost/${post_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let post = resp["Post"];
      let pop = document.getElementById("comment_pop");
      let img = document.getElementById("post_image_popup");
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/users/getuser/${username}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_user) => {
          let resp_user = res_user["data"];
          let user_img = document.getElementById("post_acc_img_popup");
          let user_name = document.getElementById("post_acc_name_popup");
          user_img.src = "logos/" + resp_user["User"][0]["profile_picture"];
          user_name.innerHTML = resp_user["User"][0]["username"];
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/likes/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_like) => {
          let like = document.getElementById("like-section");
          let resp_like = res_like["data"];
          if (resp_like["Like"]) {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/likefill.png"
            class="icon"
            alt=""
          />`;
          } else {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/like.png"
            class="icon"
            alt=""
          />`;
          }
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/comments/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_com) => {
          let resp_com = res_com["data"];
          let length_com = resp_com["Comment"].length;
          for (let i = 0; i < length_com; i++) {
            let comment = resp_com["Comment"][i];
            const date = comment["created_at"];
            const parsedDate = date.split("T")[0];
            let commented_by = comment["commented_by"];

            axios
              .get(
                `http://127.0.0.1:8000/api/v0.1/users/getpostedby/${commented_by}`,
                {
                  headers: { Authorization: localStorage.getItem("Token") },
                }
              )
              .then((res_user) => {
                let resp_user = res_user["data"];
                let div = document.createElement("div");
                div.setAttribute("class", "comments");
                div.innerHTML = `<div class="display-comment-info">
                  <div class="profile-pic-chatting">
                    <img id="post_comment_img_popup" src="logos/${resp_user["User"]["profile_picture"]}" alt="" />
                  </div>
                  <p
                    id="post_comment_name_popup"
                    class="username-comment-display"
                  >${resp_user["User"]["username"]}</p>
                  <p
                    id="post_comment_desc_popup"
                    class="desc-comment-display"
                  >${comment["content"]}</p>
                  <p
                    id="post_comment_date_popup"
                    class="date-time-comment"
                  >${parsedDate}</p>
                </div>`;
                document.getElementById("comments-section").appendChild(div);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));

      let likes = document.getElementById("post_likes_popup");
      let caption = document.getElementById("post_acc_caption_popup");
      likes.innerHTML = post["count_likes"] + " likes";
      caption.innerHTML = post["caption"];
      img.src = `logos/${post["post_image"]}`;
      displayComment(pop);
    })
    .catch((error) => console.log(error));
};
let openAllPopup = (post_id, user_id) => {
  let like = document.getElementById("like-section");
  let post_btn = document.getElementById("post_cmnt");
  post_btn.setAttribute("onclick", `addComment(${post_id})`);
  like.innerHTML = `<img
            
            id=${post_id}
            src=""
            class="icon"
            alt=""
          />`;
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/posts/getpost/${post_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let post = resp["Post"];
      let pop = document.getElementById("comment_pop");
      let img = document.getElementById("post_image_popup");
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/users/getpostedby/${user_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_user) => {
          let resp_user = res_user["data"];
          let user_img = document.getElementById("post_acc_img_popup");
          let user_name = document.getElementById("post_acc_name_popup");
          user_img.src = "logos/" + resp_user["User"]["profile_picture"];
          user_name.innerHTML = resp_user["User"]["username"];
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/likes/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_like) => {
          let like = document.getElementById("like-section");
          let resp_like = res_like["data"];
          if (resp_like["Like"]) {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/likefill.png"
            class="icon"
            alt=""
          />`;
          } else {
            like.innerHTML = `<img
            onclick=likeOutPost(${post_id})
            id="${post_id}"
            src="logos/like.png"
            class="icon"
            alt=""
          />`;
          }
        })
        .catch((error) => console.log(error));
      axios
        .get(`http://127.0.0.1:8000/api/v0.1/comments/get/${post_id}`, {
          headers: { Authorization: localStorage.getItem("Token") },
        })
        .then((res_com) => {
          let resp_com = res_com["data"];
          let length_com = resp_com["Comment"].length;
          for (let i = 0; i < length_com; i++) {
            let comment = resp_com["Comment"][i];
            const date = comment["created_at"];
            const parsedDate = date.split("T")[0];
            let commented_by = comment["commented_by"];
            axios
              .get(
                `http://127.0.0.1:8000/api/v0.1/users/getpostedby/${commented_by}`,
                {
                  headers: { Authorization: localStorage.getItem("Token") },
                }
              )
              .then((res_user) => {
                let resp_user = res_user["data"];
                console.log(resp_user);
                let div = document.createElement("div");
                div.setAttribute("class", "comments");
                div.innerHTML = `<div class="display-comment-info">
                  <div class="profile-pic-chatting">
                    <img id="post_comment_img_popup" src="logos/${resp_user["User"]["profile_picture"]}" alt="" />
                  </div>
                  <p
                    id="post_comment_name_popup"
                    class="username-comment-display"
                  >${resp_user["User"]["username"]}</p>
                  <p
                    id="post_comment_desc_popup"
                    class="desc-comment-display"
                  >${comment["content"]}</p>
                  <p
                    id="post_comment_date_popup"
                    class="date-time-comment"
                  >${parsedDate}</p>
                </div>`;
                document.getElementById("comments-section").appendChild(div);
              })
              .catch((error) => console.log(error));
          }
        })
        .catch((error) => console.log(error));
      let likes = document.getElementById("post_likes_popup");
      let caption = document.getElementById("post_acc_caption_popup");
      likes.innerHTML = post["count_likes"] + " likes";
      caption.innerHTML = post["caption"];
      img.src = `logos/${post["post_image"]}`;
      displayComment(pop);
    })
    .catch((error) => console.log(error));
};
let openStoriesPopup = (story_id) => {
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/stories/getstory/${story_id}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let pop = document.getElementById("story_pop");
      let resp = res["data"];
      let post = resp["Story"];
      let img = document.getElementById("story_image_popup");
      let caption = document.getElementById("story_caption_popup");
      if (post["caption"] === "empty") {
        caption.innerHTML = "";
      } else {
        caption.innerHTML = post["caption"];
      }

      img.src = `logos/${post["story_image"]}`;
      displayStatus(pop);
    })
    .catch((error) => console.log(error));
};
let getPostsMain = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/posts/getmyposts", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let length_posts = resp["Post"].length;
      for (let i = 0; i < length_posts; i++) {
        let post = resp["Post"][i];
        let div = document.createElement("div");
        div.setAttribute("class", "post-display");
        div.innerHTML = `<img
        onclick="openMyPopup(${post["id"]})"
          src="logos/${post["post_image"]}"
          class="profile-post-size"
        />`;
        document.getElementById("profile-posts").appendChild(div);
      }
    })
    .catch((error) => console.log(error));
};
let getPostsUser = (username) => {
  axios
    .get(`http://127.0.0.1:8000/api/v0.1/posts/getsearch/${username}`, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let length_posts = resp["Post"].length;
      for (let i = 0; i < length_posts; i++) {
        let post = resp["Post"][i];
        let div = document.createElement("div");
        div.setAttribute("class", "post-display");
        div.innerHTML = `<img
        onclick="openUserPopup(${post["id"]},'${username}')"
          src="logos/${post["post_image"]}"
          class="profile-post-size"
        />`;
        document.getElementById("profile-posts").appendChild(div);
      }
    })
    .catch((error) => console.log(error));
};
let checkStories = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/stories/gettimes", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((time) => {
      let resp = time["data"];
      let length = resp["Story"].length;
      for (let i = 0; i < length; i++) {
        let timee = resp["Story"][i]["created_at"];
        let today = Date.now();
        today = new Date(today);
        timee = new Date(timee);
        let date_diff = (today - timee) / 60000;
        if (date_diff > 140) {
          console.log(resp["Story"][i]["id"]);
          axios
            .get(
              `http://127.0.0.1:8000/api/v0.1/stories/delete/${resp["Story"][i]["id"]}`,
              {
                headers: { Authorization: localStorage.getItem("Token") },
              }
            )
            .then((res) => {})
            .catch((error) => console.log(error));
        }
      }
    })
    .catch((error) => console.log(error));
};
let loadHome = () => {
  if (localStorage.getItem("Token") == null) {
    window.location.href = "../Frontend/signin.html";
  }
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let home_icon = document.getElementById("home_icon");
  home_icon.src = "logos/homefill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Instagram";
  checkStories();
  getProfileHome();
  getFollowingPosts();
  getFollowingStories();
};
let loadAccount = () => {
  if (localStorage.getItem("Token") == null) {
    window.location.href = "../Frontend/signin.html";
  }

  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let acc_icon = document.getElementById("acc_icon");
  acc_icon.src = "logos/accountfill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "My Account";
  getProfileMain();
  getPostsMain();
};
let loadUser = () => {
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let username = localStorage.getItem("Search");
  if (username === "false") {
    let title = document.getElementById("title");
    title.innerHTML = "Profile not found";
    let result = document.querySelector(".no-result");
    result.style.display = "block";
    let h = document.querySelector(".post-header");
    h.style.display = "none";
    let b = document.querySelector(".post-border");
    b.style.display = "none";
  } else {
    getProfileUser(username);
    getPostsUser(username);
  }
};
let loadMessenger = () => {
  if (localStorage.getItem("Token") == null) {
    window.location.href = "../Frontend/signin.html";
  }
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let mes_icon = document.getElementById("messenger_icon");
  mes_icon.src = "logos/messengerfill.png";
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Chat - Inbox";
};
let loadExplore = () => {
  if (localStorage.getItem("Token") == null) {
    window.location.href = "../Frontend/signin.html";
  }
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let explore_icon = document.getElementById("explore_icon");
  explore_icon.src = "logos/explorefill.png";
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  document.getElementById("add_icon").onclick = function () {
    window.location.href = "../Frontend/addPostStory.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Instagram";
  getAllPosts();
};
let loadAdd = () => {
  if (localStorage.getItem("Token") == null) {
    window.location.href = "../Frontend/signin.html";
  }
  let dark = localStorage.getItem("Dark");
  if (dark === "on") {
    changeThemePage();
  }
  let add_icon = document.getElementById("add_icon");
  add_icon.src = "logos/addfill.png";
  document.getElementById("home_icon").onclick = function () {
    window.location.href = "../Frontend/home.html";
  };
  document.getElementById("explore_icon").onclick = function () {
    window.location.href = "../Frontend/explore.html";
  };
  document.getElementById("messenger_icon").onclick = function () {
    window.location.href = "../Frontend/messenger.html";
  };
  document.getElementById("acc_icon").onclick = function () {
    window.location.href = "../Frontend/account.html";
  };
  let searchh = document.querySelector(".search");
  searchh.style.display = "none";
  let title = document.getElementById("title");
  title.innerHTML = "Create Post/Story";
};
let loadEditProfile = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/users/get", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let username = resp["User"]["username"];
      let fullname = resp["User"]["full_name"];
      let bio = resp["User"]["bio"];
      let f = document.getElementById("fullname_form");
      f.placeholder = fullname;
      let u = document.getElementById("username_form");
      u.placeholder = username;
      let b = document.getElementById("bio_form");
      b.placeholder = bio;
    })
    .catch((error) => console.log(error));
};
let search = () => {
  let search = document.getElementById("search_icon").src;
  let name = search.split("/").pop();
  search = document.getElementById("search_icon");
  if (name === "search.png") {
    search.src = "logos/searchfill.png";
    search = document.getElementById("search");
    search.style.display = "block";
    let searchh = document.querySelector(".search");
    searchh.style.display = "block";
    let search_input = document.getElementById("search");
    search_input.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        let user = search_input.value;
        axios
          .get(`http://127.0.0.1:8000/api/v0.1/users/getuser/${user}`, {
            headers: { Authorization: localStorage.getItem("Token") },
          })
          .then((res_search) => {
            let resp_search = res_search["data"];
            if (resp_search["User"] === false) {
              localStorage.setItem("Search", resp_search["User"]);
            } else {
              localStorage.setItem(
                "Search",
                resp_search["User"][0]["username"]
              );
            }

            window.location.href = "../Frontend/viewprofile.html";
          })
          .catch((error) => console.log(error));
        search_input.value = "";
      }
    });
  } else {
    search.src = "logos/search.png";
    search = document.getElementById("search");
    search.style.display = "none";
    let searchh = document.querySelector(".search");
    searchh.style.display = "none";
  }
};
let signUp = () => {
  let username = document.getElementById("username_form").value;
  let fullname = document.getElementById("fullname_form").value;
  let bio = document.getElementById("bio_form").value;
  let password = document.getElementById("password_form").value;
  let profile_picture;
  if (username === "" || fullname === "" || bio === "" || password === "") {
    let msg = document.querySelector(".empty-fields");
    msg.style.display = "block";
  } else {
    if (document.getElementById("profile_form").files[0]) {
      profile_picture = document.getElementById("profile_form").files[0].name;
    } else {
      profile_picture = "noprofile.jpg";
    }
    let args = new FormData();
    args.append("username", username.toLowerCase());
    args.append("full_name", fullname);
    args.append("password", password);
    args.append("bio", bio);
    args.append("profile_picture", profile_picture);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v0.1/users/signup",
      data: args,
    })
      .then((res) => {
        let resp = res.data.authorisation.token;
        localStorage.setItem("Token", "Bearer " + resp);
        axios.defaults.headers.common["Authorization"] = "Bearer" + resp;
        window.location.href = "../Frontend/home.html";
      })
      .catch((err) => console.error(err.response.data));
  }
};
let logOut = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/users/logout", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((response) => {
      localStorage.removeItem("Token");
      window.location.href = "../Frontend/splash.html";
    })
    .catch((error) => console.log(error));
};
let signIn = () => {
  let username = document.getElementById("username_form").value;
  let msg = document.querySelector(".empty-fields");
  let password = document.getElementById("password_form").value;
  if (username === "" || password === "") {
    msg.style.display = "block";
    msg.innerHTML = "Please fill both fields";
  } else {
    let args = new FormData();
    args.append("username", username.toLowerCase());
    args.append("password", password);

    axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/v0.1/users/login",
      data: args,
    })
      .then((res) => {
        let resp = res["data"];
        if (resp["User"] === "Not Found") {
          msg.style.display = "block";
          msg.innerHTML = "Incorrect username or password";
        } else {
          resp = res.data.authorisation.token;
          localStorage.setItem("Token", "Bearer " + resp);
          axios.defaults.headers.common["Authorization"] = "Bearer" + resp;
          window.location.href = "../Frontend/home.html";
        }
      })
      .catch((err) => console.error(err.response.data));
  }
};
let update = () => {
  let args = new FormData();
  let msg = document.querySelector(".empty-fields");
  if (document.getElementById("username_form").value) {
    let username = document.getElementById("username_form").value;
    args.append("username", username.toLowerCase());
  }
  if (document.getElementById("fullname_form").value) {
    let fullname = document.getElementById("fullname_form").value;
    args.append("full_name", fullname);
  }
  if (document.getElementById("bio_form").value) {
    let bio = document.getElementById("bio_form").value;
    args.append("bio", bio);
  }
  if (document.getElementById("password_form").value) {
    let password = document.getElementById("password_form").value;
    args.append("password", password);
  }
  if (document.getElementById("profile_form").files[0]) {
    let profile_picture = document.getElementById("profile_form").files[0].name;
    console.log(profile_picture);
    args.append("profile_picture", profile_picture);
  }
  axios
    .post("http://127.0.0.1:8000/api/v0.1/users/update", args, {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      if (resp["User"] === "Invalid username") {
        msg.style.display = "block";
        msg.innerHTML = "Username exists";
      } else {
        msg.style.display = "block";
        msg.style.color = "green";
        msg.innerHTML = "Changes saved";
      }
    })
    .catch((error) => console.log(error));
};
let addPostStory = () => {
  let type = document.getElementById("type").value;
  let caption = document.getElementById("caption_form").value;
  let image = document.getElementById("image_form").files[0].name;
  if (type === "post") {
    let args = new FormData();
    args.append("caption", caption);
    args.append("post_image", image);
    axios
      .post("http://127.0.0.1:8000/api/v0.1/posts/add", args, {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {
        window.location.href = "../Frontend/account.html";
      })
      .catch((err) => console.error(err.response.data));
  } else {
    let args = new FormData();
    if (caption === "") {
      args.append("caption", "empty");
    } else {
      args.append("caption", caption);
    }
    args.append("story_image", image);
    axios
      .post("http://127.0.0.1:8000/api/v0.1/stories/add", args, {
        headers: { Authorization: localStorage.getItem("Token") },
      })
      .then((res) => {
        window.location.href = "../Frontend/account.html";
      })
      .catch((err) => console.error(err.response.data));
  }
};
let getAllPosts = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/posts/getallposts", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let length_posts = resp["Post"].length;
      for (let i = 0; i < length_posts; i++) {
        let post = resp["Post"][i];
        const date = post["created_at"];
        const parsedDate = date.split("T")[0];
        let post_id = post["posted_by"];
        axios
          .get(`http://127.0.0.1:8000/api/v0.1/users/getpostedby/${post_id}`, {
            headers: { Authorization: localStorage.getItem("Token") },
          })
          .then((res_user) => {
            let resp_user = res_user["data"];
            let user = resp_user["User"];
            axios
              .get(`http://127.0.0.1:8000/api/v0.1/likes/get/${post["id"]}`, {
                headers: { Authorization: localStorage.getItem("Token") },
              })
              .then((res_like) => {
                axios
                  .get(
                    `http://127.0.0.1:8000/api/v0.1/comments/count/${post["id"]}`,
                    {
                      headers: { Authorization: localStorage.getItem("Token") },
                    }
                  )
                  .then((res_count) => {
                    let resp_like = res_like["data"];
                    if (resp_like["Like"]) {
                      let div = document.createElement("div");
                      div.setAttribute("class", "post");
                      div.innerHTML = `<div class="info">
              <div class="user">
                <div class="profile-pic">
                  <img src="logos/${user["profile_picture"]}" alt="" />
                </div>
                <p class="username">${user["username"]}</p>
              </div>
            </div>
            <img src="logos/${post["post_image"]}" class="post-image" alt="" />
            <div class="post-content">
              <div class="reaction-wrapper">
                <img
                  id="${post["id"]}"
                  onclick="likeOutPost(${post["id"]})"
                  src="logos/likefill.png"
                  class="icon"
                  alt=""
                />
                <img
                  onclick="openAllPopup(${post["id"]},${user["id"]})"
                  src="logos/comment.png"
                  class="icon"
                  alt=""
                />
              </div>
              <p class="likes">${post["count_likes"]} likes</p>
              <p class="description">
                <span>${user["username"]} </span> ${post["caption"]}
              </p>
              <p  onclick="openAllPopup(${post["id"]},${user["id"]})" class="view-comments">
                View all ${res_count["data"]["Comment"]} comments
              </p>
              <p class="post-time">${parsedDate}</p>
            </div>
            `;
                      document.getElementById("all-posts").appendChild(div);
                    } else {
                      let div = document.createElement("div");
                      div.setAttribute("class", "post");
                      div.innerHTML = `<div class="info">
              <div class="user">
                <div class="profile-pic">
                  <img src="logos/${user["profile_picture"]}" alt="" />
                </div>
                <p class="username">${user["username"]}</p>
              </div>
            </div>
            <img src="logos/${post["post_image"]}" class="post-image" alt="" />
            <div class="post-content">
              <div class="reaction-wrapper">
                <img
                  id="${post["id"]}"
                  onclick="likeOutPost(${post["id"]})"
                  src="logos/like.png"
                  class="icon"
                  alt=""
                />
                <img
                  onclick="openAllPopup(${post["id"]},${user["id"]})"
                  src="logos/comment.png"
                  class="icon"
                  alt=""
                />
              </div>
              <p class="likes">${post["count_likes"]} likes</p>
              <p class="description">
                <span>${user["username"]} </span> ${post["caption"]}
              </p>
              <p  onclick="openAllPopup(${post["id"]},${user["id"]})" class="view-comments">
                View all ${res_count["data"]["Comment"]} comments
              </p>
              <p class="post-time">${parsedDate}</p>
            </div>
            `;
                      document.getElementById("all-posts").appendChild(div);
                    }
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};
let getFollowingPosts = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/posts/gethome", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let length_posts = resp["Post"].length;
      for (let i = 0; i < length_posts; i++) {
        let post = resp["Post"][i];
        const date = post["created_at"];
        const parsedDate = date.split(" ")[0];
        let post_id = post["posted_by"];
        axios
          .get(`http://127.0.0.1:8000/api/v0.1/users/getpostedby/${post_id}`, {
            headers: { Authorization: localStorage.getItem("Token") },
          })
          .then((res_user) => {
            let resp_user = res_user["data"];
            let user = resp_user["User"];
            axios
              .get(`http://127.0.0.1:8000/api/v0.1/likes/get/${post["id"]}`, {
                headers: { Authorization: localStorage.getItem("Token") },
              })
              .then((res_like) => {
                axios
                  .get(
                    `http://127.0.0.1:8000/api/v0.1/comments/count/${post["id"]}`,
                    {
                      headers: { Authorization: localStorage.getItem("Token") },
                    }
                  )
                  .then((res_count) => {
                    let resp_like = res_like["data"];
                    if (resp_like["Like"]) {
                      let div = document.createElement("div");
                      div.setAttribute("class", "post");
                      div.innerHTML = `<div class="info">
              <div class="user">
                <div class="profile-pic">
                  <img src="logos/${user["profile_picture"]}" alt="" />
                </div>
                <p class="username">${user["username"]}</p>
              </div>
            </div>
            <img src="logos/${post["post_image"]}" class="post-image" alt="" />
            <div class="post-content">
              <div class="reaction-wrapper">
                <img
                  id="${post["id"]}"
                  onclick="likeOutPost(${post["id"]})"
                  src="logos/likefill.png"
                  class="icon"
                  alt=""
                />
                <img
                  onclick="openAllPopup(${post["id"]},${user["id"]})"
                  src="logos/comment.png"
                  class="icon"
                  alt=""
                />
              </div>
              <p class="likes">${post["count_likes"]} likes</p>
              <p class="description">
                <span>${user["username"]} </span> ${post["caption"]}
              </p>
              <p  onclick="openAllPopup(${post["id"]},${user["id"]})" class="view-comments">
                View all ${res_count["data"]["Comment"]} comments
              </p>
              <p class="post-time">${parsedDate}</p>
            </div>
            `;
                      document.getElementById("all-posts").appendChild(div);
                    } else {
                      let div = document.createElement("div");
                      div.setAttribute("class", "post");
                      div.innerHTML = `<div class="info">
              <div class="user">
                <div class="profile-pic">
                  <img src="logos/${user["profile_picture"]}" alt="" />
                </div>
                <p class="username">${user["username"]}</p>
              </div>
            </div>
            <img src="logos/${post["post_image"]}" class="post-image" alt="" />
            <div class="post-content">
              <div class="reaction-wrapper">
                <img
                  id="${post["id"]}"
                  onclick="likeOutPost(${post["id"]})"
                  src="logos/like.png"
                  class="icon"
                  alt=""
                />
                <img
                  onclick="openAllPopup(${post["id"]},${user["id"]})"
                  src="logos/comment.png"
                  class="icon"
                  alt=""
                />
              </div>
              <p class="likes">${post["count_likes"]} likes</p>
              <p class="description">
                <span>${user["username"]} </span> ${post["caption"]}
              </p>
              <p  onclick="openAllPopup(${post["id"]},${user["id"]})" class="view-comments">
                View all ${res_count["data"]["Comment"]} comments
              </p>
              <p class="post-time">${parsedDate}</p>
            </div>
            `;
                      document.getElementById("all-posts").appendChild(div);
                    }
                  })
                  .catch((error) => console.log(error));
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};
let getFollowingStories = () => {
  axios
    .get("http://127.0.0.1:8000/api/v0.1/stories/gethome", {
      headers: { Authorization: localStorage.getItem("Token") },
    })
    .then((res) => {
      let resp = res["data"];
      let length_posts = resp["Story"].length;
      for (let i = 0; i < length_posts; i++) {
        let post = resp["Story"][i];
        let post_id = post["posted_by"];
        axios
          .get(`http://127.0.0.1:8000/api/v0.1/users/getpostedby/${post_id}`, {
            headers: { Authorization: localStorage.getItem("Token") },
          })
          .then((res_user) => {
            let resp_user = res_user["data"];
            let user = resp_user["User"];
            let div = document.createElement("div");
            div.setAttribute("class", "status-card");
            div.innerHTML = `<div onclick="openStoriesPopup(${post["id"]})" class="profile-pic">
            <img src="logos/${post["story_image"]}" alt="" />
          </div>
          <p class="username">${user["username"]}</p>
        </div>`;
            document.getElementById("stories_section").appendChild(div);
          })
          .catch((error) => console.log(error));
      }
    })
    .catch((error) => console.log(error));
};
