import { useRouter } from "next/router";
import { SetStateAction, useState } from "react";

import { AlertContainer } from "../../styles/alert.styles";
import useAddLocation from "../../server-store/mutations/useAddLocation";

const Alert = () => {
  const [realTimeData, setRealTimeData] = useState(null);

  const router = useRouter();
  const { location } = router.query;

  const { data: addLocation, isLoading, error } = useAddLocation();

  // const getRealTimeData = () => {
  //   if (location !== "") addLocation(location,
  //     onSuccess: (data: SetStateAction<null>) => {
  //       console.log('onSuccess data:', data);
  //       setRealTimeData(data)
  //     }
  //   );
  // };

  return (
    <AlertContainer>
      {/* <button onClick={getRealTimeData}>real time date</button> */}
    </AlertContainer>
  );
};

export default Alert;
