import fetchCategories from "../../_operationCategoryBD/fetchCategories";
import SideBarClient from "./page";

export default async function SideBar() {
  const categories = await fetchCategories();

  return <SideBarClient categories={categories} />;
}
