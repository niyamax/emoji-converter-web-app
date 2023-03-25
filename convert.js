const input = document.getElementById("input");
const regex = /:(\w+):/g;

function convert() {
  const result = input.value.replace(regex, (match, p1) => {
    return emojiMap[p1] || `:${p1}:`;
  });
  input.value = result;
}
input.addEventListener("input", convert);