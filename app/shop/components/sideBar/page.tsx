import fetchCategories from "../../_operations/categoryBD/fetchCategories";
import SideBarClient from "./sideBar";

export default async function SideBar() {
  const categories = await fetchCategories();

  return <SideBarClient categories={categories} />;
}
