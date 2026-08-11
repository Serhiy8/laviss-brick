import categories from "../../../fakeBD/categoryBD.json";

interface CategoryEl {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: boolean | null | string;
  image: string;
  isActive: boolean;
  sortOrder: number;
  children: CategoryEl[];
}

export default function fetchCurrentCat(slug: string) {
  const current: CategoryEl[] = [];
  categories.find((el) => {
    if (el.slug === slug) {
      current.push(el);
    } else if (el.children.length !== 0) {
      el.children.filter((el) => el.slug === slug && current.push(el));
    }
  });

  return current;
}
