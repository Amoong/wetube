const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const comments = document.getElementById("comments");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const span2 = document.createElement("span");
  span2.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const textarea = form.querySelector("textarea");
  const videoId = videoContainer.dataset.id;
  const text = textarea.value;

  if (text === "") {
    return;
  }

  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (response.status === 201) {
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }

  textarea.value = "";
};

const handleClick = (e) => {
  const { target } = e;
  if (target.tagName === "BUTTON") {
    deleteComment(target.parentNode);
  }
};

const deleteComment = async (commentElem) => {
  const { status } = await fetch(`/api/comments/${commentElem.dataset.id}`, {
    method: "DELETE",
  });

  if (status === 200) {
    commentElem.remove();
  }
};

if (form) {
  form.addEventListener("submit", handleSubmit);
  comments.addEventListener("click", handleClick);
}
