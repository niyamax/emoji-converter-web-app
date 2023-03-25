function convert() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const regex = /:(\w+):/g;
  const result = input.replace(regex, (match, p1) => {
    return emojiMap[p1] || `:${p1}:`;
  });
  output.innerHTML = result;
}