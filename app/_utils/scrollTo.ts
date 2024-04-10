//* Function to automatically scroll to the field with an error.
export const scrollTo = ({
  id,
  offsetTop,
}: {
  id: string;
  offsetTop: number;
}): void => {
  const element = document.getElementById(id);

  if (!element) return;

  const yOffset =
    element.getBoundingClientRect().top + window.scrollY - offsetTop;

  window.scrollTo({
    top: yOffset,
    behavior: "smooth",
  });
};
