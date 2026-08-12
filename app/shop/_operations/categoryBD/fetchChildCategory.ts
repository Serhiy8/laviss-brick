import categories from "../../../../fakeBD/categoryBD.json";

export default function fetchChildCategory(id: string | null) {
  return categories.filter((el) => {
    if (el.parentId) {
      return el.parentId === id;
    }
  });
}
