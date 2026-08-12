import Link from "next/link";
import fetchCurrentCat from "../../_operations/categoryBD/fetchCurrentCat";

export default async function Category({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<React.ReactNode> {
  const { slug } = await params;

  const currentSlug = slug[slug.length - 1];

  const currentCategory = await fetchCurrentCat(currentSlug);
  if (!currentCategory) {
    return;
  }
  return (
    <>
      <h2>{currentCategory[0].name}</h2>
      <ul>
        {currentCategory[0].children.length > 0 &&
          currentCategory[0].children.map((cat) => {
            if (cat.parentId === currentCategory[0].id) {
              return (
                <li key={cat.id}>
                  <Link
                    href={`/shop/category/${slug.join("/")}/${cat.slug}`}
                    className=" before:content-['['] after:content-[']']"
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
    </>
  );
}
