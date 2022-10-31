export default function search(array, searchString) {
  const filter = array.filter((recipe) => recipe.name.toLowerCase().includes(searchString.toLowerCase()));
  return filter;
}
