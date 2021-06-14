import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const CategoriesButton = (props) => {
  const location = useLocation();
  console.log(location);
  let fill;
  if (location.pathname === "/categories") {
    fill = "#d07017";
  } else {
    fill = "#828282";
  }

  return (
    <Link to="/">
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M80.6169 0.10984L137.642 11.5149L149.047 68.5401C149.23 69.4532 149.184 70.3973 148.914 71.2885C148.644 72.1797 148.159 72.9905 147.5 73.649L73.6489 147.5C73.1237 148.026 72.5002 148.442 71.8139 148.726C71.1277 149.011 70.3922 149.157 69.6494 149.157C68.9066 149.157 68.171 149.011 67.4848 148.726C66.7985 148.442 66.175 148.026 65.6498 147.5L1.65662 83.5072C1.13138 82.982 0.714749 82.3584 0.430496 81.6722C0.146243 80.9859 -6.10352e-05 80.2504 -6.10352e-05 79.5076C-6.10352e-05 78.7648 0.146243 78.0293 0.430496 77.3431C0.714749 76.6568 1.13138 76.0333 1.65662 75.5081L75.508 1.65668C76.1664 0.99824 76.9773 0.512542 77.8685 0.242701C78.7597 -0.0271409 79.7038 -0.0727781 80.6169 0.10984ZM101.5 35.5C104.74 31.8433 110.475 31.6169 114 35C117.384 38.248 117.605 43.4841 114.5 47C111.14 50.8055 104.864 50.8025 101.5 47C98.5244 43.6362 98.5218 38.8615 101.5 35.5Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
};

export default CategoriesButton;
