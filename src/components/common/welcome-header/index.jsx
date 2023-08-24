import growfinLogo from "../../../asset/growfin_logo.png";
const imageSize = {
  height: "70px",
  width: "70px",
};

export function WelcomeHeader() {
  return (
    <div style={{ display: "flex", borderBottom: "0.5px solid" }}>
      <img src={growfinLogo} style={imageSize} alt="growinfApp"></img>
      &nbsp;&nbsp;
      <h2>Let's have some fun!</h2>
    </div>
  );
}
