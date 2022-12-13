export const pxScrolled = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return -(
    bb.top -
    (innerHeight - window.innerHeight / (100 / (100 - percent)))
  );
};

// Detect Element In Viewport Or Not For Image Background Section
export const inViewport = (element, percent) => {
  // Get the elements position relative to the viewport
  var bb = element.getBoundingClientRect();
  // Check if the element is outside the viewport
  // Then invert the returned value because you want to know the opposite
  return !(bb.top > innerHeight - window.innerHeight / (100 / (100 - percent)));
};

// fetch Services
export const fetchServices = async (hairSize, hairType) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services?hair_size=${hairSize}&hair_type=${hairType}&limit=all`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
// Make Price
export const makePrice = (price) => `€${parseFloat(price).toFixed(2)}`;
