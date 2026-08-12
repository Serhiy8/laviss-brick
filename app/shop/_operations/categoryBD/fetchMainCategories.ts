import categories from "../../../../fakeBD/categoryBD.json";

export default function fetchMainCategories() {
  return categories.filter((el) => el.parentId === null);
}
