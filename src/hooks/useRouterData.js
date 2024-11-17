import { faEye, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";

const useRouterData = () => {
  const quickConsultant = [
    {
      name: "All Consultant",
      icon: faEye,
      path: "/quick-consultation",
    },
    {
      name: "Unseen Consultant",
      icon: faEyeLowVision,
      path: "/unseen-consultation",
    },
  ];

  return {
    quickConsultant,
  };
};

export default useRouterData;
