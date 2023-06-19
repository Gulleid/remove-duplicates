// Good Luck 💪🏾
function removeDuplicates(array) {
  return Array.from(new Set(array));
}

const names = ["hassan","aisha","aisha"];
const uniquenames = removeDuplicates(names);
console.log(uniquenames);