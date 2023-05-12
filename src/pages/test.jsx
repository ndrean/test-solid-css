import StyledTitle from "../components/title";

export default function Test() {
  return (
    <>
      <StyledTitle>Default title</StyledTitle>
      <StyledTitle color="red" fontWeight="bold">
        Styled title
      </StyledTitle>
    </>
  );
}
