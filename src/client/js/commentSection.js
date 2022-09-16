const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (e) => {
  e.preventDefault();
  const textarea = form.querySelector("textarea");
  const videoId = videoContainer.dataset.id;
  const text = textarea.value;

  if (text === "") {
    return;
  }

  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
};

if (form) {
  form.addEventListener("submit", handleSubmit);
}
