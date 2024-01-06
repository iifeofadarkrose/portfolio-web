import { BallTriangle } from 'react-loader-spinner'
const PageLoader = () => {
  return (
    <div className="loader">
   <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#ffffff"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>
  );
};

export default PageLoader;
