import { Link, useParams } from "react-router-dom";

const EditUserInfoButton = (props) => {
  const { id }= useParams();

  return(
    <Link to={`/user/${id}/edit`}>
      <svg 
        width="30" 
        height="30" 
        viewBox="0 0 124 150" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M116.252 134.957H7.78053C5.72564 134.957 3.75492 135.749 2.30189 137.16C0.848867 138.57 0.0325643 140.483 0.0325643 142.478C0.0325643 144.473 0.848867 146.386 2.30189 147.797C3.75492 149.208 5.72564 150 7.78053 150H116.252C118.307 150 120.278 149.208 121.731 147.797C123.184 146.386 124 144.473 124 142.478C124 140.483 123.184 138.57 121.731 137.16C120.278 135.749 118.307 134.957 116.252 134.957ZM7.78053 119.913H8.47785L40.7869 117.055C44.3261 116.713 47.6363 115.199 50.1619 112.767L119.894 45.072C122.6 42.2962 124.063 38.5921 123.961 34.7712C123.859 30.9504 122.202 27.3245 119.351 24.6881L98.1218 4.07858C95.3511 1.55201 91.7203 0.102292 87.9203 0.00521073C84.1202 -0.0918705 80.416 1.17046 77.5122 3.55206L7.78053 71.2476C5.27612 73.6994 3.71676 76.913 3.36419 80.3488L0.0325643 111.714C-0.0718088 112.816 0.0754441 113.927 0.463825 114.967C0.852207 116.007 1.47215 116.951 2.27947 117.732C3.00344 118.429 3.86204 118.98 4.80604 119.355C5.75003 119.729 6.76085 119.919 7.78053 119.913ZM87.3521 14.609L108.504 35.1433L93.0081 49.8107L72.2436 29.6524L87.3521 14.609ZM18.3952 81.6275L62.0163 39.5811L82.9358 59.8898L39.5472 102.011L16.3033 104.117L18.3952 81.6275Z" 
          fill="#828282"
        />
      </svg>
    </Link>
  )
}

export default EditUserInfoButton;