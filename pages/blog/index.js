import Container from "../../components/Container";

export default function Blog() {
  return (
    <Container>
      <h1 className="pl-6">Blog</h1>
      <a
        className="w-fit px-6 no-underline rounded-xl hover:shadow-lg duration-200 ease-out active:shadow-none"
        href="./blog/quitters"
      >
        <h3>20220826 - Quitters</h3>
        <p>
          A roadtrip through my past and present perspectives on making music,
          being a musician, finding meaning in that, and losing meaning in that.
          Undertones of DAW hatred.
        </p>
      </a>
    </Container>
  );
}
