const categories = [
  "Architecture Designer",
  "Interior Designer",
  "Event Designer",
];

const Filter = ({ selectedCategories, setSelectedCategories }) => {
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-4">Category</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
