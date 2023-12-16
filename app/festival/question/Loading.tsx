import LoadingBar from "@/app/components/common/LoadingBar";

const Loading = () => {
  return (
    <div
      className="blue"
      style={{
        position: "absolute",
        backgroundImage: "",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      <LoadingBar />
    </div>
  );
};

export default Loading;
